"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Photo_entity_1 = require("../../entity/Photo.entity");
const Act = require("../memory.action");
exports.initMemory = (cpy, bal, ste) => {
    console.log("init memory");
    for (var key in bal) {
        cpy[key] = bal[key];
    }
    return cpy;
};
exports.writePower = (cpy, bal, ste) => {
    console.log("write power");
    cpy.power = bal;
    return cpy;
};
exports.awakeMemory = (cpy, bal, ste) => {
    var connect;
    if (bal.url != null) {
        console.log("url not null " + bal.url);
        connect = {
            type: cpy.type,
            url: bal.url,
            entities: cpy.entities,
            synchronize: cpy.synchronize,
            logging: cpy.logging,
        };
    }
    else {
        console.log("url null");
        connect = {
            type: cpy.type,
            host: bal.host,
            port: bal.port,
            username: bal.username,
            password: bal.password,
            database: bal.database,
            entities: [__dirname + "/../../**/*.entity.{js,ts}"],
            synchronize: cpy.synchronize,
            logging: cpy.logging,
        };
    }
    console.log("show me connect " + JSON.stringify(connect));
    typeorm_1.createConnection(connect)
        .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        ste.dispatch({ type: Act.WRITE_POWER, bale: true });
        //let avid = new Avid();
        //avid.nom = "simo";
        //avid.name = "simo-beeing";
        //avid.detail = "Extreme tightner of wires";
        //avid.isAlive = true;
        //await connection.manager.save(avid);
        //console.log(avid.name + " has been saved");
        let photo = new Photo_entity_1.Photo();
        photo.name = "Me and Bears";
        photo.description = "I am near polar bears";
        photo.filename = "photo-with-bears.jpg";
        photo.views = 1;
        photo.isPublished = true;
        return connection.manager.save(photo).then((photo) => {
            console.log("Photo has been saved. Photo id is", photo.id);
        });
    }))
        .catch((error) => {
        console.log(error);
        cpy.power = false;
    });
    return cpy;
};
exports.writeMemory = (cpy, bal, ste) => {
    return cpy;
};
//# sourceMappingURL=memory.buzz.js.map