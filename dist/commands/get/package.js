"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPackage = void 0;
const core_1 = require("@oclif/core");
const child_process_1 = require("child_process");
const fs = require("fs");
const path = require("path");
function downloadPackage(packageName, version) {
    const packageDir = path.join(__dirname, "..", packageName);
    console.log("🚀 LAUNCHING ||||GET PACKAGE|||| 🚀, Houston at: " + packageDir);
    // Create the package directory if it does not exist
    if (!fs.existsSync(packageDir)) {
        fs.mkdirSync(packageDir);
    }
    // Clone the repository and checkout the specified version
    const repoUrl = `https://github.com/yoonsoo-park/Nx-Test.git`;
    const repoDir = path.join(__dirname, "..", "tmp", packageName);
    (0, child_process_1.execSync)(`git clone ${repoUrl} ${repoDir}`);
    (0, child_process_1.execSync)(`cd ${repoDir} && git checkout ${version}`);
    // Copy the contents of the cloned repository to the package directory
    const sourceDir = path.join(repoDir, "dx-toolbox", "packages", packageName);
    const tempTargetDir = path.join(packageDir, "temp");
    // Create the package directory if it does not exist
    // if it does exist, delete it and create it again.
    if (!fs.existsSync(tempTargetDir)) {
        fs.mkdirSync(tempTargetDir);
    }
    else {
        fs.rmdirSync(tempTargetDir, { recursive: true });
        fs.mkdirSync(tempTargetDir);
    }
    const targetDir = tempTargetDir;
    //   console.log("source dir is: " + sourceDir);
    console.log("🧨 [dx-toolbox:get:package] the requested version will be in 🧨: " +
        targetDir);
    // Copy the source directory to the target directory
    fs.cpSync(sourceDir, targetDir, { recursive: true });
    // Optionally, remove the cloned repository directory
    fs.rmdirSync(repoDir, { recursive: true });
}
class GetPackage extends core_1.Command {
    async run() {
        const { args, flags } = await this.parse(GetPackage);
        const { package: packageName, version } = args;
        if (version !== undefined && packageName !== undefined) {
            downloadPackage(packageName, version);
        }
    }
}
exports.GetPackage = GetPackage;
GetPackage.description = "Get a specific version of a package from GitHub";
GetPackage.examples = ["$ dx-auto get package metaman v1.0.0"];
GetPackage.flags = {
    help: core_1.Flags.help({ char: "h" }),
};
GetPackage.args = {
    package: core_1.Args.string(),
    version: core_1.Args.string(),
};
