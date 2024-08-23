import { Subject } from "rxjs";

export class Dispatcher extends Subject<any> {
  constructor() {
    super();
  }

  public dispatch(value: any): void {
    this.next(value);
  }
}
