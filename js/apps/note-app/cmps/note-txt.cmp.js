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
    },
    computed: {
    }
}