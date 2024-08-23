import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import GlopUnit from "./01.glop.unit/glop.unit";


import Glop from "./01.glop.unit/fce/glop.interface";
import { GlopModel } from "./01.glop.unit/glop.model";


export const list: Array<any> = [TitleUnit,GlopUnit];

import * as reduceFromGlop from "./01.glop.unit/glop.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 glop : reduceFromGlop.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 glop : Glop = new GlopModel();

}
