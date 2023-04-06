import { Command, Flags, Args } from "@oclif/core";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

function downloadPackage(packageName: string, version: string) {
  const packageDir = path.join(__dirname, "..", packageName);
  console.log("package dir is: " + packageDir);

  // Create the package directory if it does not exist
  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir);
  }

  // Clone the repository and checkout the specified version
  const repoUrl = `https://github.com/yoonsoo-park/Nx-Test.git`;
  const repoDir = path.join(__dirname, "..", "tmp", packageName);
  execSync(`git clone ${repoUrl} ${repoDir}`);
  execSync(`cd ${repoDir} && git checkout ${version}`);

  // Copy the contents of the cloned repository to the package directory
  const sourceDir = path.join(repoDir, "dx-toolbox", "packages", packageName);
  const tempTargetDir = path.join(packageDir, "temp");
  // Create the package directory if it does not exist
  if (!fs.existsSync(tempTargetDir)) {
    fs.mkdirSync(tempTargetDir);
  }
  const targetDir = tempTargetDir;
  console.log("source dir is: " + sourceDir);
  console.log("target dir is: " + targetDir);

  // Copy the source directory to the target directory
  fs.cpSync(sourceDir, targetDir, { recursive: true });

  // Optionally, remove the cloned repository directory
  fs.rmdirSync(repoDir, { recursive: true });
}

export class GetPackage extends Command {
  static description = "Get a specific version of a package from GitHub";
  static examples = ["$ dx-auto get package metaman v1.0.0"];

  static flags = {
    help: Flags.help({ char: "h" }),
  };

  static args = {
    package: Args.string(),
    version: Args.string(),
  };

  async run() {
    const { args, flags } = await this.parse(GetPackage);
    const { package: packageName, version } = args;

    if (version !== undefined && packageName !== undefined) {
      downloadPackage(packageName, version);
    }
  }
}
