import * as Act from "./title.action";
import { TitleModel } from "./title.model";
import State from "../state";
export declare function reducer(model: TitleModel, act: Act.Actions, state?: State): void | TitleModel;
