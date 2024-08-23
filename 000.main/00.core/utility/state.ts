import { Action } from "../interface/action.interface";
import { filter } from "rxjs/operators";
import { MonoTypeOperatorFunction } from "rxjs";

/**
 * Helper function used by Epics to filter required action types
 */
//export const ofType = (
//  ...types: ColorType[]
//): MonoTypeOperatorFunction<Action> => {
//  console.log("of a type " + types);
//  return filter((action: Action) => {
//    console.log("of a action " + action);
//    return types.indexOf(action.type) > -1;
//  });
//};

/**
 * Function which helps to create actions without mistakes
 * @param type
 * @param payload
 */
export const action = <T>(type: string, bale?: any): Action<T> => ({
  type,
  bale
});
