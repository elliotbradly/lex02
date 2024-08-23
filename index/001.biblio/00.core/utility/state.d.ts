import { Action } from "../interface/action.interface";
/**
 * Helper function used by Epics to filter required action types
 */
/**
 * Function which helps to create actions without mistakes
 * @param type
 * @param payload
 */
export declare const action: <T>(type: string, bale?: any) => Action<T>;
