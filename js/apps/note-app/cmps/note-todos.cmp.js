export default {
    template: `
        <section>
            <ul>
                <li v-for="txt in info.todos">{{txt.txt}} <span></span></li>
            </ul>  
       </section>   
          `,
    props: ['info'],
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    }
}