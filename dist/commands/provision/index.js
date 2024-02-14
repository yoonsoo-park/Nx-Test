"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
class Provision extends core_1.Command {
    async run() {
        await this.parse(Provision);
        this.log("\nWelcome to provision...A State Provisioning Tool...COMING SOON... version1\n");
    }
}
exports.default = Provision;
Provision.description = "Provides State Provisioning of a Salesforce org to a given state.";
Provision.examples = ["$ dx-auto provision"];
