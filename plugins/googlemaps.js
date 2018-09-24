import Vue from "vue";
import App from "./App";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCP9aDUHf434rqbJ_5yK6RibTWjGs1ID6w",
    libraries: "places"
  }
});

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});


