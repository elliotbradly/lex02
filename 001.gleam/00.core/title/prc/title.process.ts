import { Singleton } from "typescript-ioc";
import State from "../../state";

//captain beefheart and his magic band

@Singleton
export default class TitleProcess {
  menu = (state: State, bale) => {
    //console.log("dispatch the grid menu " + JSON.stringify(bale));
  };

  private constructor() {}
}
