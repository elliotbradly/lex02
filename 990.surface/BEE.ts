import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import OpenUnit from "./01.open.unit/open.unit";
import ScreenUnit from "./02.screen.unit/screen.unit";


import Open from "./01.open.unit/fce/open.interface";
import { OpenModel } from "./01.open.unit/open.model";
import Screen from "./02.screen.unit/fce/screen.interface";
import { ScreenModel } from "./02.screen.unit/screen.model";


export const list: Array<any> = [TitleUnit,OpenUnit,ScreenUnit];

import * as reduceFromOpen from "./01.open.unit/open.reduce";
import * as reduceFromScreen from "./02.screen.unit/screen.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 open : reduceFromOpen.reducer, 
screen : reduceFromScreen.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 open : Open = new OpenModel();
screen : Screen = new ScreenModel();

}
