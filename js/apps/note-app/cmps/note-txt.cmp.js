export default {
    template: `
             <section class="note-txt-container">
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