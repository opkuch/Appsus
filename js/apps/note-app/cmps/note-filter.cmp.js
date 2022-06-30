export default {
    template: `
        <section class="notes-filter">
                 <input type="text" v-model="search" @input="setFilter" placeholder="Search..."/>
            </section>
    `,
    data() {
        return {
            filterBy:{
                type: '',
                txt:'',
            },
            search: ''
        }
    },
    methods: {
        setFilter(){
            this.filterBy.type = this.search
            this.filterBy.txt = this.search
            console.log(this.filterBy);
            this.$emit('filtered', this.filterBy)
        }
    },
    computed: {},
    components: {

    }
}