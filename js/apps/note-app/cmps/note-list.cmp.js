import notePreview from "./note-preview.cmp.js"

export default {
    template: `
        <section class="notes-list">
                      <h1> notes </h1>
                     <pre>{{notes}}</pre>
        
        <div v-for="note in notes" >
            <note-preview :note="note"/>
        </div>
        </section>
    `,
    props: ['notes'],
    methods: {
    },
    computed: {},
    components: {
        notePreview,
    }
}