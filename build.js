const { execSync } = require("child_process");
const { resolve } = require("path");
const { sync: glob } = require("glob");
const { sync: mkdirp } = require("mkdirp");
const { writeFileSync, readFileSync, unlinkSync } = require("fs");
const prettier = require("prettier");

const { folder } = require("yargs").option("folder", {
  alias: "f",
  demandOption: true,
  describe: "folder to build"
}).argv;

function build() {
  buildProdVersion();
  buildDevVersion();
}

function buildProdVersion() {
  buildWebpack();
  for (const jsFile of glob("*.js", { cwd: resolve(folder, "dist") })) {
    copyProdFile(jsFile);
  }
}

function buildDevVersion() {
  buildWebpack("development");
  for (const jsFile of glob("*.js", { cwd: resolve(folder, "dist") })) {
    copyDevFile(jsFile);
  }
}

function buildWebpack(mode = "production") {
  execSync(
    `yarn webpack --mode ${mode} --config ${resolve(
      folder,
      "webpack.config.js"
    )}`,
    {
      stdio: "inherit"
    }
  );
}

function copyProdFile(file) {
  const content = readFileSync(resolve(folder, "dist", file)).toString();
  const destFolder = resolve(folder, "result", "production");

  mkdirp(destFolder);

  // Copy unmodified file
  writeFileSync(resolve(destFolder, file), content);

  // Copy prettified file
  writeFileSync(
    resolve(destFolder, file.replace(/\.js$/, "_formatted.js")),
    prettier.format(content, { filepath: file })
  );

  unlinkSync(resolve(folder, "dist", file));
}

function copyDevFile(file) {
  const content = readFileSync(resolve(folder, "dist", file)).toString();
  const destFolder = resolve(folder, "result", "debug");

  mkdirp(destFolder);

  // Copy unmodified file
  writeFileSync(resolve(destFolder, file), content);

  // Copy prettified file
  writeFileSync(
    resolve(destFolder, file.replace(/\.js$/, "_annotated.js")),
    prettier.format(
      content
        .replace(/eval\((".*")\);$/gm, (match, script) => JSON.parse(script))
        .replace(/^\/\*+\//gm, ""),
      { filepath: file }
    )
  );

  unlinkSync(resolve(folder, "dist", file));
}

build();
