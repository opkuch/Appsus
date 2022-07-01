export default {
    template: `
             <section>
                <iframe
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
    mounted() {
        console.log(this.info);
    },
    methods: {
    },
    computed: {
    }
}