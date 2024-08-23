import Line from "../../line";
import State from "../../state";

import IndexArc from "./01.index.title.arc";
import MenuArc from "./02.menu.title.arc";
import GamePadArc from "./03.game-pad.title.arc";

export const root: string = "title";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
  {
    path: "menu",
    arcType: MenuArc,
    arc: null,
  },
  {
    path: "game-pad",
    arcType: GamePadArc,
    arc: null,
  },
];

export default class DisplayRoutingUnit {
  constructor(router: Line, state: State) {
    routes.forEach((a) => {
      a.path = root + "/" + a.path;
      a.arc = new a.arcType(state);
      router.register(a);
    });
  }
}
