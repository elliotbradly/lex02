import AvatarBit from "../interface/ava/ava.bit";
import AvaColorBit from "../interface/ava/ava.color.bit";
import AvaAboutBit from "../interface/ava/ava.about.bit";
import AvaTimeBit from "../interface/ava/ava.time.bit";
import AvaBeeBit from "../interface/ava/ava.bee.bit";

export default class Avatar implements AvatarBit {
  idx: string = "idx";
  name: string = "name";
  nom: string = "nom";
  now: number = 0;
  state: string;
  choice: string;
  choiceList: string[];
  decide: string;

  color: AvaColorBit = {
    src: "src",
    hex: "hex",
    rgb: "rgb",
    flv: "flv",
  };

  about: AvaAboutBit = {
    cde: 0,
    bee: "",
    rol: "",
    map: "",
    uid: "",
    dex: "",
    loc: "",
    tok: "",
  };

  time: AvaTimeBit = {
    sns: 0,
    wit: 0,
    act: 0,
    hrz: 0,
    spd: 0,
    idl: 0,
    now: 0,
  };

  bee: AvaBeeBit = {
    now: "",
    tht: {},
    frm: {},
    plt: {},
    txt: {},
    hst: [],
    act: {},
  };

  progress: any;
  pattern: string[];
  ikn: string;
}
