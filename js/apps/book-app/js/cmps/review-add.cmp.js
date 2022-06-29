import { eventBus } from '../services/eventBus-service.js'
export default {
  props: ['book'],
  template: `
            <section class="add-review-container">
                    <form @submit.prevent="add()">
                        <h2>Add review for <span>{{book.title}}</span></h2>
                        <label for="review-name">Full Name</label>
                        <input ref="nameInput" v-model="review.name" type="text" name="review-name" autocomplete="off" placeholder="Full Name"/>
                        <label for="review-rate">Rate</label>
                        <select v-model="review.rate" name="review-rate">
                            <option v-for="num in 5" :value="num">{{num}}</option>
                        </select>
                        <label for="review-date">Read at</label>
                        <input v-model="review.date" type="date" name="review-date" />
                        <label for="review-txt">Review</label>
                        <textarea v-model="review.txt" rows="4" type="text" name="review-txt" placeholder="Write your review here..."></textarea>
                        <button>Add</button>
                        <button class="close-modal-btn" @click="toggle">X</button>
                    </form>
            </section>
            `,
  components: {
    // modalTemplate
  },
  data() {
    return {
      review: {
        name: '',
        rate: null,
        date: null,
        txt: null,
      },
    }
  },
  created() {},
  mounted() {
    console.log(this.$refs.nameInput)
    this.$refs.nameInput.focus()
  },
  methods: {
    add() {
      if (!this.review.name || !this.review.rate) {
        eventBus.emit('show-msg', { txt: 'Please fill all fields before you submit', type: 'error' })
        return
      }
      if (!this.review.date) {
        var today = new Date()
        this.review.date =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate()
      }
      const review = JSON.stringify(this.review)
      this.$emit('added', review)
      this.toggle()
    },
    toggle() {
      this.$emit('toggled', { isReview: false })
    },
  },
  computed: {},
}
