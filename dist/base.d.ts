/**
 * ResponseError to retun any response errors to the user.
 */
export declare class ResponseError extends Error {
    response: Response;
    constructor(response: Response);
}
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
    protected get(url: string, bodyArgs?: {}): Promise<any>;
}
