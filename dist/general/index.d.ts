import { Base } from "../base";
import type { ConnectionSettings, ServerInformation, VersionInformation } from "./interfaces";
export declare class General extends Base {
    /**
     * Retrieve information regarding server and API version. Returns a JSON object with three keys, api containing the API version, server containing the server version, text containing the server version including the prefix OctoPrint (to determine that this is indeed a genuine OctoPrint instance).
     * @returns
     */
    version(): Promise<import("..").HttpResponse<VersionInformation>>;
    /**
     * Retrieve information regarding server status. Returns a JSON object with two keys, version containing the server version and safemode containing one of settings, incomplete_startup or flag to indicate the reason the server is running in safe mode, or the boolean value of false if it’s not running in safe mode.
     * @returns
     */
    server(): Promise<import("..").HttpResponse<ServerInformation>>;
    /**
     * Retrieve the current connection settings, including information regarding the available baudrates and serial ports and the current connection state.
     * @returns
     */
    connection(): Promise<import("..").HttpResponse<ConnectionSettings>>;
    /**
     * Instructs OctoPrint to connect or, if already connected, reconnect to the printer. Additional parameters are:
     * @param port Optional, specific port to connect to. If not set the current portPreference will be used, or if no preference is available auto detection will be attempted.
     * @param baudrate Optional, specific baudrate to connect with. If not set the current baudratePreference will be used, or if no preference is available auto detection will be attempted.
     * @param printerProfile Optional, specific printer profile to use for connection. If not set the current default printer profile will be used.
     * @param save Optional, whether to save the request’s port and baudrate settings as new preferences. Defaults to false if not set.
     * @param autoconnect Optional, whether to automatically connect to the printer on OctoPrint’s startup in the future. If not set no changes will be made to the current configuration.
     * @returns
     */
    connectPrinter(port: string, baudrate: number, printerProfile: string, save?: boolean, autoconnect?: boolean): Promise<import("..").HttpResponse<undefined>>;
    /**
     * Instructs OctoPrint to disconnect from the printer.
     * @returns
     */
    disconnectPrinter(): Promise<import("..").HttpResponse<undefined>>;
}
