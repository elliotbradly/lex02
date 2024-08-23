"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const B = require("./00.core/constant/BASIC");
require("reflect-metadata");
var EventEmitter = require("events").EventEmitter;
const HarkM = require("./01.memory.unit/memory.hark");
const HikeM = require("./01.memory.unit/memory.hike");
const HikeR = require("./02.route.unit/route.hike");
var sim = {
    wake: null,
    fate: null,
    bee: null,
    event: new EventEmitter(),
    render: null,
};
sim.wake = (bee, portX, url, host, port, user, pwrd, name) => {
    sim.bee = bee;
    var connect;
    sim.bee.sing(HikeM.INDEX, B.INIT, {
        type: "postgres",
        synchronize: true,
        logging: false,
    });
    sim.bee.sing(HikeR.INDEX, B.INIT, {
        port: portX,
    });
    var cnect;
    if (url != null) {
        console.log("inside the work and see " + url);
        cnect = { url: url };
    }
    else {
        cnect = {
            host: host,
            port: port,
            username: user,
            password: pwrd,
            database: name,
        };
    }
    sim.bee.hark(HarkM.POWER, power);
    sim.bee.sing(HikeM.INDEX, B.AWAKE, cnect);
};
var power = (val) => {
    if (val == false)
        return console.log("power off");
    console.log("power on");
    sim.bee.sing(HikeR.INDEX, B.AWAKE);
};
sim.render = () => { };
module.exports = sim;
//# sourceMappingURL=00.work.biblio.js.map