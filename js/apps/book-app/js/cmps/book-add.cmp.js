export default {
  props: ['bookTitles'],
  template: `
        <section class="main-layout add-book-container">
            <label for="book-search">Search for books</label>
            <input type="text" v-model="searchVal" @input="search" name="book-search"/>
            <ul class="clean-list" v-if="searchVal">
                <li v-for="bookTitle in bookTitles" class="search-title">
                    <span>{{bookTitle.title}}</span>
                    <button @click="add(bookTitle.id)">+</button>
                </li>
            </ul>
        </section>
        `,
  components: {},
  data() {
    return {
      searchVal: null,
    }
  },
  created() {},
  methods: {
    add(googleBookId) {
      this.$emit('added', googleBookId)
    },
    search() {
        this.$emit('searching', this.searchVal)
      },
  },
  computed: {
  },
}
