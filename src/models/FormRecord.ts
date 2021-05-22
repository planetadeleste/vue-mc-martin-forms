import { Model } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import { required, email } from "vue-mc/validation";

export default class FormRecord extends Model {
  defaults(): Record<string, any> {
    return {
      name: "",
      email: "",
      message: "",
      phone: "",
    };
  }

  validation(): Record<string, any> {
    return {
      email: required.and(email),
    };
  }

  options(): Record<string, any> {
    return {
      methods: {
        send: "POST",
      },
    };
  }

  routes(): Record<string, any> {
    return {
      send: "forms.records.send",
    };
  }

  send(): Promise<Response<any>> {
    const method = this.getOption("methods.send");
    const route = this.getRoute("send");
    const params = this.getRouteParameters();
    const url = this.getURL(route, params);
    const data = this.getSaveData();

    return this.createRequest({ method, url, data }).send();
  }
}
