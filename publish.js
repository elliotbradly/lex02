var FS = require("fs-extra");

FS.copy("./data/", "../001.bee-sim/data", () => {
  console.log("jonah");
});
