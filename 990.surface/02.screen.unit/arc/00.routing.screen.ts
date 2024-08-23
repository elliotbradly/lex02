import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.screen.arc";
import ShowArc from "./02.show.screen.arc";
import EditArc from "./03.edit.screen.arc";
import CreateArc from "./04.create.screen.arc";
import AvatarArc from "./05.avatar.screen.arc";
import HuntArc from "./06.hunt.screen.arc";

export const root: string = "screen";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
  {
    path: "show",
    arcType: ShowArc,
    arc: null,
  },
  {
    path: "edit",
    arcType: EditArc,
    arc: null,
  },
  {
    path: "create",
    arcType: CreateArc,
    arc: null,
  },
  {
    path: "avatar",
    arcType: AvatarArc,
    arc: null,
  },
  {
    path: "hunt",
    arcType: HuntArc,
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
