import Screen from "./fce/Screen.interface";
import ScreenBit from "./fce/screen.interface";
import ButtonBit from "./fce/button.bit";
import * as Act from "./screen.action";
import Avatar from "990.surface/00.core/form/avatar.form";

export class ScreenModel implements Screen {
  //idx:string;
  //screenBitList: ScreenBit[] = [];
  //screenBits: any = {};
  avatarName: string;
  avatarNom: string;
  avatarColor: string;
  avatarBeeing: string;
  avatarShape: string;
  avatarPattern: string;

  showBtnList: ButtonBit[] = [
    {
      idx: "000",
      nom: "transform colors",
      act: { type: Act.WRITE_COLORS },
    },
  ];

  now: string;
  writeColors: boolean;

  createAvatar: number = 0;

  mainContentIDX: string = "content";

  createList: string[] = ["avid", "avio", "axis", "arte"];
  createDex: number = 0;

  huntList: string[] = ["form", "lexicon", "jazz"];
  huntDex: number = 0;
}
