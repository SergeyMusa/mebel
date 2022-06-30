import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

console.log("main.JS");

new Vue({
  el: "#app",
  router,

  data: {
    message: "Hello Vue!",
    message2: "Hello Sir!",
    image_src: "../src/assets/img/logo3.png",
  },

  vuetify,
  // router,
  render: (h) => h(App),
}).$mount("#app");
