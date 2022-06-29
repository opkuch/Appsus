export default {
  template: `
              <section class="book-filter-container main-layout">
                <h3>Filter By</h3>
                <form @submit.prevent="filter">
                  <input
                  type="text"
                  v-model="this.filterBy.byName"
                  placeholder="Start typing..."
                  class="input-txt"
                  autocomplete = "off"
                  />
                  <label for="min-price">Minimum Price: </label>
                  <input
                  type="range"
                  min="0"
                  max="200"
                  value="0"
                  name="min-price"
                  class="min-price"
                  v-model.number="filterBy.fromPrice"
                  />
                  <span>{{filterBy.fromPrice}}</span>
                  <label for="max-price">Maximum Price: </label>
                  <input
                  type="range"
                  min="0"
                  max="200"
                  value="200"
                  class="max-price"
                  name="max-price"
                  v-model.number="filterBy.toPrice"
                  /> 
                  <span>{{filterBy.toPrice}}</span>
                  <button>Filter</button> 
                </form>
              </section>
              `,
  components: {},
  data() {
    return {
      filterBy: {
        byName: '',
        fromPrice: 0,
        toPrice: 200,
      },
    }
  },
  created() {},
  methods: {
    filter() {
      this.$emit('filtered', JSON.stringify(this.filterBy))
    },
  },
  computed: {},
}
