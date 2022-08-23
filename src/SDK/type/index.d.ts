export { DefaultOptons, Optins } from "./IOptions";
export { ReportData } from "./IReportData";
export declare enum TrackerConfig {
    version = "1.0.0"
}
export interface UserBehavior {
    user?: string;
    pageUrl?: string;
    startTime: number;
    stayTime: number;
}
