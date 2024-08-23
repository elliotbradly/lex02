import Link from "../interface/link.interface";
import * as B from "../constant/BASIC";

export default class Path implements Link {
  method: string;
  path: string;
  data?: any;

  constructor(pth: string, mth: string = null, dat?: any) {
    this.path = pth;
    this.method = mth;
    this.data = dat;

    if (this.method == null) this.method = B.READ;
  }
}
