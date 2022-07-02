export default {
  template: `
            <header class="main-header">
              <section class="header">
              <router-link :to="''">
                <div class="logo-img-container">
                      <img src="assets/logo-img/horse1.png"/>
                </div>
              </router-link>
                <h1><span>pp</span>sus</h1>
              </section>
              <img src="assets/mail-img/icons/apps.svg" class="grid-icon" @click="toggleApps" />
              <nav class="main-nav" :class="appMenuStyle">
                    <router-link class="note-lnk" to="/missKeep"><img src="assets/mail-img/icons/today.svg"/></router-link>
                    <router-link class="book-lnk" to="/bookHome"><img src="assets/mail-img/icons/library.svg" /></router-link>
                    <router-link class="mail-lnk" to="/emailApp/inbox"><img src="assets/mail-img/icons/mail-close.svg" /></router-link>
              </nav>
            </header>
            
            `,
  components: {},
  data() {
    return {
      showApps: false
    }
  },
  created() {

  },
  methods: {

    toggleApps() {
      this.showApps = !this.showApps
    }
  },
  computed: {
    appMenuStyle() {
      return {'menu-active': this.showApps, '': !this.showApps}
    },
  },
}
