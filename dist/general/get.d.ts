import { ConnectionSettings, ServerInformation, VersionInformation } from "./interfaces";
export declare const getVersionInformation: (baseURL: string, apiKey: string) => Promise<VersionInformation>;
export declare const getSystemInformation: (baseURL: string, apiKey: string) => Promise<ServerInformation>;
export declare const getConnectionSettings: (baseURL: string, apiKey: string) => Promise<ConnectionSettings>;
