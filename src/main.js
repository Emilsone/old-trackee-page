import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import firebase from "firebase"
import './assets/styles/index.css';


Vue.config.productionTip = false;




app = new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");

