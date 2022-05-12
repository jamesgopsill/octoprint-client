import { Base } from "../base";
import { JobCommands } from "./enums";
export declare class Job extends Base {
    issueJobCommand(cmd: JobCommands): Promise<boolean>;
}
