import { Base } from "../base";
import type { VersionInformation } from "./interfaces";
export declare class General extends Base {
    getVersionInformation(): Promise<VersionInformation>;
}
