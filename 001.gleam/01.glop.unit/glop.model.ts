import Glop from "./fce/Glop.interface";
import GlopBit from "./fce/glop.interface";
import AvatarBit from "../00.core/interface/ava/ava.bit";
import Avatar from "../00.core/form/avatar.form";

export class GlopModel implements Glop {
  bitList: string[];
  nameList: string[];
  nomList: string[];
  colorList: string[];
  beeingList: string[];
  shapeList: string[];
  patternList: string[];
  openList: string[];

  nomOpnList: string[];

  avaBit: AvatarBit;
  avatarBase: Avatar = new Avatar();

  formList: string[];
  formFileList: string[];

  formFileFinList: string[];
  formFileFinCount: number = 0;

  colorTitles: string[];

  lexiconTerm: GlopBit;

  rapidApi: string;
  googleApi: string;

  formatedLine: string;

  lexHeap: any[];
}
