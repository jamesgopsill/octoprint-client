"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const base_1 = require("../base");
const cross_fetch_1 = require("cross-fetch");
class Files extends base_1.Base {
    getFiles() {
        const url = `${this.baseURL}/api/files`;
        return this.get(url);
    }
    async selectFileAndPrint(file) {
        const url = `${this.baseURL}/api/files/local/${file}`;
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": this.apiKey,
            },
            body: JSON.stringify({
                command: "select",
                print: true,
            }),
        };
        return (0, cross_fetch_1.fetch)(url, config).then((r) => {
            if (r.ok) {
                return true;
            }
            throw new base_1.ResponseError(r);
        });
    }
    async uploadFileToLocal(gcode) {
        const url = `${this.baseURL}/api/files/local`;
        // Create the file upload from the string
        let formData;
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("file", gcode, "octoprint-client.gcode");
        }
        else {
            // Browser
            const blob = new Blob([gcode], { type: "text/plain" });
            formData = new FormData();
            formData.append("file", blob, "octoprint-client.gcode");
        }
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "X-Api-Key": this.apiKey,
            },
            body: formData,
        };
        return (0, cross_fetch_1.fetch)(url, config).then((r) => {
            if (r.ok) {
                return r.json();
            }
            throw new base_1.ResponseError(r);
        });
    }
    async uploadFileToSDCard(gcode) {
        const url = `${this.baseURL}/api/files/sdcard`;
        // Create the file upload from the string
        let formData;
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("file", gcode, "octoprint-client.gcode");
        }
        else {
            // Browser
            const blob = new Blob([gcode], { type: "text/plain" });
            formData = new FormData();
            formData.append("file", blob, "octoprint-client.gcode");
        }
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "X-Api-Key": this.apiKey,
            },
            body: formData,
        };
        return (0, cross_fetch_1.fetch)(url, config).then((r) => {
            if (r.ok) {
                return r.json();
            }
            throw new base_1.ResponseError(r);
        });
    }
}
exports.Files = Files;
