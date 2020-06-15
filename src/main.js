import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import vuelidate from "vuelidate";
import AppDate from "@/components/AppDate";

Vue.use(vuelidate);
Vue.component("AppDate", AppDate);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCw0AfRWm0hStG4jQe0VsMXDLZaCrVrDQg",
  authDomain: "vue-forum-d6ba2.firebaseapp.com",
  databaseURL: "https://vue-forum-d6ba2.firebaseio.com",
  projectId: "vue-forum-d6ba2",
  storageBucket: "vue-forum-d6ba2.appspot.com",
  messagingSenderId: "375875734456",
  appId: "1:375875734456:web:94f7cb9736343dbec71d4d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("fetchAuthUser");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
