"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const cross_fetch_1 = require("cross-fetch");
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
        const config = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Api-Key": this.apiKey
            },
            body: JSON.stringify(bodyArgs),
        };
        return (0, cross_fetch_1.fetch)(url, config)
            .then(async (r) => {
            if (r.ok) {
                r.data = await r.json();
            }
            return r;
        });
    }
    async post(url, bodyArgs) {
        if (typeof bodyArgs == "undefined") {
            bodyArgs = {};
        }
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Api-Key": this.apiKey
            },
            body: JSON.stringify(bodyArgs),
        };
        return (0, cross_fetch_1.fetch)(url, config)
            .then(async (r) => {
            if (r.ok && r.status != 204) {
                r.data = await r.json();
            }
            return r;
        });
    }
    async delete(url, bodyArgs) {
        if (typeof bodyArgs != "undefined") {
            bodyArgs = {};
        }
        const config = {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Api-Key": this.apiKey
            },
            body: JSON.stringify(bodyArgs),
        };
        return (0, cross_fetch_1.fetch)(url, config)
            .then(async (r) => {
            if (r.ok && r.status != 204) {
                r.data = await r.json();
            }
            return r;
        });
    }
}
exports.Base = Base;
