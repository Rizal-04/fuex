import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "tailwindcss/dist/tailwind.min.css";
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/tailwind-dark.min.css";
import "tailwindcss/dist/tailwind-experimental.min.css";
import "tailwindcss/dist/utilities.min.css";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
