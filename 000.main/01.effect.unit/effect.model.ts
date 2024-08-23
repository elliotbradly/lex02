import Effect from "./fce/Effect.interface";
import SupportBit from "./fce/effect.bit.interface";
import LineCountBit from "./fce/line-count.bit";
import ResponseBit from "./fce/response.bit";
import CommandBit from "./fce/command.bit";
import SenderBit from "./fce/sender.bit";
import ProjectBit from "./fce/project.bit";

export class EffectModel implements Effect {
  //idx:string;
  //supportBitList: SupportBit[] = [];
  //supportBits: any = {};
  lineCount: LineCountBit;
  response: ResponseBit;
  command: CommandBit;
  sender: SenderBit;
  project: ProjectBit;
  iframe: string = "";
  terminal: string;
}
