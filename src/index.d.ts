import "@planetadeleste/vue-mc";
import { FormRecordData } from "./types";

declare module "@planetadeleste/vue-mc-martin-forms" {
  import { Response } from "vue-mc";
  import { Model } from "@planetadeleste/vue-mc";

  class FormRecord extends Model {
    send(): Promise<Response<any>>;
  }
  interface FormRecord extends Model, FormRecordData {}

  export { FormRecordData, FormRecord };
}
