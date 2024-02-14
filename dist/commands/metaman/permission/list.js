"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubListCommand = void 0;
const core_1 = require("@oclif/core");
class SubListCommand extends core_1.Command {
    async run() {
        this.log('Running Permission list... with Topics');
    }
}
exports.SubListCommand = SubListCommand;
SubListCommand.description = 'list';
