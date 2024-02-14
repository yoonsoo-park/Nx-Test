"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubDiffCommand = void 0;
const core_1 = require("@oclif/core");
const child_process_1 = require("child_process");
class SubDiffCommand extends core_1.Command {
    async run() {
        this.log("Permission_Diff from Topics...");
        (0, child_process_1.spawn)("nx", ["serve", "metaman"], { stdio: "inherit" });
    }
}
exports.SubDiffCommand = SubDiffCommand;
SubDiffCommand.description = "Analyze the Permissions";
SubDiffCommand.flags = {
    print: core_1.Flags.boolean({
        char: "p",
        description: "display the information in a table... from Topics",
    }),
    output: core_1.Flags.boolean({
        char: "o",
        description: "display the information in a file (xlsx)... from Topics",
    }),
};
