import Open from "./fce/Open.interface";
import OpenBit from "./fce/open.interface";
import FileBit from "./fce/file.bit";
import ListenerBit from "./fce/listener.bit";

export class OpenModel implements Open {
  //idx:string;
  //openBitList: OpenBit[] = [];
  //openBits: any = {};
  gleam: any;

  listenerList: ListenerBit[] = [];
  draggerList: string[] = [];

  dragFile: FileBit;
  navList: string[] = ["lexicon"];
  navDex: number = 3;
  navBar: string;
  inputName: string;
  inputBeeing: string;
  currentNom: string;
  createAva: number = 0;
}
