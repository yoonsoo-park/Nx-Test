import { Command, Flags } from "@oclif/core";
import { spawn } from "child_process";

export class SubDiffCommand extends Command {
  static description = "Analyze the Permissions";

  static flags = {
    print: Flags.boolean({
      char: "p",
      description: "display the information in a table... from Topics",
    }),
    output: Flags.boolean({
      char: "o",
      description: "display the information in a file (xlsx)... from Topics",
    }),
  };

  async run() {
    this.log("Permission_Diff from Topics...");
    spawn("nx", ["serve", "metaman"], { stdio: "inherit" });
  }
}
