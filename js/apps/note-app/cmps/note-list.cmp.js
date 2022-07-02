import notePreview from "./note-preview.cmp.js"
import noteEdit from "../views/note-edit.cmp.js"

export default {
    template: `
        <section class="notes-list">
                <div v-for="note in notes" :key="note.id" class="note-container" :style="{backgroundColor: note.backgroundColor}" :class="{important: note.isPinned, 'get-long': note.type==='note-img'}">
                        <note-preview :note="note"  @set-pinned="setPinned" @remove="remove" @copy="copy" @send="send"/>
                    </router-link>
                </div>
        </section>
    `,
    props: ['notes'],
    data() {
        return {
            drag: false
        }
    },
    methods: {
        remove(id) {
            this.$emit('remove', id)
        },
        setPinned(note){
            this.$emit('setPinned', note)
        },
        copy(note){
            this.$emit('copy', note)
        },
        send(info) {
            this.$emit('send', info)
        }

    },
    computed: {
    },
    components: {
        notePreview,
        noteEdit,
    }
}