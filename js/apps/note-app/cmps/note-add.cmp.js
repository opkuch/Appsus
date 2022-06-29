import { notesService } from "../services/note-service.cmp.js"

export default {
    template: `
            <form @submit.prevent="save">
               <pre> {{newNote}}</pre>
               <div class="add-new-note-input">
               <input type="text" :placeholder="setInputPlaceHolder" v-model="newNote.info"/>
               <button @click="setNewType('note-txt')">txt</button>
               <button @click="setNewType('note-img')">img</button>
               <button @click="setNewType('note-todos')">todos</button>
               </div>
               <button @click="save" type="submit">save</button>
            </form>
          `,
    props: [],
    data() {
        return {
            newNote: notesService.getEmptyNote()
        }
    },
    created() {
        console.log(this.newNote);
    },
    methods: {
        setNewType(newType) {
            this.newNote.type = newType
        },
        save() {
            console.log(this.newNote);
            notesService.save(this.newNote)
            this.newNote = notesService.getEmptyNote()
        }
    },
    computed: {
        setInputPlaceHolder() {
            console.log(this.newNote);
            if (this.newNote.type === 'note-txt') {
                console.log(this.newNote.type);
                this.newNote.info = {
                    txt: ''
                }
                return 'Enter text...'
            }
            if (this.newNote.type === 'note-img') {
                this.newNote.info = {
                    url: '',
                }
                return 'Enter image URL...'
            }
            if (this.newNote.type === 'note-todos') {
                return 'Enter comma separated list...'
            }
        },
    }
}