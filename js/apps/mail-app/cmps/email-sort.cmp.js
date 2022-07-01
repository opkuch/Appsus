 export default {
 template:`
        <label>
            <select v-model="sortBy" @change="selectSort">
                <option disabled value="">SORT</option>
                <option value="subject">Subject</option>
                <option value="content">Content</option>
                <option value="user">User</option>
                <option value="date">Date</option>
            </select>
        </label>
        `,
    components: {},
  data() {
   return {
    sortBy: null
   };
    },
  created() {},
 methods: {
    selectSort() {
        if(!this.sortBy) return
        this.$emit('sorted', this.sortBy)
    }
 },
 computed: {},
  };