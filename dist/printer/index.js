"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const base_1 = require("../base");
class Printer extends base_1.Base {
    status() {
        const url = `${this.baseURL}/api/printer`;
        return this.get(url);
    }
    homeAll() {
        const url = `${this.baseURL}/api/printer/printhead`;
        const args = {
            command: "home",
            axes: ["x", "y", "z"],
        };
        return this.post(url, args);
    }
    jog(x, y, z, absolute, speed) {
        const url = `${this.baseURL}/api/printer/printhead`;
        const args = {
            command: "jog",
        };
        if (x)
            args["x"] = x;
        if (y)
            args["y"] = y;
        if (z)
            args["z"] = z;
        if (absolute)
            args["absolute"] = absolute;
        if (speed)
            args["speed"] = speed;
        return this.post(url, args);
    }
    feedRate(factor) {
        const url = `${this.baseURL}/api/printer/printhead`;
        const args = {
            command: "feedrate",
            factor: factor,
        };
        return this.post(url, args);
    }
    /**
     * Sends any command to the printer via the serial interface. Should be used with some care as some commands can interfere with or even stop a running print job.
     * @param cmd
     * @returns
     */
    printerCommand(cmd) {
        const url = `${this.baseURL}/api/printer/command`;
        const args = {
            command: cmd,
        };
        console.log(args);
        return this.post(url, args);
    }
    /**
     * Sends multiple commands to the printer via the serial interface. Should be used with some care as some commands can interfere with or even stop a running print job.
     * @param cmd
     * @returns
     */
    printerCommands(cmds) {
        const url = `${this.baseURL}/api/printer/command`;
        const args = {
            commands: cmds,
        };
        return this.post(url, args);
    }
}
exports.Printer = Printer;
