import type { DefaultOptons, Optins } from "../type/index";
export default class Tracker {
    options: Optins;
    constructor(options: Optins);
    private initDef;
    setUserId<T extends DefaultOptons["uuid"]>(uuid: T): void;
    private reportTracker;
    sendReport<T>(data: T, url: string | undefined): void;
    private installTracker;
}
