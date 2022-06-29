 import longText from './long-text.cmp.js'
 export default {
    props: ['book'],
    template:`
    <section class="review-list-container">
            <h2>{{book.title}} reviews</h2>
            <ul class="clean-list">
                <li v-if="book.reviews.length" v-for="review in book.reviews">
                    <p>Name: <span>{{review.name}}</span></p>
                    <p>Rate: <span>{{review.rate}}</span></p>
                    <p>Rate: <span>{{review.date}}</span></p>
                    <p>Review: <long-text class="review-txt" :text="review.txt"/></p>
                </li>
                <p v-else>No reviews yet..</p>
            </ul>
            <button class="close-modal-btn" @click="toggle">X</button>
    </section>

    `,
    components: {
        longText
    },
  data() {
   return {
   };
    },
  created() {},
 methods: {
    toggle() {
        this.$emit('toggled')
    }
 },
 computed: {},
  };