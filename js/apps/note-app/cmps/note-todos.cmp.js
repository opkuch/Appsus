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
    },
    computed: {
    }
}