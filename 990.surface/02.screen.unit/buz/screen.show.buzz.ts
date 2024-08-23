import { ScreenModel } from "../screen.model";
import Screen from "../fce/screen.interface";
import State from "../../00.core/state";
import CreateBit from "../fce/create.bit";
import * as FS from "fs-extra";

var buttonTemp: string = `<button id="{{=it.btnIDX}}" class="{{=it.classIDX}}">{{=it.label}}</button>`;

var template: string = ` 
<div id='showDisplay'>
<button id='pub' class="btn btn-primary">publish</button>
</div>`;

export const updateShow = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  return cpy;
};

export const readShow = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  cpy.now = template;
  document.getElementById("content").innerHTML = cpy.now;

  document.getElementById("pub").addEventListener("mouseup", () => {
    FS.removeSync("../000.bee-show/data/plot");
    FS.copy("./data/plot", "../000.bee-show/data/plot", () => {
      console.log("nostalga");
    });
  });
  return cpy;
};
