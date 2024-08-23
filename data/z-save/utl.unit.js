const FS = require("fs-extra");
const doT = require("dot");

const program = require("commander");

const loc = "./data/redux/000.sim.unit/";

const create = (num, nom) => {
  console.log("nom " + nom);

  var file = loc;
  var list = FS.readdirSync(file);

  var out = [];
  list.forEach((a, b) => {
    list[b] = file + "/" + a;

    if (FS.lstatSync(list[b]).isDirectory()) {
      var directory = list[b];
      var listB = FS.readdirSync(directory);
      listB.forEach(c => out.push(directory + "/" + c));
    } else {
      out.push(list[b]);
    }
  });

  if (nom == null) nom = "beeing";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var gel = {
    idx: "together000",
    title: capitalizeFirstLetter(nom),
    nom: nom,
    wakeActionKey: nom.toUpperCase() + "_OPEN",
    wakeActionFunction: capitalizeFirstLetter(nom),
    bitNom: nom + "Bit",
    bitTitle: capitalizeFirstLetter(nom) + "Bit",
    actionLabel: capitalizeFirstLetter(nom),
    actionTitle: "Waking " + capitalizeFirstLetter(nom)
  };

  out.forEach(a => {
    var neo = a.replace("sim", gel.nom);
    neo = neo.replace(".sim", "." + gel.nom);

    console.log("neo " + neo);

    var lineList = FS.readFileSync(a)
      .toString()
      .split("\n");

    lineList.forEach((a, b) => {
      console.log("line " + a);
      var doTCompiled = doT.template(a);
      var outLine = doTCompiled(gel);
      lineList[b] = outLine;
    });

    lineList.forEach(a => {
      console.log("line : " + a);
    });

    var finFin = neo.replace("sim", gel.nom);
    console.log("what you got for a fin fin " + finFin);

    finFin = finFin.replace("../data/redux/", "../data/redux/unit/");

    finFin = finFin.replace("000", num);

    finFin = finFin.replace(".txt", ".ts");

    var finFile = lineList.join("\n");

    FS.ensureFileSync(finFin);
    FS.writeFileSync(finFin, finFile);
    console.log("writing " + finFin);
  });

  console.log("how many files " + list.length);
  console.log("you are in ..  " + list.length);
};

const start = title => {
  if (title.split(".").length != 2) return console.log("no seperation");
  var num = title.split(".")[0];
  var nom = title.split(".")[1];

  create(num, nom);

  console.log("num " + num);
  console.log("nom " + nom);
};

program
  .option("-o, --opt", "output extra debugging")
  .option("-n, --name <items>", "flavour of unit");

program.parse(process.argv);

if (program.opt) console.log(program.opts());
if (program.name) start(program.name);
else console.log("no input ");
