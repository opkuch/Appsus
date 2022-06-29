import longText from '../cmps/long-text.cmp.js'
import reviewAdd from '../cmps/review-add.cmp.js'
import reviewList from '../cmps/review-list.cmp.js'
import { eventBus } from '../services/eventBus-service.js'
import { bookService } from '../services/book-service.js'

export default {
  template: `
          <section v-if="book" class="main-layout main-app book-details">
              <div class="img-container">
                  <img class="book-img" :src="book.thumbnail"/>
                  <div class="paging-container">
                    <router-link :to="'/book/' + prevBookId">&#8592</router-link>
                    <router-link :to="'/book/' + nextBookId">&#8594</router-link>
                  </div>
              </div>
              <div class="details">
                  <section class="details-header">
                      <h2 class="book-title">{{book.title}} <span class="sale" v-if="book.listPrice.isOnSale">SALE</span></h2>
                      <p><small class="book-subtitle">{{book.subtitle}}</small></p>
                      <p class="book-published"><small>{{bookPageLength}}, </small><small>{{getPublishedTxt}}</small></p>
                  </section>
                  <section class="details-body">
                      <p class="book-desc">
                          <span class="bold">About the book:</span>
                          <long-text :text="book.description" />
                      </p>
                      <p class="book-authors">
                          <span class="bold">Authors:</span> 
                          <small v-for="author in book.authors">{{author}}</small>
                      </p>
                      <p class="book-categories">
                          <span class="bold">Categories:</span> 
                          <small v-for="category in book.categories">{{category}}</small>
                      </p>
                      <p class="book-price">
                          <span class="bold">Price:</span> 
                          <span :class="getPriceColor">{{formatPrice}}</span>
                      </p>
                  </section>
                  <section class="user-options">
                      <router-link class="close-btn" :to="'/book/'">Back</router-link>
                      <div>
                        <button class="add-review-btn" @click="toggleAddReview">Add review</button>
                        <button class="review-list-btn" @click="toggleReviewList">Book reviews</button>
                        <review-add :book="book" @added="addReview" @toggled="toggleAddReview" v-if="isReview"/>
                        <review-list :book="book"  @toggled="toggleReviewList" v-if="isReviewList"/>
                      </div>
                  </section>
              </div>
              
          </section>
          `,
  components: {
    longText,
    reviewAdd,
    reviewList,
  },
  data() {
    return {
      isReadMore: false,
      book: null,
      isReview: false,
      isReviewList: false,
      nextBookId: null,
      prevBookId: null,
    }
  },
  created() {
    const id = this.$route.params.bookId
    bookService.get(id).then((book) => (this.book = book))
  },
  methods: {
    toggleReadMore() {
      this.isReadMore = !this.isReadMore
    },
    toggleAddReview() {
      this.isReview = !this.isReview
    },
    toggleReviewList() {
      this.isReviewList = !this.isReviewList
    },
    addReview(review) {
      const newRev = JSON.parse(review)
      bookService.addReview(this.book.id, newRev).then((updatedBook) => {
        this.book = updatedBook
      })
      // this.book.reviews.push(review)
      eventBus.emit('show-msg', {
        txt: 'Review added successfully',
        type: 'success',
      })
    },
  },
  watch: {
    '$route.params.bookId': {
      handler() {
        const id = this.$route.params.bookId
        if(!id) return
        bookService.get(id).then((book) => {
          this.book = book
          bookService.getNeighborBookId(book.id).then((neighborId) => {
            this.nextBookId = neighborId.nextId
            this.prevBookId = neighborId.prevId
          })
        })
      },
      immediate: true,
    },
  },
  computed: {
    formatPrice() {
      const currency = this.book.listPrice.currencyCode
      const price = this.book.listPrice.amount
      return new Intl.NumberFormat(currency, {
        style: 'currency',
        currency: `${currency}`,
      }).format(price)
    },
    getPublishedTxt() {
      const publishDiff = new Date().getFullYear() - this.book.publishedDate
      return publishDiff > 10 ? 'Veteran Book' : 'New!'
    },
    bookPageLength() {
      const bookLength = this.book.pageCount
      if (bookLength > 500) {
        return 'Long reading'
      } else if (bookLength > 200) {
        return 'Decent reading'
      } else return 'Light reading'
    },
    getPriceColor() {
      return {
        high: this.book.listPrice.amount > 150,
        low: this.book.listPrice.amount < 20,
      }
    },
    getDesc() {
      return this.book.description.length > 100
        ? this.book.description.slice(0, 100) + '... Read more'
        : this.book.description
    },
  },
}
