export default {
    template: `
        <section class="notes-filter">
                 <input type="text" v-model="filterBy.txt" @input="setFilter" placeholder="Search..."/>
            </section>
    `,
    data() {
        return {
            filterBy:{
                txt:'',
            },
            search: ''
        }
    },
    methods: {
        setFilter(){
            this.$emit('filtered', this.filterBy)
        }
    },
    computed: {},
    components: {

    }
}