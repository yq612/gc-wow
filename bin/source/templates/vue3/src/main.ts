import { createApp } from "vue";

// Vue Router
import { createPinia } from "pinia";

import { router } from "./router";

import { registerStore } from "./store";
import App from "~/App.vue";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/styles/main.css";

// eslint-disable-next-line import/order
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(createPinia()).use(AOS.init({ duration: 800, offset: -1 }) as any);

registerStore();
app.use(router);
app.mount("#app");