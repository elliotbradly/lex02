import Link from "./interface/link.interface";
import * as queryString from "query-string";
import Path from "./form/path.form";

import * as B from "./constant/BASIC";

export default class Line {
  address: any = {};
  addressList: any = [];

  constructor() {}

  route(lnk: Link): Link {
    if (lnk == null) return;

    if (typeof lnk === "string" || lnk instanceof String) {
      lnk = new Path(String(lnk));
    }

    if (lnk.method == null) lnk.method = B.READ;

    //this.log.save(lnk);

    var data: any;

    var params = lnk.path.split("?");
    if (params.length > 1) {
      data = queryString.parseUrl(lnk.path).query;
      lnk.path = params[0];
    }

    if (lnk.data != null) data = lnk.data;

    var out = { path: "", bale: {} };
    return this.action(lnk.method, lnk.path, data);
  }

  register(dat: Link) {
    var closed = false;

    this.addressList.forEach((a) => {
      if (a.path == dat.path) return (closed = true);
    });

    if (closed) return console.log(dat.path + " ROUTE CLOSED");

    this.address[dat.path] = dat.arc;
    this.addressList.push(dat);
  }

  action(typ, pth, dat, cbk = null) {
    var item = this.address[pth];
    if (item == null) return console.log("item missing pth " + pth);

    if (item[typ] == null) return console.log("action not possible for " + typ);
    dat = item[typ](dat);
    if (cbk != null) cbk(dat);
    return dat;
  }
}
