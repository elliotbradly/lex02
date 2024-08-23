import Model from "./00.core/interface/model.interface";
import Title from "./00.core/title/fce/title.interface";
import Memory from "./01.memory.unit/fce/memory.interface";
import Route from "./02.route.unit/fce/route.interface";
export declare const list: Array<any>;
export declare const reducer: any;
export default class UnitData implements Model {
    auto: number;
    rootData: string;
    localData: string;
    title: Title;
    memory: Memory;
    route: Route;
}
