"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_index_title_arc_1 = require("./01.index.title.arc");
const _02_menu_title_arc_1 = require("./02.menu.title.arc");
const _03_game_pad_title_arc_1 = require("./03.game-pad.title.arc");
exports.root = "title";
exports.routes = [
    {
        path: "index",
        arcType: _01_index_title_arc_1.default,
        arc: null,
    },
    {
        path: "menu",
        arcType: _02_menu_title_arc_1.default,
        arc: null,
    },
    {
        path: "game-pad",
        arcType: _03_game_pad_title_arc_1.default,
        arc: null,
    },
];
class DisplayRoutingUnit {
    constructor(router, state) {
        exports.routes.forEach((a) => {
            a.path = exports.root + "/" + a.path;
            a.arc = new a.arcType(state);
            router.register(a);
        });
    }
}
exports.default = DisplayRoutingUnit;
//# sourceMappingURL=00.routing.title.js.map