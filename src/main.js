import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Tailwind css style
import "./style.css";

createApp(App).use(router).mount("#app");
