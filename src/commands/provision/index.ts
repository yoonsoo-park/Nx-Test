import { Command } from "@oclif/core";

export default class Provision extends Command {
  static description =
    "Provides State Provisioning of a Salesforce org to a given state.";

  static examples = ["$ dx-auto provision"];

  public async run(): Promise<void> {
    await this.parse(Provision);

    this.log(
      "\nWelcome to provision...A State Provisioning Tool...COMING SOON... version1\n"
    );
  }
}
