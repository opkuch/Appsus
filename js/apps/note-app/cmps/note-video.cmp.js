export default {
    template: `
             <section>
                <iframe width="420" height="315"
                   :src="info.url">
                </iframe>
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