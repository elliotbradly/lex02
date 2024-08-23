import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.effect.arc";
import CommandArc from "./02.command.effect.arc";
import CohesionArc from "./04.cohesion.effect.arc";
import YouTubeArc from "./99.you-tube.effect.arc";
import ProjectArc from "./03.project.effect.arc";

export const root: string = "effect";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
  {
    path: "project",
    arcType: ProjectArc,
    arc: null,
  },
  {
    path: "command",
    arcType: CommandArc,
    arc: null,
  },
  {
    path: "cohesion",
    arcType: CohesionArc,
    arc: null,
  },
  {
    path: "tube",
    arcType: YouTubeArc,
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
