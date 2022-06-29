export default {
    template: `
             <section>
                  <p>{{info.txt}}</p>
             </section>
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