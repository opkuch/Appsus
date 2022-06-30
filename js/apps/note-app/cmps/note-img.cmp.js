export default {
    template: `
            <img src="" alt=""/>  
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