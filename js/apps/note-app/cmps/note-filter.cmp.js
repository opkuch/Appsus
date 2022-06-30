export default {
    template: `
        <section class="notes-filter">
                 <input type="text" v-model="filterBy.type" @input="setFilter" placeholder="Search..."/>
            </section>
    `,
    data() {
        return {
            filterBy:{
                type: ''
            }
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