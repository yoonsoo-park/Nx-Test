"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
class Release extends core_1.Command {
    async run() {
        this.log("Analyzing the release repo... from Topics");
    }
}
exports.default = Release;
Release.description = "Analyze the Releases";
Release.examples = [
    `<%= config.bin %> <%= command.id %>
Release analyzer here!! (./src/commands/metaman/release/diff.ts)
`,
];
Release.flags = {};
