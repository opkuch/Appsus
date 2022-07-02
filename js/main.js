import { router } from "./router.js";
import appHeader from "./cmps/app-header.cmp.js";
import userMsg from "./cmps/user-msg.cmp.js"
import appFooter from "./cmps/app-footer.cmp.js";

const options = {
    template: `
          <app-header/> 
          <router-view/>
          <user-msg />
          <app-footer/>
      `,
    components: {
        appHeader,
        appFooter,
        userMsg
    },
};

const app = Vue.createApp(options);
app.use(router)
app.mount("#app");