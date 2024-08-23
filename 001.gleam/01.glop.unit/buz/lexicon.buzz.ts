import { GlopModel } from "../glop.model";
import Glop from "../fce/glop.interface";
import State from "../../00.core/state";
import GlopBit from "../fce/glop.bit";
import FileBit from "../fce/file.bit";
import * as FS from "fs-extra";
import * as S from "string";
import * as Act from "../glop.action";
import LexBit from "../fce/lex.bit ";

var buildLexHeap = (cpy: GlopModel) => {
  var list = [
    (bal, ste) => ste.dispatch({ type: Act.CREATE_URBAN_LEX, bale: bal }),
    (bal, ste) => ste.dispatch({ type: Act.CREATE_WORDNET_LEX, bale: bal }),
    (bal, ste) => ste.dispatch({ type: Act.CREATE_RAPIDWORD_LEX, bale: bal }),
  ];

  var Fate = require("chance");
  var fate = new Fate(19250821);
  list = fate.shuffle(list);

  list.push((bal, ste) =>
    ste.dispatch({ type: Act.CREATE_GOOGLE_LEX, bale: bal })
  );

  cpy.lexHeap = list;
};

export const createTerm = (cpy: GlopModel, bal: LexBit, ste: State) => {
  //ste.dispatch({ type: Act.CREATE_URBAN_LEX, bale: bal });
  //ste.dispatch({ type: Act.CREATE_WORDNET_LEX, bale: bal });
  //ste.dispatch({ type: Act.CREATE_RAPIDWORD_LEX, bale: bal });
  //ste.dispatch({ type: Act.CREATE_GOOGLE_LEX, bale: bal });

  if (cpy.lexHeap == null) buildLexHeap(cpy);
  var now = cpy.lexHeap.shift();
  now(bal, ste);

  //cpy.lexiconList = treasure;
  return cpy;
};

export const readLexiconList = (cpy: GlopModel, bal: GlopBit, ste: State) => {
  var root = "./data/form/" + bal.typ;
  var fileList = FS.readdirSync(root);
  var file = root + "/" + fileList[Number(bal.idx)];

  if (FS.existsSync(file) == false) return;

  var list = FS.readFileSync(file).toString().split("\n");
  list.forEach((a) => {
    console.log("lexi " + a);
    ste.dispatch({ type: Act.CREATE_TERM, bale: { idx: a } });
  });

  return cpy;
};

export const writeLexiconTerm = (cpy: GlopModel, bal: GlopBit) => {
  cpy.lexiconTerm = bal;
  return cpy;
};

export const saveTerm = (cpy: GlopModel, bal: LexBit, ste: State) => {
  var formDir = "./data/character/" + bal.src;
  var formList = FS.readdirSync(formDir);

  bal.def = cpy.formatedLine;

  var finFile = formDir + "/" + bal.typ + ".txt";
  console.log("what we are looking for " + finFile);

  FS.ensureFileSync(finFile);

  var list = FS.readFileSync(finFile).toString().split("\n");

  var line;
  if (bal.ext == null) line = bal.idx + " , " + bal.flv + " : " + bal.def;
  else line = bal.idx + " , " + bal.ext + " , " + bal.flv + " : " + bal.def;

  console.log("lexicon: " + line);

  list.push(line);
  FS.ensureFileSync(finFile);
  FS.writeFileSync(finFile, list.join("\n"));
  console.log("lexi write " + finFile);

  cpy.lexHeap = null;

  return cpy;
};

export const createGoogleLex = (cpy: GlopModel, bal: LexBit, ste: State) => {
  const axios = require("axios");

  var googleSearch =
    "https://www.googleapis.com/customsearch/v1?key=" +
    cpy.googleApi +
    "&cx=004780414566706833745:cc2ngws_l7i&q=" +
    bal.idx;

  axios({
    method: "GET",
    url: googleSearch,
  })
    .then((response) => {
      var list = response.data.items;

      var item;

      if (list.length == 0) {
        console.log("time for something else");
      } else if (list.length == 1) {
        item = list[0];
      } else {
        console.log("pick " + JSON.stringify(list));

        var Fate = require("chance");
        var fate = new Fate(19250821);
        item = fate.pick(list);
      }

      var title = item.title;
      var description = item.snippet;

      var def = title + " , " + description;

      ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: def } });
      ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createRapidWordLex = (cpy: GlopModel, bal: LexBit, ste: State) => {
  const axios = require("axios");
  axios({
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/" + bal.idx,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": cpy.rapidApi,
      useQueryString: true,
    },
  })
    .then((response) => {
      var data = response.data.results;

      var Fate = require("chance");
      var fate = new Fate(19250821);

      var item;
      if (data.length == 1) item = data[0];
      else item = fate.pick(data);

      var def = item.definition;

      axios({
        method: "GET",
        url:
          "https://wordsapiv1.p.rapidapi.com/words/" + bal.idx + "/synonyms/",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": cpy.rapidApi,
          useQueryString: true,
        },
      })
        .then((response) => {
          var syb = response.data.synonyms;
          var symbols = syb.join(",");
          console.log("show me the symbols " + symbols);
          if (item.synonyms != null) bal.ext = symbols;

          ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: def } });
          ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
      console.log("google it");
      rapidWordEmpty(bal, ste);
    });
};

export const createWordNet = (cpy: GlopModel, bal: LexBit, ste: State) => {
  var natural = require("natural");
  var wordnet = new natural.WordNet();

  var Fate = require("chance");
  var fate = new Fate(19250821);

  wordnet.lookup(bal.idx, (res) => {
    var item;
    var line;
    if (res.length == 0) return wordNetEmpty(bal, ste);
    if (res.length == 1) {
      item = res[0];
      if (item == null) return console.log("gloss one for " + bal.idx);

      if (item.gloss == null) return console.log("no gloss for " + bal.idx);

      line = bal.idx + " : " + item.gloss;
    } else {
      item = fate.pick(res);
      if (item.gloss == null) return console.log("gloss bleak for " + bal.idx);

      console.log("whut " + JSON.stringify(item));

      if (item.synonyms != null) bal.ext = item.synonyms.join(" , ");

      ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: item.gloss } });
      ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
    }
  });
};

export const createUrbanLex = (cpy: GlopModel, bal: LexBit, ste: State) => {
  const axios = require("axios");

  axios({
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
      "x-rapidapi-key": cpy.rapidApi,
      useQueryString: true,
    },
    params: {
      term: bal.idx,
    },
  })
    .then((res) => {
      var list = res.data.list;
      var Fate = require("chance");
      var fate = new Fate(19250821);

      var item;
      if (list.length == 0) return urbanLexEmpty(bal, ste);
      if (list.length == 1) item = list[0];
      item = fate.pick(list);

      var fin = item.definition + " , " + item.example + " , " + item.author;

      ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: fin } });
      ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
    })
    .catch((error) => {
      console.log(error);
    });
};

var rapidWordEmpty = (bal: LexBit, ste: State) => {
  console.log("rapid word empty try again " + bal);
  ste.dispatch({ type: Act.CREATE_TERM, bale: bal });
};

var wordNetEmpty = (bal: LexBit, ste: State) => {
  console.log("word net empty" + bal);
  ste.dispatch({ type: Act.CREATE_TERM, bale: bal });
};

var urbanLexEmpty = (bal: LexBit, ste: State) => {
  console.log("urban lex empty try again " + bal);
  ste.dispatch({ type: Act.CREATE_TERM, bale: bal });
};

var termResult = (res, idx, flv, src, typ) => {};
