#!/usr/bin/env node

import * as commander from 'commander';

const program = new commander.Command();

program
  .version('1.0.1')
  .description('A CLI tool for managing permissions and data models.');

program
  .command('p-list')
  .description('List permissions for a specific version.')
  .option('--version <version>', 'The version to list permissions for.')
  .option('--print', 'Print the output to the console.')
  .option('--output <file>', 'Write the output to a file.');

program
  .command('p-diff')
  .description('Compare permissions between two versions.')
  .option('--previous <version>', 'The previous version to compare.')
  .option('--new <version>', 'The new version to compare.')
  .option('--print', 'Print the output to the console.')
  .option('--output <file>', 'Write the output to a file.');

program
  .command('d-diff')
  .description('Compare data models between two versions.')
  .option('--previous <version>', 'The previous version to compare.')
  .option('--new <version>', 'The new version to compare.')
  .option('--print', 'Print the output to the console.')
  .option('--output <file>', 'Write the output to a file.');

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
} else {
  console.log('metaman: A CLI tool for managing permissions and data models.\n');
}
