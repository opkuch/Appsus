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
    methods: {
    },
    computed: {
    }
}