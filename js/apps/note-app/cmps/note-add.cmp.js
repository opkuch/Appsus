import { notesService } from "../services/note-service.cmp.js"

export default {
    template: `
            <form @submit.prevent="save" class="add-note-container">
               <div class="add-new-note-input">
                 <input type="text" :placeholder="setInputPlaceHolder" v-model="newNote.info.txt"/>
                   <div class="add-actions-btns">
                       <button @click="setNewType('note-txt')" title="text note">txt</button>
                       <button @click="setNewType('note-img')" title="image note">img</button>
                       <button @click="setNewType('note-todos')" title="to do note">todos</button>
                   </div>
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
    methods: {
        setNewType(newType) {
            this.newNote.type = newType
        },
        save() {
            notesService.save(this.newNote).then(note =>{
                this.$emit('saved', note)
            })
            this.newNote = notesService.getEmptyNote()
        }
    },
    computed: {
        setInputPlaceHolder() {
            if (this.newNote.type === 'note-txt') {
                this.newNote.info = {
                    txt:''
                }
                return 'Enter text...'
            }
            if (this.newNote.type === 'note-img') {
                this.newNote.info = {
                    txt:''
                }
                return 'Enter image URL...'
            }
            if (this.newNote.type === 'note-todos') {
                return 'Enter comma separated list...'
            }
        },
    }
}