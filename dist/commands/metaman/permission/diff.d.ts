import { Command } from "@oclif/core";
export declare class SubDiffCommand extends Command {
    static description: string;
    static flags: {
        print: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        output: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
