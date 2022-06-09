import { Base } from "./base";
import { General } from "./general";
import { Files } from "./files";
import { Job } from "./job";
import { Printer } from "./printer";
/**
 * Inherits from all the other classes featuring the API calls to OctoPrint.
 *
 *
 */
declare class OctoPrintClient extends Base {
}
interface OctoPrintClient extends General, Files, Job, Printer {
}
export { OctoPrintClient as OctoPrintClient };
export * from "./interfaces";
export * from "./general/interfaces";
export * from "./files/interfaces";
export * from "./job/enums";
