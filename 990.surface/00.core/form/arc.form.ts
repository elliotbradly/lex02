import State from "../state";
import { Subscription } from "rxjs";

export default class Arc {
  public event: Subscription;
  public value: any;

  constructor(state: State) {}

  public create(dat?: any) {}
  public read(dat?: any) {}
  public update(dat?: any) {}
  public delete(dat?: any) {}

  public response(val: any) {}
}
