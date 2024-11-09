import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import nora from "@primevue/themes/nora";

const app = createApp(App);

app.use(router);
app.use(VueSweetalert2);
app.use(PrimeVue);
app.use(ToastService);

app.component("Toast", Toast);

app.mount("#app");
