import { Base } from "../base";
import type { ConnectionSettings, ServerInformation, VersionInformation } from "./interfaces";
export declare class General extends Base {
    version(): Promise<import("..").HttpResponse<VersionInformation>>;
    system(): Promise<import("..").HttpResponse<ServerInformation>>;
    connection(): Promise<import("..").HttpResponse<ConnectionSettings>>;
}
