export default {
    template: `
            <ul>
                <li v-for="txt in info.todos">{{txt}}</li>
            </ul>     
          `,
    props: ['info'],
    data() {
        return {
            val: ''
        }
    },
    created() {
        console.log(this.info);
    },
    methods: {
        // reportVal() {
        //     this.$emit('setVal', this.val)
        // }
    },
    computed: {
        //   listId() {
        //     return 'list' + this._uid
        //   }
    }
}