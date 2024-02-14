"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubListCommand = void 0;
const core_1 = require("@oclif/core");
class SubListCommand extends core_1.Command {
    async run() {
        const { args, flags } = await this.parse(SubListCommand);
        this.log('Running Release list... from Topics');
        if (flags.print) {
            this.log('table will be created... from Topics');
        }
        if (flags.output) {
            this.log('output file will be created... from Topics');
        }
    }
}
exports.SubListCommand = SubListCommand;
SubListCommand.description = 'list';
SubListCommand.examples = [
    `<%= config.bin %> <%= command.id %>
Release analyzer here!! (.src/commands/metaman/release/list.ts)
`,
];
SubListCommand.flags = {
    print: core_1.Flags.boolean({
        char: 'p',
        description: 'display the information in a table',
    }),
    output: core_1.Flags.boolean({
        char: 'o',
        description: 'display the information in a file (xlsx).',
    }),
};
