import { UserBehavior } from "../../type/index";
export declare const createHistoryEvent: <T extends keyof History>(type: T) => (this: any) => any;
export declare function captureEvents<T extends UserBehavior>(mouseEventList: string[], targetKey: string, data?: T): void;
