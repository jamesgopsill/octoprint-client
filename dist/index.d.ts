import * as general from "./general";
import * as files from "./files";
export * as OctoPrintGeneralEndpoints from "./general";
export * as OctoPrintFilesEndpoints from "./files";
/**
 * OctoPrint client class
 *
 * ```typescript
 * import { OctoPrintClient } from "octoprint-client"
 *
 * const client = OctoPrintClient("URL", "APIKEY")
 * ```
 *
 * @param url The url of the OctoPrint server.
 * @param apiKey Your unique key to authorise access to the OctoPrint API.
 */
export declare class OctoPrintClient {
    readonly baseURL: string;
    readonly apiKey: string;
    constructor(baseURL: string, apiKey: string);
    getVersionInformation(): Promise<general.VersionInformation>;
    getSystemInformation(): Promise<general.ServerInformation>;
    getConnectionSettings(): Promise<general.ConnectionSettings>;
    getFiles(): Promise<unknown>;
    getFilesRecursive(): Promise<unknown>;
    postFileLocal(filename: string, gcode: string): Promise<files.PostLocalFileResponse>;
}
