import { ScreenModel } from "../screen.model";
import State from "../../00.core/state";
import CreateBit from "../fce/create.bit";

import * as Act from "../screen.action";
import * as ActO from "../../01.open.unit/open.action";
import * as doT from "dot";
import * as S from "string";
import HuntBit from "../fce/hunt.bit";
import FileBit from "990.surface/01.open.unit/fce/file.bit";
import * as FS from "fs-extra";

var contentIDX: string = "huntContent";
var subNavIDX: string = "huntSubNavBar";
var navBntIDX: string = "hunt-nav";

var formList: string[] = ["beat", "object", "title", "detail", "nature", "odd"];
var formDex: number = 0;

var formFileSub;
var formFileList = [];

var formFileFinSub;
var formFileFinList = [];

var lexiListSub;
var lexiconList = [];

var formTermList = [];
var formFileFinCountSub;

var characterName: string;

export const readHunt = (cpy: ScreenModel, bal: HuntBit, ste: State) => {
  gleam = ste.value.open.gleam;

  //college foxes packing boxes

  templateList = [templateForm, templateLexicon];

  cpy.now = templateContent;
  document.getElementById(cpy.mainContentIDX).innerHTML = cpy.now;

  if (formFileFinCountSub == null) {
    formFileFinCountSub = gleam.bee.hark("glop.formFileFinCount", (val) => {
      if (val == 0) return;

      formTermList = gleam.bee.value.glop.formList;
      flashlight(ste, null);

      //updateFormFileFinList();
    });
  }

  if (formFileFinSub == null) {
    var gleam: any = ste.value.open.gleam;
    if (gleam == null) return console.log("no gleam present");
    formFileFinSub = gleam.bee.hark("glop.formFileFinList", (val) => {
      if (val == null) return;
      formFileFinList = val;
      updateFormFileFinList();
    });
  }

  if (formFileSub == null) {
    var gleam: any = ste.value.open.gleam;
    if (gleam == null) return console.log("no gleam present");
    formFileSub = gleam.bee.hark("glop.formFileList", (val) => {
      if (val == null) return;
      formFileList = val;
      updateFormFileList();
    });
  }

  if (lexiListSub == null) {
    var gleam: any = ste.value.open.gleam;
    if (gleam == null) return console.log("no gleam present");

    lexiListSub = gleam.bee.hark("glop.lexiconTerm", (val) => {
      if (val == null) return;
      console.log("vu " + JSON.stringify(val));

      //lexiconList = val;
      updateLexiconList(val);
    });
  }

  ste.dispatch({ type: Act.UPDATE_HUNT });
  //ste.dispatch({ type: Act.UPDATE_HUNT_SUB_NAV });

  updateFormNavList(ste);

  var input = document.getElementById("formTypeInput");
  input.addEventListener("change", (event) => {
    var val = input["value"];
    var isNum = S(val).isNumeric();

    if (isNum == true) {
      flashlight(ste, val);
    } else {
      flashlight(ste, null, val);
    }
  });

  return cpy;
};

export const initLexicon = (cpy: ScreenModel, bal: FileBit, ste: State) => {
  var gleam: any = ste.value.open.gleam;

  if (gleam == null) return console.log("no gleam present");
  gleam.bee.hike("glop/lexicon", "create", bal);
};

export const initFormList = (cpy: ScreenModel, bal: FileBit, ste: State) => {
  var gleam: any = ste.value.open.gleam;
  if (gleam == null) return console.log("no gleam present");

  var input = document.getElementById("formTypeInput");
  var target = input["value"];

  //here you can listen for a result
  var sub = gleam.bee.hark("glop.formList", (val) => {
    if (val == null) return;
    formTermList = val;

    var Fate = require("chance");
    var fate = new Fate();

    formTermList = fate.shuffle(formTermList);

    flashlight(ste, null);

    //sub = null;
  });

  bal.target = formList[formDex];

  gleam.bee.hike("glop/form", "create", bal);
};

export const updateHunt = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  var sMod: ScreenModel = ste.value.screen;

  ste.dispatch({
    type: ActO.REMOVE_ALL_LISTENERS,
  });

  ste.dispatch({
    type: ActO.REMOVE_DRAGABLE,
  });

  var current = templateList[sMod.huntDex];
  document.getElementById(contentIDX).innerHTML = current;

  console.log("update the hunt " + sMod.huntDex);
  var gleam: any = ste.value.open.gleam;
  if (gleam == null) return console.log("no gleam present");
  gleam.bee.hike("glop/form", "copy", bal);

  switch (sMod.huntDex) {
    case 1:
      console.log("looking for our lexicon");

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => lexiconFileChange(val, ste),
          target: "formFileSelect",
        },
      });
      break;
    case 0:
      updateFormFileList();

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => formFileChange(val, ste),
          target: "formFileSelect",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_LISTENER,
        bale: {
          type: "change",
          method: (val) => formFileFinChange(val, ste),
          target: "formFileFinSelect",
        },
      });

      ste.dispatch({
        type: ActO.CREATE_DRAGABLE,
        bale: {
          idx: "formDrop",
          src: Act.INIT_FORM_LIST,
        },
      });

      break;
  }

  ste.dispatch({ type: Act.UPDATE_HUNT_SUB_NAV });

  cpy.now = document.getElementById(cpy.mainContentIDX).innerHTML;

  updateFormNavList(ste);

  return cpy;
};

export const updateHuntSubNav = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  var sMod: ScreenModel = ste.value.screen;
  if (sMod == null) return console.log("you got no smod");

  var navBar = document.getElementById(subNavIDX);
  navBar.innerHTML = "";

  sMod.huntList.forEach((a, b) => {
    var idx = navBntIDX + String(b).padStart(3, "0");
    var classIDX;
    if (b == sMod.huntDex) classIDX = navActive;
    else classIDX = navUnactive;
    var gel = { btnIDX: idx, label: a, classIDX };
    var doTCompiled = doT.template(subNavTemp);
    var outLine = doTCompiled(gel);

    navBar.innerHTML += outLine;

    var point;
  });

  sMod.huntList.forEach((a, b) => {
    var idx = navBntIDX + String(b).padStart(3, "0");
    var btn00 = document.getElementById(idx);
    if (btn00 == null) return;

    btn00.addEventListener("mouseup", () => {
      console.log("bam " + b);

      ste.dispatch({ type: Act.WRITE_HUNT_SUB_NAV_DEX, bale: b });
      ste.dispatch({ type: Act.UPDATE_HUNT_SUB_NAV });
      ste.dispatch({ type: Act.UPDATE_HUNT });
    });
  });
};

export const writeHuntSubNavDex = (cpy: ScreenModel, bal: number, ste: State) => {
  cpy.huntDex = bal;
};

var flashlight = (ste, dex = null, str = null) => {
  console.log("FLASHLIGHT");

  var output = [];

  var gleam: any = ste.value.open.gleam;
  if (gleam == null) return console.log("no gleam present");

  if (formTermList == null) formTermList = [];

  //filters
  var formTermListCopy = [...formTermList];

  var filter = [];

  if (dex != null) {
    formTermList.forEach((a) => {
      if (a.length != dex) return;
      filter.push(a);
    });

    formTermList = filter;
  }

  if (str != null) {
    formTermList.forEach((a) => {
      if (str.length == 1) {
        var now = a[0];
        if (now == str) filter.push(a);
      }
    });

    formTermList = filter;
  }

  formTermList.unshift("---");
  formTermList.unshift("---");
  formTermList.unshift("---");
  formTermList.unshift("---");
  formTermList.unshift("---");

  formTermList.forEach((a, b) => {
    var idx = "form-" + String(b).padStart(5, "0");
    var classIDX = "btn btn-lg btn-block";
    var gel = { btnIDX: idx, label: a, classIDX };
    var doTCompiled = doT.template(subNavTemp);
    var outLine = doTCompiled(gel);
    output.push(outLine);
  });

  var resultDiv = document.getElementById("formResult");
  if (resultDiv == null) return;
  resultDiv.innerHTML = "";
  resultDiv.innerHTML += output.join("\n");

  for (var i = 0; i < formTermList.length; i++) {
    var idx = "form-" + String(i).padStart(5, "0");
    var item = document.getElementById(idx);
    if (item == null) continue;
    item.addEventListener("mouseup", (e) => {
      var item: any = e.target;
      var form = item.innerText;

      var input = document.getElementById("formTypeInput");
      if (input == null) return;

      gleam.bee.hike("glop/form", "add", {
        idx: form,
        src: characterName,
        typ: formList[formDex],
      });

      const el = document.createElement("textarea");
      el.value = S(item.innerText).slugify();
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      item.innerText = "";
      //item.remove();
    });
  }

  if (dex != null) formTermList = formTermListCopy;
  if (str != null) formTermList = formTermListCopy;

  // if (sub.unsubscribe != null) sub.unsubscribe();
};

var updateFormNavList = (ste) => {
  var item = formList[formDex];

  var gleam = ste.value.open.gleam;
  if (gleam != null) {
    gleam.bee.hike("glop/form", "fetch", { typ: item });
  }

  var output = [];

  formList.forEach((a, b) => {
    var idx = "form-" + String(b).padStart(5, "0");
    var classIDX = "btn btn-link";

    if (formDex == b) classIDX = "btn btn-error";

    var gel = { btnIDX: idx, label: a, classIDX };
    var doTCompiled = doT.template(subNavTemp);
    var outLine = doTCompiled(gel);
    output.push(outLine);
  });

  var bar = document.getElementById("formNavBar");
  if (bar == null) return;

  bar.innerHTML = output.join("");

  formList.forEach((a, b) => {
    var idx = "form-" + String(b).padStart(5, "0");
    var btn = document.getElementById(idx);
    if (btn == null) return;

    btn.addEventListener("mouseup", () => {
      formDex = b;

      var type = formList[formDex];
      FS.writeFile("./data/key.txt", type);

      updateFormNavList(ste);
    });
  });

  var label0 = document.getElementById("formLabel");
  var label1 = document.getElementById("typeInputLable");
  var label2 = document.getElementById("formDrop");

  if (label0 != null) label0.innerText = item + " List";
  if (label1 != null) label1.innerHTML = item + " Type";
  if (label2 != null) label2.innerHTML = item + " Source";
};
var updateFormFileFinList = () => {
  var list = [];

  console.log("round the world");

  formFileFinList.forEach((a, b) => {
    var dex = String(b).padStart(3, "0");
    var gel: any = { name: a };
    var doTCompiled = doT.template(nameOption);
    var outLine = doTCompiled(gel);
    list.push(outLine);
  });

  var display = document.getElementById("formFileFinSelect");
  if (display == null) return;
  display.innerHTML = list.join("\n");

  //var result = document.getElementById("formResult");
  //if (result == null) return console.log("no form result");

  //result.innerHTML = "";
};

var updateFormFileList = () => {
  var list = [];

  formFileList.forEach((a, b) => {
    var dex = String(b).padStart(3, "0");
    var gel: any = { name: a };
    var doTCompiled = doT.template(nameOption);
    var outLine = doTCompiled(gel);
    list.push(outLine);
  });

  var display = document.getElementById("formFileSelect");
  if (display == null) return;
  display.innerHTML = list.join("\n");

  var result = document.getElementById("formResult");
  if (result == null) return console.log("no form result");

  result.innerHTML = "";
};

var updateLexiconList = (val) => {
  var dex = String(lexiconList.length).padStart(5, "0");
  var gel: any = { label: val.idx, btnIDX: dex, sytleIDX: lexiconBtnStyle };
  var doTCompiled = doT.template(subNavTemp);
  var outLine = doTCompiled(gel);
  outLine += "<br></br>";

  var display = document.getElementById("lexiResult");
  if (display == null) return;
  display.innerHTML += outLine;

  //var list = [];
  //formFileList.forEach((a, b) => {
  //  var dex = String(b).padStart(3, "0");
  //  var gel: any = { name: dex + "." + a };
  //  var doTCompiled = doT.template(nameOption);
  //  var outLine = doTCompiled(gel);
  //  list.push(outLine);
  //});
};

var formFileFinChange = (val: any, ste: State) => {
  var itm = val.currentTarget.value;
  var frm = formList[formDex];

  console.log("big change " + itm);

  var gleam: any = ste.value.open.gleam;
  if (gleam == null) return console.log("no gleam present");
  gleam.bee.hike("glop/form", "open", { idx: itm + "/" + frm });
};

var formFileChange = (val: any, ste: State) => {
  var item = val.currentTarget.value;

  characterName = item;
  console.log("chatacter " + characterName);

  var input = document.getElementById("formTypeInput");
  if (input == null) return;

  input["value"] = item;
};

var lexiconFileChange = (val: any, ste: State) => {
  var item = val.currentTarget.value;
  console.log("lexicon file change " + item);

  var list = item.split(".");
  var plot = Number(list.shift());

  var gleam = ste.value.open.gleam;
  if (gleam != null) {
    gleam.bee.hike("glop/lexicon", "read", {
      typ: formList[formDex],
      idx: plot,
    });
  }
};

var nameOption: string = "<option>{{=it.name}}</option>";

var colorBoxTmp: string = '<div class="color-box" style="background-color: #FF850A;"></div>';

var navUnactive: string = "btn btn-lg";
var navActive: string = "btn btn-lg active";
var lexiconBtnStyle = "btn btn-block";

var subNavTemp: string = `<button id="{{=it.btnIDX}}" class="{{=it.classIDX}}">{{=it.label}}</button>`;

var templateList = [];

var templateContent = `

<div class="divider text-center"></div>

<div id='huntSubNavBar' class="btn-group btn-group-block">
{{=it.subNav}}
</div> 

<div class="divider text-center"></div>

<div id='huntContent'>

</div>

`;

var templateForm: string = `

<div id='formNavBar' class="btn-group btn-group-block">
</div> 

<div id='holder' class="divider text-center">
<label id='formLabel' class="form-label" for="input-example-1">Form List</label>
<select id='formFileSelect' class="form-select">
</select>

<label id='typeInputLable' class="form-label" for="input-example-2">Type</label>
<input class="form-input" type="text" id="formTypeInput" placeholder="000">
where you want to be
<button id='formDrop' class="btn btn-block active" style='height:75px;'>form source</button>

<label id='formFileFinLabel' class="form-label" for="input-example-1">Form File Fin List</label>
<select id='formFileFinSelect' class="form-select">
</select>

<div class="divider text-center"></div>

<div id='formResult'></div>

</div>
`;

var templateLexicon: string = `

<div id='formNavBar' class="btn-group btn-group-block">
</div> 

<div id='holder' class="divider text-center">
<label id='formLabel' class="form-label" for="input-example-1">Form List</label>
<select id='formFileSelect' class="form-select">
</select>

<div id='holder' class="divider text-center">

<div id='lexiResult'></div>
</div>
`;

var templateJazz: string = `

<div id='formNavBar' class="btn-group btn-group-block">
</div> 

<div id='holder' class="divider text-center">

<div id='jazzResult'></div>
</div>
`;
