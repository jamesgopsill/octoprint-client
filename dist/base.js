"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.ResponseError = void 0;
const cross_fetch_1 = require("cross-fetch");
/**
 * ResponseError to retun any response errors to the user.
 */
class ResponseError extends Error {
    constructor(response) {
        super("Check error.response for the response from the server.");
        this.name = "ResponseError";
        this.message = "Check error.response for the response from the server.";
        this.response = response;
    }
}
exports.ResponseError = ResponseError;
/**
 * The base class to build the API client from
 */
class Base {
    /** Checks if the IP address is a valid format before creating an instance of the client. */
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }
    /**
     * An internal get request function
     */
    async get(url, bodyArgs) {
        if (typeof bodyArgs != "undefined") {
            bodyArgs = {};
        }
        return (0, cross_fetch_1.fetch)(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Api-Key": this.apiKey
            },
            body: JSON.stringify(bodyArgs),
        }).then((r) => {
            if (r.ok) {
                return r.json();
            }
            throw new ResponseError(r);
        });
    }
}
exports.Base = Base;
