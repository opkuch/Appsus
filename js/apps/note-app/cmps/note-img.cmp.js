export default {
    template: `
       <section>
            <img :src="info.url" alt=""/>
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