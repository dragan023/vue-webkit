import Vue from "vue";
import App from "./App.vue";
const icons = require.context("./assets/svg-icons", false, /.svg/);

icons.keys().forEach(element => {
  let test = element.replace(/^\.\//, "").replace(/\.\w+$/, "") + "-icon";
  Vue.component(test, icons(element));
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
