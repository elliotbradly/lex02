import { OpenModel } from "../open.model";
import Open from "../fce/open.interface";
import State from "../../00.core/state";
import * as doT from "dot";
import * as Act from "../open.action";
import OpenBit from "../fce/open.bit";
import FileBit from "../fce/file.bit";
import ListenerBit from "../fce/listener.bit";
import { copyFile } from "fs";

var navUnactive: string = "btn btn-block";
var navActive: string = "btn btn-block active";

var navTemp: string = `<button id="{{=it.btnIDX}}" class="{{=it.classIDX}}">{{=it.label}}</button>`;

export const createListener = (
  cpy: OpenModel,
  bal: ListenerBit,
  ste: State
) => {
  cpy.listenerList.push(bal);
  var ele = document.getElementById(bal.target);
  if (ele == null) return console.log(bal.target + " does not exist");
  ele.addEventListener(bal.type, bal.method);
  return cpy;
};

export const removeAllListeners = (
  cpy: OpenModel,
  bal: ListenerBit,
  ste: State
) => {
  cpy.listenerList.forEach((a: ListenerBit) => {
    if (document.getElementById(a.target) == null) return;
    document.getElementById(a.target).removeEventListener(a.type, a.method);
  });

  cpy.listenerList.forEach((a: ListenerBit) => {
    a.target = null;
    a.method = null;
    a.type = null;
  });

  cpy.listenerList = [];

  return cpy;
};

export const removeDragable = (cpy: OpenModel) => {
  //var holder = document.getElementById(bal.idx);

  cpy.draggerList.forEach((a) => {
    var old_element = document.getElementById(a);
    if (old_element == null) return console.log("nope " + a);
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
  });

  cpy.draggerList = [];
};

export const createDragable = (cpy: OpenModel, bal: OpenBit, ste: State) => {
  cpy.draggerList.push(bal.idx);
  var holder = document.getElementById(bal.idx);
  if (holder == null) return console.log("nope draggable " + bal.idx);

  holder.ondragover = () => {
    return false;
  };

  holder.ondragleave = () => {
    return false;
  };

  holder.ondragend = () => {
    return false;
  };

  var path = "";

  holder.ondrop = (e) => {
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
    var fileBit: FileBit = { path, name };
    ste.dispatch({ type: Act.WRITE_DRAG_FILE, bale: fileBit });

    if (bal.src == null) return;

    //you need to

    ste.dispatch({ type: bal.src, bale: fileBit });

    //console.log("show me path " + path);

    //FS.emptyDirSync("./inko/frm/");
    //FS.copySync(path, "./inko/frm/" + filename);

    //console.log("inko copy " + path);

    return false;
  };
};

export const updateNav = (cpy: OpenModel, bal: Open, ste: State) => {
  var open: OpenModel = ste.value.open;

  var navBar = document.getElementById("navBar");
  navBar.innerHTML = "";

  open.navList.forEach((a, b) => {
    var idx = "nav" + String(b).padStart(3, "0");
    var classIDX;
    if (b == open.navDex) classIDX = navActive;
    else classIDX = navUnactive;
    var gel = { btnIDX: idx, label: a, classIDX };
    var doTCompiled = doT.template(navTemp);
    var outLine = doTCompiled(gel);

    navBar.innerHTML += outLine;
  });

  open.navList.forEach((a, b) => {
    var idx = "nav" + String(b).padStart(3, "0");
    var btn00 = document.getElementById(idx);
    btn00.addEventListener("mouseup", () => {
      ste.dispatch({ type: Act.WRITE_NAV_DEX, bale: b });
      ste.dispatch({ type: Act.UPDATE_NAV });
    });
  });

  return cpy;
};

export const writeDragFile = (cpy: OpenModel, bal: FileBit, ste: State) => {
  cpy.dragFile = bal;
  return cpy;
};

export const writeNavDex = (cpy: OpenModel, bal: number, ste: State) => {
  cpy.navDex = Number(bal);
  return cpy;
};

export const writeNavList = (cpy: OpenModel, bal: OpenBit, ste: State) => {
  cpy.navList = bal.navList;
  ste.dispatch({ type: Act.UPDATE_NAV });
  return cpy;
};

export const writeGleam = (cpy: OpenModel, bal: any) => {
  cpy.gleam = bal;
  console.log("write the gleam " + cpy.gleam);

  return cpy;
};

export const writeOpen = (cpy: OpenModel, bal: Open, ste: State) => {
  return cpy;
};
