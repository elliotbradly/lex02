import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.open.arc";
import NavArc from "./02.nav.open.arc";
import AvatarArc from "./05.ava.open.arc";

export const root: string = "open";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
  {
    path: "nav",
    arcType: NavArc,
    arc: null,
  },
  {
    path: "avatar",
    arcType: AvatarArc,
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
