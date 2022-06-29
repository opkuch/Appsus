import notePreview from "./note-preview.cmp.js"

export default {
    template: `
        <section class="notes-list">
                <div v-for="note in notes" :key="note.id" class="note-container">
                     <note-preview :note="note"/>
                     <div class="actions">
                       <button class="btn remove-note-btn" @click="remove(note.id)">x</button>
                       <router-link :to="'/missKeep/edit/'+note.id">Edit</router-link>
                     </div>
                </div>
            </section>
            <pre>{{notes}}</pre>
    `,
    props: ['notes'],
    methods: {
        remove(id) {
            this.$emit('remove', id)
        }
    },
    computed: {},
    components: {
        notePreview,
    }
}