import { Singleton } from "typescript-ioc";
import * as FS from "fs-extra";
import * as doT from "dot";
import * as clipboardy from "clipboardy";
import * as ytdl from "ytdl-core";
import * as underscore from "underscore.string";
import * as readline from "readline";

@Singleton
export default class YouTubeProcess {
  loc = "./data/redux/00.sim.unit/";

  private constructor() {}

  create = (sav: String) => {
    var url = clipboardy.readSync();
    console.log("url " + url);

    if (url.includes("youtube") == false)
      return console.log("nope not youtube");

    var endLoc = sav + "/vid/";
    FS.ensureDirSync(endLoc);

    var here = "here";

    var count = FS.readdirSync(endLoc).length;
    var countPad = String(count).padStart(3, "0");

    ytdl.getBasicInfo(url, null, (err, info) => {
      var fin = sav + "/utl/youtube.json";
      FS.writeJSON(fin, info, () => {
        var author = "";
        if (info.author != null) {
          if (info.author.user != null)
            author = underscore.slugify(info.author.user);
          if (info.author.name != null)
            author = underscore.slugify(info.author.name);
        }

        var title = underscore.slugify(info.title);
        here = title;
        var fileName = "";
        if (author != "")
          fileName = endLoc + countPad + "." + author + "." + title + ".mp4";
        else fileName = endLoc + title + ".mp4";

        ytdl(url, { filter: (format) => format.container === "mp4" })
          .on("error", console.error)
          .on("progress", (chunkLength, downloaded, total) => {
            const percent = downloaded / total;
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
            process.stdout.write(
              `(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(
                total /
                1024 /
                1024
              ).toFixed(2)}MB)`
            );
          })

          .pipe(FS.createWriteStream(fileName))
          .on("finish", () => {
            console.log("finished:: " + here);
          });
      });
    });
  };
}
