import {Command, Flags} from '@oclif/core';

export class SubListCommand extends Command {
  static description = 'list';
  static examples = [
    `<%= config.bin %> <%= command.id %>
Release analyzer here!! (.src/commands/metaman/release/list.ts)
`,
  ];
  static flags = {
    print: Flags.boolean({
      char: 'p',
      description: 'display the information in a table',
    }),
    output: Flags.boolean({
      char: 'o',
      description: 'display the information in a file (xlsx).',
    }),
  };

  async run() {
    const {args, flags} = await this.parse(SubListCommand);

    this.log('Running Release list... from Topics');

    if (flags.print) {
      this.log('table will be created... from Topics');
    }

    if (flags.output) {
      this.log('output file will be created... from Topics');
    }
  }
}
