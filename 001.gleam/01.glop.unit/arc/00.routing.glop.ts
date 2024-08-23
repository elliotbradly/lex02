import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.glop.arc";
import BitArc from "./02.bit.glop.arc";
import NameArc from "./03.name.glop.arc";
import NomArc from "./04.nom.glop.arc";
import ColorArc from "./03.color.glop.arc";
import BeeingArc from "./05.beeing.glop.arc";
import ShapeArc from "./06.shape.glop.arc";
import PatternArc from "./07.pattern.glop.arc";
import AvaArc from "./08.ava.glop.arc";
import FormArc from "./09.form.glop.arc";
import LexiconArc from "./10.lexicon.glop.arc";

export const root: string = "glop";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
  {
    path: "bit",
    arcType: BitArc,
    arc: null,
  },
  {
    path: "name",
    arcType: NameArc,
    arc: null,
  },
  {
    path: "nom",
    arcType: NomArc,
    arc: null,
  },
  {
    path: "color",
    arcType: ColorArc,
    arc: null,
  },
  {
    path: "beeing",
    arcType: BeeingArc,
    arc: null,
  },
  {
    path: "shape",
    arcType: ShapeArc,
    arc: null,
  },
  {
    path: "pattern",
    arcType: PatternArc,
    arc: null,
  },
  {
    path: "ava",
    arcType: AvaArc,
    arc: null,
  },
  {
    path: "form",
    arcType: FormArc,
    arc: null,
  },
  {
    path: "lexicon",
    arcType: LexiconArc,
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
