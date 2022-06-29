export default {
    template: `
            <img :src="info.url" alt=""/>  
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