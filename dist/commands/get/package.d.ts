import { Command } from "@oclif/core";
export declare class GetPackage extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        help: import("@oclif/core/lib/interfaces").BooleanFlag<void>;
    };
    static args: {
        package: import("@oclif/core/lib/interfaces/parser").Arg<string | undefined, Record<string, unknown>>;
        version: import("@oclif/core/lib/interfaces/parser").Arg<string | undefined, Record<string, unknown>>;
    };
    run(): Promise<void>;
}
