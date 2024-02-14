import { Command } from '@oclif/core';
export declare class SubListCommand extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        print: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        output: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
