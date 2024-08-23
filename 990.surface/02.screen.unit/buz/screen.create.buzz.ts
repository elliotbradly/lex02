import { ScreenModel } from "../screen.model";
import Screen from "../fce/screen.interface";
import State from "../../00.core/state";
import CreateBit from "../fce/create.bit";
import * as Act from "../screen.action";
import * as ActO from "../../01.open.unit/open.action";
import * as doT from "dot";
import * as S from "string";
import ListenerBit from "../fce/listener.bit";
import FormAvaBit from "../fce/form.ava.bit";

var listeners: ListenerBit[] = [];

export const readCreate = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  templateList = [templateAvatar, templateGerund];

  cpy.now = templateContent;
  document.getElementById("content").innerHTML = cpy.now;

  ste.dispatch({ type: Act.UPDATE_CREATE });
  //ste.dispatch({ type: Act.UPDATE_CREATE_SUB_NAV });
  return cpy;
};

export const updateCreate = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  var sMod: ScreenModel = ste.value.screen;

  ste.dispatch({
    type: ActO.REMOVE_ALL_LISTENERS,
  });

  var current = templateList[sMod.createDex];
  document.getElementById("createContent").innerHTML = current;

  switch (sMod.createDex) {
    case 0:
      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => nameChange(val, ste),
          target: "nameSelect",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => nomChange(val, ste),
          target: "nomSelect",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => colorChange(val, ste),
          target: "colorSelect",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => beeingChange(val, ste),
          target: "beeingSelect",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => shapeChange(val, ste),
          target: "shapeSelect",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "input",
          method: (val) => nomInputChange(val, ste),
          target: "nomInput",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "mouseup",
          method: () => createAvaterEvent(ste, bal),
          target: "activate000",
        },
      });

      break;
    case 1:
      var holder = "body";

      console.log("drag and drop");

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "dragover",
          method: () => {
            return false;
          },
          target: holder,
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "dragleave",
          method: () => {
            return false;
          },
          target: holder,
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "dragend",
          method: () => {
            return false;
          },
          target: holder,
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "drop",
          method: (e) => createTextDragEvent(e, ste, bal, holder),
          target: holder,
        },
      });

      break;
  }

  ste.dispatch({ type: Act.UPDATE_CREATE_SUB_NAV });

  cpy.now = document.getElementById("content").innerHTML;

  return cpy;
};

export const updateAvaForm = (
  cpy: ScreenModel,
  bal: FormAvaBit,
  ste: State
) => {
  //if (bal.nomList != null) updateList("nomSelect", bal.nomList);
  if (bal.nameList != null) updateList("nameSelect", bal.nameList);
  if (bal.colorList != null) updateList("colorSelect", bal.colorList);
  if (bal.beeingList != null) updateList("beeingSelect", bal.beeingList);
  //if (bal.shapeList != null) updateList("shapeSelect", bal.shapeList);

  //var nomList = [];

  //bal.nomList.forEach((a) => {
  //  var gel = { name: a };
  //  var doTCompiled = doT.template(nameOption);
  //  var outLine = doTCompiled(gel);
  //  nomList.push(outLine);
  //});

  //var display = document.getElementById("nomSelect");
  //display.innerHTML = nomList.join("\n");
};

var nameChange = (val: any, ste: State) =>
  ste.dispatch({
    type: Act.WRITE_AVATAR_NAME,
    bale: { dat: val.currentTarget.value },
  });

var nomChange = (val: any, ste: State) => {
  ste.dispatch({
    type: Act.WRITE_AVATAR_NOM,
    bale: { dat: val.currentTarget.value },
  });

  document.getElementById("nomInput")["value"] = val.currentTarget.value;
};

var nomInputChange = (val: any, ste: State) => {
  ste.dispatch({
    type: Act.WRITE_AVATAR_NOM,
    bale: { dat: val.currentTarget.value },
  });
};

var colorChange = (val: any, ste: State) => {
  // val.currentTarget.parent.select();
  const el = document.createElement("textarea");
  el.value = ", " + S(val.currentTarget.value.split(":")[0]).slugify();
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  ste.dispatch({
    type: Act.WRITE_AVATAR_COLOR,
    bale: { dat: val.currentTarget.value },
  });
};

var beeingChange = (val: any, ste: State) =>
  ste.dispatch({
    type: Act.WRITE_AVATAR_BEEING,
    bale: { dat: val.currentTarget.value },
  });

var shapeChange = (val: any, ste: State) =>
  ste.dispatch({
    type: Act.WRITE_AVATAR_SHAPE,
    bale: { dat: val.currentTarget.value },
  });

var updateList = (idx: string, lst: string[]) => {
  if (lst == null) lst = [];
  var list = [];

  var nameOption: string = "<option>{{=it.name}}</option>";

  if (idx == "colorSelect")
    nameOption = `
  <option style='background-color:{{=it.hex}};'>
  {{=it.name}}
  </option>
  `;

  lst.forEach((a) => {
    var gel: any = { name: a };

    if (idx == "colorSelect") {
      var sub = a.split(":")[1];
      var ele = sub.split(",");
      gel = {
        name: a,
        hex: ele[0],
      };
    }

    var doTCompiled = doT.template(nameOption);
    var outLine = doTCompiled(gel);
    list.push(outLine);
  });

  var display = document.getElementById(idx);
  if (display == null) return;
  display.innerHTML = list.join("\n");
};

export const updateCreateSubNav = (
  cpy: ScreenModel,
  bal: CreateBit,
  ste: State
) => {
  var sMod: ScreenModel = ste.value.screen;
  if (sMod == null) return console.log("you got no smod");

  var navBar = document.getElementById("createSubNavBar");
  navBar.innerHTML = "";

  sMod.createList.forEach((a, b) => {
    var idx = "create-nav" + String(b).padStart(3, "0");
    var classIDX;
    if (b == sMod.createDex) classIDX = navActive;
    else classIDX = navUnactive;
    var gel = { btnIDX: idx, label: a, classIDX };
    var doTCompiled = doT.template(subNavTemp);
    var outLine = doTCompiled(gel);

    navBar.innerHTML += outLine;
  });

  sMod.createList.forEach((a, b) => {
    var idx = "create-nav" + String(b).padStart(3, "0");
    var btn00 = document.getElementById(idx);
    btn00.addEventListener("mouseup", () => {
      ste.dispatch({ type: Act.WRITE_CREATE_SUB_NAV_DEX, bale: b });
      ste.dispatch({ type: Act.UPDATE_CREATE_SUB_NAV });
      ste.dispatch({ type: Act.UPDATE_CREATE });
    });
  });
};

export const createAvatar = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  cpy.avatarNom = document.getElementById("nomInput")["value"];
  cpy.createAvatar += 1;

  return cpy;
};

export const writeCreateSubNavDex = (
  cpy: ScreenModel,
  bal: number,
  ste: State
) => {
  cpy.createDex = bal;
};

//intellectual struggle

var createAvaterEvent = (ste: State, bal) => {
  console.log("create us an avatar");

  ste.dispatch({ type: Act.CREATE_AVATAR, bale: bal });
};

var createTextDragEvent = (e: any, ste: State, bal, holder) => {
  console.log("pop us a drag event");

  var path = "";
  e.preventDefault();

  for (var key in e.dataTransfer.files) {
    for (var pass in e.dataTransfer.files[key]) {
      if (pass != "path") continue;
      var p = e.dataTransfer.files[key][pass];
      path = p;
      //document.getElementById("fileName").innerText = path;
      console.log("you dropped " + p);
    }
  }

  var name = path.replace(/^.*[\\\/]/, "");
  console.log("file name " + name);

  //var fileBit: FileBit = { path, name };
  //ste.dispatch({ type: Act.WRITE_DRAG_FILE, bale: fileBit });
};

var colorBoxTmp: string =
  '<div class="color-box" style="background-color: #FF850A;"></div>';

var navUnactive: string = "btn btn-sm";
var navActive: string = "btn btn-sm active";

var subNavTemp: string = `<button id="{{=it.btnIDX}}" class="{{=it.classIDX}}">{{=it.label}}</button>`;

var templateList = [];

var templateContent = `

<div class="divider text-center"></div>

<div id='createSubNavBar' class="btn-group btn-group-block">
{{=it.subNav}}
</div> 

<div class="divider text-center"></div>

<div id='createContent'>

</div>


`;

var templateGerund: string = `

<div id='holder' class="divider text-center">drop text here</div>

`;

var templateAvatar: string = ` 

<div class="form-group">
<label class="form-label" for="input-example-1">Name</label>
<select id='nameSelect' class="form-select">
{{=it.nameSelect}}
</select>

<label class="form-label" for="nomSelect">Nom Options</label>
<select id='nomSelect' class="form-select">
{{=it.nomSelect}}
</select>

<label class="form-label" for="input-example-2">Nom</label>
<input class="form-input" type="text" id="nomInput" placeholder="Nom">

<div class="form-group">

<label class="form-label" for="input-example-1">Color</label>
<select id='colorSelect' class="form-select">
{{=it.colorSelect}}
</select>

<label class="form-label" for="shapeSelect">Shape</label>
<select id='patternSelect' class="form-select">
{{=it.shapeSelect}}
</select>

<label class="form-label" for="patternSelect">Pattern</label>
<select id='patternSelect' class="form-select">
{{=it.patternSelect}}
</select>

<div class="divider text-center"></div>

<button id="activate000" class="btn btn-block"> activate </button>;
</div>`;
