export declare const getVersionInformation: (baseURL: string, apiKey: string) => Promise<{
    api: string;
    server: string;
    text: string;
}>;
export declare const getSystemInformation: (baseURL: string, apiKey: string) => Promise<{
    server: string;
    safemode: string;
}>;
