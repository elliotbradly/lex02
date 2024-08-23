const program = require("commander");
const S = require("string");
const writeFileAtomic = require("write-file-atomic");

const create = (input) => {
  console.log("input " + input);
  var lst = input.split(",");
  if (lst.length <= 0) return;

  var pth = lst[1];
  var mth = lst[0];

  lst.shift();
  lst.shift();

  var comma = lst;
  comma.forEach((e, f) => {
    comma[f] = S(e).collapseWhitespace().s;
  });

  var age = {
    idx: "",
  };

  if (comma.length == 1) age.idx = comma[0];
  else if (comma.length == 2) {
    delete age["idx"];
    age[comma[0]] = comma[1];
  } else {
    var type = "";
    comma.forEach((a, b) => {
      if (b == 0) return;
      //if (b % 2 == 1) console.log("dom: " + a);
      if (b % 2 == 1) type = a;
      //if (b % 2 == 0) console.log("sub: " + a);
      if (b % 2 == 0) age[type] = a;
      //if (b % 2 == 0) console.log("midling " + age[type]);
    });
  }

  if (age.idx != null) age.idx = S(age.idx).collapseWhitespace().s;

  var dat = age;

  var song = { pth, mth, dat };

  writeFileAtomic.sync("./index/dat/song.json", JSON.stringify(song));

  console.log("show me  " + JSON.stringify(song));
};

const start = (input) => {
  create(input);
  var main = require("./000.main/000.index.main");
  setTimeout(
    () =>
      writeFileAtomic.sync(
        "./index/dat/song.json",
        JSON.stringify({
          pth: "",
          mth: "",
          dat: "",
        })
      ),
    3333
  );
};

program
  .option("-o, --opt", "output extra debugging")
  .option("-t, --terminal <items>", "flavour of unit");

program.parse(process.argv);

if (program.opt) console.log(program.opts());
if (program.terminal) start(program.terminal);
else console.log("no input ");
