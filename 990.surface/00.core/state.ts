import { BehaviorSubject } from "rxjs-compat";

import { Action } from "./interface/action.interface";
import { Dispatcher } from "./utility/dispatcher";

import UnitModel from "../BEE";
import * as Effect from "../BEE";

import * as clone from "clone-deep";

export default class State extends BehaviorSubject<any> {
  private dispatcher: Dispatcher = new Dispatcher();

  rootReducer: any;
  log: string[] = [];
  ini: string;

  constructor(init: UnitModel = new UnitModel()) {
    super(init);

    this.dispatcher
      //.let(this.preMiddleware)
      .scan((state, action) => this.reducedApp(state, action), init)
      //.let(this.postMiddleware)
      .subscribe((state) => {
        //push the model some where
        super.next(state);
      });

    //var item = this.select("color");
    //this.combineEffect(this.dispatcher, item).subscribe(this.dispatcher);
  }

  save = () => {
    var stage = this.value.stage;
    this.value.stage = null;
    var past = JSON.stringify(this.value);

    this.log.push(past);
    this.value.stage = stage;

    return past;
    console.log("size log " + this.log.length);
  };

  undo = () => {
    //this.log.pop();
    var item = this.log.pop();
    console.log("size log " + this.log.length);
    if (item == null) return;
    return JSON.parse(item);
  };

  hark(key: string) {
    var list = key.split(".");
    var sig = "";
    list.forEach((a) => (sig += "['" + a + "']"));
    var partA = "this.map(state => state";
    var partC = ").distinctUntilChanged();";
    var end = partA + sig + partC;

    //console.log("you want to select " + end);

    return eval(end);
  }

  reducedApp(nextState: any, key: any) {
    for (var k in Effect.reducer) Effect.reducer[k](nextState[k], key, this);
    //StateReducer.reducer(nextState, key);
    //this.combineSpin(nextState, key);
    return nextState;
  }

  dispatch(value: Action) {
    this.dispatcher.dispatch(value);
  }

  pat(value: Action) {
    this.dispatch(value);
  }

  next(value: any) {
    this.dispatcher.dispatch(value);
  }
}
