import Arc from "../form/arc.form";

export default interface Link {
  path: string;
  method?: string;
  data?:string;
  arcType?: any;
  arc?: Arc;
}
