"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import auth from "./routes/auth";
const user_1 = require("../api/user");
//import agendash from "./routes/agendash";
exports.initRoute = (cpy, bal, ste) => {
    console.log("writing port " + cpy.port);
    cpy.port = Number(bal.port);
    return cpy;
};
exports.awakeRoute = (cpy, bal, ste) => {
    console.log("awake route");
    if (cpy.port == null)
        return console.log("sorry no port");
    var express = require("express");
    var app = express();
    console.log("show me prot " + cpy.port);
    /**
     * A little hack here
     * Import/Export can only be used in 'top-level code'
     * Well, at least in node 10 without babel and at the time of writing
     * So we are using good old require.
     **/
    //await require("./loaders").default({ expressApp: app });
    var loader = require("../lod/server");
    var routes = express_1.Router();
    //auth(app);
    user_1.default(routes, ste);
    //agendash(app);
    loader.wake(app, "/api", routes);
    app.listen(cpy.port, (err) => {
        if (err) {
            //Logger.error(err);
            // process.exit(1);
            return;
        }
        console.log(`
        ################################################
        🐊  Server listening on port: ${cpy.port} 🐊
        ################################################
      `);
    });
    //const app = express();
    return cpy;
};
exports.writeRoute = (cpy, bal, ste) => {
    return cpy;
};
//# sourceMappingURL=route.buzz.js.map