import { PostLocalFileResponse } from "./interfaces";
export declare const postFileLocal: (baseURL: string, apiKey: string, filename: string, gcode: string) => Promise<PostLocalFileResponse>;
