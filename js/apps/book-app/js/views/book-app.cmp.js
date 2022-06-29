import { bookService } from '../services/book-service.js'
import { eventBus } from '../services/eventBus-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookAdd from '../cmps/book-add.cmp.js'

export default {
  template: `
    <section>
        <book-filter @filtered="updateFilter"/>
        <book-add :bookTitles="bookTitles" @searching="searchBooks" @added="addBook"> </book-add>
        <book-list :books="booksToShow" @removed="removeBook"></book-list>
    </section>
 `,
  components: {
    bookList,
    bookFilter,
    bookAdd,
  },
  data() {
    return {
      books: null,
      filterBy: null,
      bookTitles: null,
    }
  },
  created() {
    this.loadBooks()
  },
  methods: {
    loadBooks() {
      bookService.query().then((books) => {
        this.books = books
      })
    },

    removeBook(bookId) {
      bookService.remove(bookId).then(() => {
        const idx = this.books.findIndex((book) => book.id === bookId)
        this.books.splice(idx, 1)
      })
    },

    updateFilter(filter) {
      filter = JSON.parse(filter)
      this.filterBy = filter
    },
    searchBooks(val) {
      if (!val) return
      bookService.searchGoogleBooks(val).then((titles) => {
        this.bookTitles = titles
      })
    },
    addBook(id) {
      bookService.addBook(id)
      .then(book => {
        this.books.push(book)
      })
      eventBus.emit('show-msg', {
        txt: 'Book added successfully',
        type: 'success',
      })
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books
      const regex = new RegExp(this.filterBy.byName, 'i')
      let filteredBooks
      filteredBooks = this.books.filter((book) => regex.test(book.title))
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.listPrice.amount >= this.filterBy.fromPrice &&
          book.listPrice.amount <= this.filterBy.toPrice
      )
      return filteredBooks
    },
  },
}
