import notePreview from "./note-preview.cmp.js"
import noteEdit from "../views/note-edit.cmp.js"

export default {
    template: `
        <section class="notes-list">

            <div v-for="note in notes" :key="note.id" class="note-container" :style="{backgroundColor: note.backgroundColor}" :class="{important: note.isPinned}">
                
                <div class="title">
                    <h1>{{note.info.title}}</h1>
                    <span v-if="note.isPinned" class="pinned-note"><i class="fa-solid fa-thumbtack"></i></span>
                </div>

                 <note-preview :note="note"/>

                <div class="actions">
                  <button class="btn remove-note-btn" @click="remove(note.id)" title="delete"><i class="fa-solid fa-trash"></i></button>
                   <router-link :to="'/missKeep/edit/'+note.id" title="edit"><i class="fa-solid fa-pen-to-square"></i></router-link>
                      <label :for="note.id">
                        <i class="fa-solid fa-palette"></i>
                        <input :id="note.id" type="color" v-model="color" title="background color" @input="setBgClr(note)"/>
                     </label>
                  <button @click="setPinned(note)" title="pinned"><i class="fa-solid fa-thumbtack"></i></button>
                   <button @click="copy(note)" title="copy"><i class="fa-solid fa-copy"></i></button>
                </div>
            </div>
        </section>
    `,
    props: ['notes'],
    data() {
        return {
            color: '#rrggbb' ,
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
        setBgClr(note) {
            note.backgroundColor = this.color
            this.$emit('saveBgClr', note)
        },
    },
    computed: {
    },
    components: {
        notePreview,
        noteEdit
    }
}