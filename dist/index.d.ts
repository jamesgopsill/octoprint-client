/**
 * OctoPrint Client Class
 *
 * ```typescript
 * import { OctoPrintClient } from "octoprint-client"
 *
 * const client = OctoprintClient("localhost", "abcdefg-...")
 * ```
 *
 * @param ip The IP address for the printer on the network.
 * @param apiKey Your unique key to authorise access to the OctoPrint API.
 */
export declare class OctoPrintClient {
    readonly baseURL: string;
    readonly apiKey: string;
    constructor(baseURL: string, apiKey: string);
    getVersionInformation(): Promise<{
        api: string;
        server: string;
        text: string;
    }>;
    getSystemInformation(): Promise<{
        server: string;
        safemode: string;
    }>;
}
