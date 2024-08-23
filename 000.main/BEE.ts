import TitleUnit from "./00.core/title/title.unit";
import SupportUnit from "./01.effect.unit/effect.unit";

import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import Effect from "./01.effect.unit/fce/effect.interface";
import { EffectModel } from "./01.effect.unit/effect.model";

export const list: Array<any> = [TitleUnit, SupportUnit];

import * as reduceFromTitle from "./00.core/title/title.reduce";
import * as reduceFromSupport from "./01.effect.unit/effect.reduce";

export const reducer: any = {
  title: reduceFromTitle.reducer,
  effect: reduceFromSupport.reducer,
};

export default class UnitData implements Model {
  auto: number = 0;

  rootData: string = "../data";
  localData: string = "./data";

  title: Title = new TitleModel();
  effect: Effect = new EffectModel();
}
