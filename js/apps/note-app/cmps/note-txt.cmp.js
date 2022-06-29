export default {
    template: `
             <section>
                <h1>note txt</h1>
                  <p>{{info.txt}}</p>
             </section>
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