var FS = require("fs-extra");
var doT = require("dot");
var S = require("string");
var Fate = require("chance");

var fate = new Fate();

var child_process = require("child_process");

var seed = [];

var populate = () => {
  var feedMe = FS.readFileSync("./data/literature/000.txt")
    .toString()
    .split("\n");

  feedMe.forEach((a) => {
    a = S(a).collapseWhitespace();
    if (a.length < 3) return;
    seed.push(a);
  });

  seed = fate.shuffle(seed);

  console.log("size of feed me " + seed.length);
};

var outline;

var open = () => {
  setInterval(() => {
    if (seed.length <= 0) populate();
    var item = seed.shift();

    console.log("size of feed me " + seed.length);
    console.log("item " + item);

    var face = FS.readFileSync("./data/record/press.ahk")
      .toString()
      .split("\n");

    //var gel3 = {
    //  input: '"' + S(item).capitalize().s + '",',
    //};

    var gel3 = {
      input: S(item).capitalize().s,
    };

    face.forEach((a, b) => {
      doTCompiled = doT.template(a);
      face[b] = doTCompiled(gel3);
    });

    FS.writeFileSync("./press.ahk", face.join("\n"));

    child_process.exec("vrt.prs.bat", function (error, stdout, stderr) {
      console.log(error);
      console.log(stdout);
    });
  }, 15111);
};

var item = FS.readFileSync("./data/reference/000.txt").toString();

var face = FS.readFileSync("./data/record/press.ahk").toString().split("\n");

var gel3 = {
  input: item.replace(/([^a-z0-9]+)/gi, " ").substring(0, 111),
};

face.forEach((a, b) => {
  doTCompiled = doT.template(a);
  face[b] = doTCompiled(gel3);
});

FS.writeFileSync("./press.ahk", face.join("\n"));

child_process.exec("vrt.prs.bat", function (error, stdout, stderr) {
  console.log(error);
  console.log(stdout);
});

setTimeout(open, 11111);
