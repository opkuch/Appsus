 export default {
 template:`
        <section class="filter-container">
            <input class="input-txt" type="text" placeholder="Search Email 🔎︎" v-model="searchVal" @input="search">
        </section>
        `,
    components: {},
  data() {
   return {
    searchVal: null
   };
    },
  created() {},
 methods: {
  search(){
    this.$emit('searching', this.searchVal)
  }
 },
 computed: {},
  };