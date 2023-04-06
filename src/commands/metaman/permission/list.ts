import {Command} from '@oclif/core';

export class SubListCommand extends Command {
  static description = 'list';

  async run() {
    this.log('Running Permission list... with Topics');
  }
}
