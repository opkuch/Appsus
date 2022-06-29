import bookPreview from "../cmps/book-preview.cmp.js";


export default {
  props: ['books'],
  template: `
     <section class="main-layout main-app book-list-container">
        <article v-for="book in books" :key="book.id" class="book-preview-container">
          <router-link class="details-btn" :to="'/book/' + book.id">
            <book-preview :book="book"/>
          </router-link>
          <div class="actions">
            <button class="remove-btn" @click="remove(book.id)">Delete</button>
          </div>
        </article>

    </section>
 `,
  components: {
    bookPreview,
    },
  data() {
    return {}
  },
  created() {},
  methods: {
    remove(bookId) {
        this.$emit('removed', bookId)
    },
    select(bookId) {
        this.$emit('selected', bookId)
    },
  },
  computed: {},
}
