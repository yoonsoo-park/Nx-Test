import { Command } from "@oclif/core";

export default class Release extends Command {
  static description = "Analyze the Releases";

  static examples = [
    `<%= config.bin %> <%= command.id %>
Release analyzer here!! (./src/commands/metaman/release/diff.ts)
`,
  ];

  static flags = {};
  async run(): Promise<void> {
    this.log("Analyzing the release repo... from Topics");
  }
}
