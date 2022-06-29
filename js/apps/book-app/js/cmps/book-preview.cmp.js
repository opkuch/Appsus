export default {
  props: ['book'],
  template: `
        <section class="book-prev">
            <div class="img-container">
                <img class="book-img" :src="book.thumbnail"/>
            </div>
            <div class="prev-header">
              <h3>{{book.title}}</h3>
              <span class="sale sale-prev" v-if="book.listPrice.isOnSale">SALE</span>
            </div>
            <span>Price: {{formatPrice}}</span>
        </section>
 `,
  data() {
    return {}
  },
  methods: {},
  computed: {
    formatPrice() {
      const currency = this.book.listPrice.currencyCode
      const price = this.book.listPrice.amount
      return new Intl.NumberFormat(currency, {
        style: 'currency',
        currency: `${currency}`,
      }).format(price)
    },
  },
}
