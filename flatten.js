const { FSWatcher } = require("chokidar");
var FS = require("fs-extra");
FS.ensureDirSync("./flat");
FS.ensureDirSync("./text");

var create = "coremac.txt";

var better = [];

var lst = FS.readdirSync("./flat");
lst.forEach((a) => {
  var gold = FS.readFileSync("./flat/" + a)
    .toString()
    .split("\n");
  gold.forEach((c) => {
    better.push(c);
  });
});

var file = better.join("\n");
FS.writeFileSync("./text/" + create, file);
console.log("wrote: data/text");
