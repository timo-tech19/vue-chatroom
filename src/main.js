import { onAuthStateChanged } from "@firebase/auth";
import { createApp } from "vue";
import App from "./App.vue";
import { auth } from "./firebase/config";
import router from "./router";

let app;
onAuthStateChanged(auth, (_user) => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
