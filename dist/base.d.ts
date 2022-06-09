import { HttpResponse } from "./interfaces";
/**
 * The base class to build the API client from
 */
export declare abstract class Base {
    readonly baseURL: string;
    readonly apiKey: string;
    /** Checks if the IP address is a valid format before creating an instance of the client. */
    constructor(baseURL: string, apiKey: string);
    /**
     * An internal get request function
     */
    protected get<T>(url: string, bodyArgs?: {}): Promise<HttpResponse<T>>;
    protected post<T>(url: string, bodyArgs?: {}): Promise<HttpResponse<T>>;
}
