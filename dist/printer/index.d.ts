import { Base } from "../base";
import { PrinterStatus } from "./interfaces";
export declare class Printer extends Base {
    status(): Promise<import("..").HttpResponse<PrinterStatus>>;
    homeAll(): Promise<import("..").HttpResponse<undefined>>;
    jog(x?: number, y?: number, z?: number, absolute?: boolean, speed?: number): Promise<import("..").HttpResponse<unknown>>;
    feedRate(factor: number): Promise<import("..").HttpResponse<undefined>>;
    /**
     * Sends any command to the printer via the serial interface. Should be used with some care as some commands can interfere with or even stop a running print job.
     * @param cmd
     * @returns
     */
    printerCommand(cmd: string): Promise<import("..").HttpResponse<undefined>>;
    /**
     * Sends multiple commands to the printer via the serial interface. Should be used with some care as some commands can interfere with or even stop a running print job.
     * @param cmd
     * @returns
     */
    printerCommands(cmds: string[]): Promise<import("..").HttpResponse<undefined>>;
}
