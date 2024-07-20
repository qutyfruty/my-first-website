import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class BackendClass {
  async handleCall() {
    try {
      const response = await fetch("http://ip-api.com/json/");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async handleCats() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      return data[0].url;
    } catch (error) {
      console.log(error);
    }
  }
}
