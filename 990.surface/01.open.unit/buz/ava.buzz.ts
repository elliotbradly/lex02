import { OpenModel } from "../open.model";
import Open from "../fce/open.interface";
import State from "../../00.core/state";
import * as doT from "dot";
import * as Act from "../open.action";
import OpenBit from "../fce/open.bit";
import FileBit from "../fce/file.bit";
import AvaFormBit from "../fce/form.beeing";

var formTmp: string = ` 
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

<label class="form-label" for="beeingSelect">Beeing</label>
<select id='beeingSelect' class="form-select">
{{=it.beeingSelect}}
</select>

<label class="form-label" for="shapeSelect">Shape</label>
<select id='patternSelect' class="form-select">
{{=it.shapeSelect}}
</select>

<label class="form-label" for="patternSelect">Pattern</label>
<select id='patternSelect' class="form-select">
{{=it.patternSelect}}
</select>

<label class="form-label" for="openSelect">Open</label>
<select id='openSelect' class="form-select">
{{=it.openSelect}}
</select>

<div class="divider text-center"></div>

</div>`;

var surfaceTmp: string = `
<div id="surface" class="neon light">
      <div class="hero hero-lg bg-primary" style="height: 150px;">
        <div class="hero-body">
          <h1>GlopRatchet</h1>
          <p>drop glop here</p>
        </div>
      </div>
    </div>
`;

export const updateForm = (cpy: OpenModel, bal: AvaFormBit, ste: State) => {
  if (bal.nomList != null) updateList("nomSelect", bal.nomList);
  if (bal.nameList != null) updateList("nameSelect", bal.nameList);
  if (bal.colorList != null) updateList("colorSelect", bal.colorList);
  if (bal.beeingList != null) updateList("beeingSelect", bal.beeingList);
  if (bal.shapeList != null) updateList("shapeSelect", bal.shapeList);

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

var updateList = (idx: string, lst: string[]) => {
  if (lst == null) lst = [];
  var list = [];

  var nameOption: string = "<option>{{=it.name}}</option>";

  lst.forEach((a) => {
    var gel = { name: a };
    var doTCompiled = doT.template(nameOption);
    var outLine = doTCompiled(gel);
    list.push(outLine);
  });

  var display = document.getElementById(idx);
  display.innerHTML = list.join("\n");
};

export const createForm = (cpy: OpenModel, bal: AvaFormBit, ste: State) => {
  var gel = {};

  var doTCompiled = doT.template(formTmp);
  var outLine = doTCompiled(gel);

  var holder = document.getElementById(bal.idx);
  holder.innerHTML = outLine;

  document
    .getElementById("nameSelect")
    .addEventListener("change", (val) => nameChange(val, ste));

  document
    .getElementById("nomSelect")
    .addEventListener("change", (val) => nomChange(val, ste));

  document
    .getElementById("nomInput")
    .addEventListener("input", (val) => nomCustomChange(val, ste));

  document
    .getElementById("colorSelect")
    .addEventListener("change", (val) => colorChange(val, ste));

  document
    .getElementById("beeingSelect")
    .addEventListener("change", (val) => beeingChange(val, ste));

  //document
  //  .getElementById("shapeSelect")
  //  .addEventListener("change", (val) => shapeChange(val, ste));

  return cpy;
};

export const writeInputName = (cpy: OpenModel, bal: string) => {
  cpy.inputName = bal;
  return cpy;
};

export const writeInputBeeing = (cpy: OpenModel, bal: string) => {
  cpy.inputBeeing = bal;
  return cpy;
};

export const writeCurrentNom = (cpy: OpenModel, bal: string) => {
  cpy.currentNom = bal;
  return cpy;
};

var nomCustomChange = (val: any, ste: State) => {
  ste.dispatch({
    type: Act.WRITE_CURRENT_NOM,
    bale: val.currentTarget.value,
  });
};

var nomChange = (val: any, ste: State) => {
  ste.dispatch({
    type: Act.WRITE_CURRENT_NOM,
    bale: val.currentTarget.value,
  });

  var oMod: OpenModel = ste.value.open;
  var element: any = document.getElementById("nomInput");
  element.value = oMod.currentNom;

  return;
};

var nameChange = (val: any, ste: State) =>
  ste.dispatch({
    type: Act.WRITE_INPUT_NAME,
    bale: val.currentTarget.value,
  });

var colorChange = (val: any, ste: State) =>
  ste.dispatch({
    type: Act.WRITE_INPUT_BEEING,
    bale: val.currentTarget.value,
  });

var beeingChange = (val: any, ste: State) =>
  ste.dispatch({
    type: Act.WRITE_INPUT_BEEING,
    bale: val.currentTarget.value,
  });

var shapeChange = (val: any, ste: State) =>
  ste.dispatch({
    type: Act.WRITE_INPUT_BEEING,
    bale: val.currentTarget.value,
  });
