import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import FastClick from "fastclick";

if ("addEventListener" in document) {
  document.addEventListener("DOMContentLoader", function() {
    FastClick.attach(document.body);
  });
}

Vue.config.productionTip = false;

import "./plugin/vant";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
