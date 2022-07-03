 export default {
 template:`
        <section class="app-home-container">
          <div class="home-app-txt">
          </div>
          <nav class="app-home-nav">
              <router-link class="note-lnk" to="/missKeep"><img src="assets/mail-img/icons/today.svg"/></router-link>
              <router-link class="book-lnk" to="/bookHome"><img src="assets/mail-img/icons/library.svg" /></router-link>
              <router-link class="mail-lnk" to="/emailApp/inbox"><img src="assets/mail-img/icons/mail-close.svg" /></router-link>
          </nav>
        </section>
        `,
    components: {},
  data() {
   return {};
    },
  created() {
  },
 methods: {},
 computed: {},
  };