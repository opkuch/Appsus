export default {
    template: `
            <ul>
                <li v-for="txt in info.todos">{{txt.txt}} <span></span></li>
            </ul>     
          `,
    props: ['info'],
    data() {
        return {
            val: ''
        }
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