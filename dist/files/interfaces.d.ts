export interface GetFilesResponse {
    files: [
        {
            name: string;
            path: string;
            type: string;
            typePath: string[];
            hash: string;
            size: number;
            date: number;
            origin: string;
            refs: {
                resource: string;
                download: string;
            };
            gcodeAnalysis: {
                estimatedPrintTime: number;
                filament: {
                    length: number;
                    volume: number;
                };
            };
            print: {
                failure: number;
                success: number;
                last: {
                    date: number;
                    success: boolean;
                };
            };
        }
    ];
    free: number;
    total: number;
}
export interface PostLocalFileResponse {
    files: {
        local: {
            name: string;
            origin: string;
            refs: {
                resource: string;
                download: string;
            };
        };
    };
    done: boolean;
}
