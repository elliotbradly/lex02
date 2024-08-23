import AvaColorBit from "./ava.color.bit";
import AvaAboutBit from "./ava.about.bit";
import AvaTimeBit from "./ava.time.bit";
import AvaBeeBit from "./ava.bee.bit";

export default interface AvatarBit {
  idx: string;
  name: string;
  nom: string;
  now: number;
  state: string;
  choice: string;
  choiceList: string[];
  decide: string;

  color: AvaColorBit;
  about: AvaAboutBit;
  time: AvaTimeBit;
  bee: AvaBeeBit;

  progress: any;
  pattern: string[];

  ikn: string;
}
