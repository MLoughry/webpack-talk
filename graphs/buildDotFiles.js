const { resolve, basename } = require("path");
const { sync: glob } = require("glob");
const { sync: mkdirp } = require("mkdirp");
const opn = require("open");
const { execSync } = require("child_process");

const { folder } = require("yargs").option("folder", {
  alias: "f",
  demandOption: true,
  describe: "folder to build"
}).argv;

function build() {
  for (const dotFile of glob("*.dot", { cwd: folder, absolute: true })) {
    const outputFile = dotFile.replace(/\.dot/, ".svg.");
    execSync(
      `"C:\\Program Files (x86)\\Graphviz2.38\\bin\\dot.exe" -Tsvg ${dotFile} -o ${outputFile}`
    );
    opn(outputFile);
  }
}

build();
