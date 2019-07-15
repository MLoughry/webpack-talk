const { execSync } = require("child_process");
const { resolve } = require("path");
const { sync: glob } = require("glob");
const { writeFileSync, readFileSync } = require("fs");
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

  // Copy unmodified file
  writeFileSync(resolve(folder, "result", "production", file), content);

  // Copy prettified file
  writeFileSync(
    resolve(
      folder,
      "result",
      "production",
      file.replace(/\.js$/, "_formatted.js")
    ),
    prettier.format(content, { filepath: file })
  );
}

function copyDevFile(file) {
  const content = readFileSync(resolve(folder, "dist", file)).toString();

  // Copy unmodified file
  writeFileSync(resolve(folder, "result", "debug", file), content);

  // Copy prettified file
  writeFileSync(
    resolve(folder, "result", "debug", file.replace(/\.js$/, "_annotated.js")),
    prettier.format(
        content
            .replace(/eval\((".*")\);$/gm, (match, script) => JSON.parse(script))
            .replace(/^\/\*+\//gm, '')
        , { filepath: file })
  );
}

build();
