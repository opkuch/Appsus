export default {
  template: `
            <header class="app-header main-layout">
              <div class="header-title">
                <img class="red-circle" src="img/red-circle.svg" />  
                <h1><span>miss</span> books</h1>
                <img class="book-logo" src="img/logo.png" />  
              </div>
              <nav class="nav-bar">
                        <router-link to="/">Home</router-link>
                        <router-link to="/book">Books</router-link>
                        <router-link to="/about">About</router-link>
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
