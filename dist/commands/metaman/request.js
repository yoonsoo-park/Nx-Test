"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const axios_1 = require("axios");
const fs = require("fs");
class Metaman extends core_1.Command {
    async run() {
        const { flags } = await this.parse(Metaman);
        const serverUrl = "http://localhost:3000"; // URL of your local server
        const versionUrl = `${serverUrl}/${flags.package_version}`; // URL of the API version
        const inputData = flags.inputData || (flags.input && fs.readFileSync(flags.input, "utf-8")); // Read the input file or use the input data
        if (!inputData) {
            this.error("Missing input data");
        }
        this.log("versionUrl: " + versionUrl + " inputData: " + inputData.toString());
        try {
            const parsedInputData = JSON.parse(inputData); // Parse the JSON string
            const response = await axios_1.default.post(versionUrl, parsedInputData, {
                headers: { "Content-Type": "application/json" }, // Set the request headers
            });
            this.log(response.data); // Output the response from the server
        }
        catch (error) {
            this.error(`Error: ${error.message}`);
        }
    }
}
exports.default = Metaman;
Metaman.description = "describe the command here";
Metaman.flags = {
    package_version: core_1.Flags.string({
        char: "v",
        description: "package version to use.",
    }),
    input: core_1.Flags.string({
        char: "i",
        description: "metaman task input.",
    }),
    inputData: core_1.Flags.string({
        char: "d",
        description: "metaman task input data.",
    }),
};
