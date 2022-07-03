import Vue from "vue";
// import App from "./App.vue";
// // import router from "./router";
// // import vuetify from "./plugins/vuetify";

// Vue.config.productionTip = false;

console.log("main.JS");

// new Vue({
//   el: "#app",
//   data: {
//     message: "Hello World!",
//     message2: "  Hello Sir!",
//   },
//   // render: (h) => h(App),
// }).$mount("#app");

let app = new Vue({
  el: "#app",
  data: {
    message: "Hello World",
    status: false,
    btnColor: "",
  },
  methods: {
    func: function () {
      console.log("XXX");
      alert("---");
      // console.log(app2.status);
    },
  },
});
setTimeout(() => {
  (app.message = "Goodbye World"),
    (app.status = true),
    (app2.status = false),
    (app.btnColor = true);
}, 2000);
//-------------------------------------
let app2 = new Vue({
  el: "#app2",
  data: {
    message: "app2",
    status: true,
  },
});
//-------------------------------------
