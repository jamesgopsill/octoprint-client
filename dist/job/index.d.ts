import { Base } from "../base";
import { JobCommands } from "./enums";
export declare class Job extends Base {
    jobCommand(cmd: JobCommands): Promise<import("..").HttpResponse<undefined>>;
    jobInformation(): Promise<import("..").HttpResponse<unknown>>;
}
