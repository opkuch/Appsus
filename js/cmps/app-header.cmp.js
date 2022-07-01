export default {
  template: `
            <header class="main-header">
              <section class="header">
                <h1><span>App</span>sus</h1>
                <div class="logo-img-container">
                    <img src="assets/logo-img/horse1.png"/>
                </div>
              </section>
              <nav class="main-nav">
                    <!-- <router-link to="/bookHome">miss books</router-link> -->
                    <router-link to="/missKeep">miss note</router-link>
                    <!-- <router-link to="/about">miss Email</router-link> -->
                    <router-link to="/bookHome">miss books</router-link>
                    <!-- <router-link to="/book">miss Keeper</router-link> -->
                    <router-link to="/emailApp/inbox">mister Email</router-link>
              </nav>
            </header>
            `,
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
}
