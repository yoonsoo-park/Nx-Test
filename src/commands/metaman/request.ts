import { Command, Flags } from "@oclif/core";
import axios from "axios";
import * as fs from "fs";

export default class Metaman extends Command {
  static description = "describe the command here";

  static flags = {
    package_version: Flags.string({
      char: "v",
      description: "package version to use.",
    }),
    input: Flags.string({
      char: "i",
      description: "metaman task input.",
    }),
    inputData: Flags.string({
      char: "d",
      description: "metaman task input data.",
    }),
  };

  async run() {
    const { flags } = await this.parse(Metaman);

    const serverUrl = "http://localhost:3000"; // URL of your local server
    const versionUrl = `${serverUrl}/${flags.package_version}`; // URL of the API version
    const inputData =
      flags.inputData || (flags.input && fs.readFileSync(flags.input, "utf-8")); // Read the input file or use the input data

    if (!inputData) {
      this.error("Missing input data");
    }

    this.log(
      "versionUrl: " + versionUrl + " inputData: " + inputData.toString()
    );

    try {
      const parsedInputData = JSON.parse(inputData); // Parse the JSON string
      const response = await axios.post(versionUrl, parsedInputData, {
        headers: { "Content-Type": "application/json" }, // Set the request headers
      });
      this.log(response.data); // Output the response from the server
    } catch (error: any) {
      this.error(`Error: ${(error as Error).message}`);
    }
  }
}
