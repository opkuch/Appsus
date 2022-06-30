import { notesService } from "../services/note-service.cmp.js"

export default {
    template: `
            <form @submit.prevent="save" class="add-note-container">
                <div class="add-new-note-input">
                   <input type="text" :placeholder="setInputPlaceHolder" v-model="txt"/>
                      <div class="add-actions-btns">
                        <button @click="setNewType('note-txt')" title="text note" type="button"><i class="fa-solid fa-comment"></i></button>
                        <button @click="setNewType('note-img')" title="image note" type="button"><i class="fa-solid fa-image"></i></button>
                        <button @click="setNewType('note-todos')" title="to do note" type="button"><i class="fa-solid fa-list"></i></button>
                     </div>
               </div>
               <button @click="save" type="submit">save</button>
            </form>
          `,
    props: [],
    data() {
        return {
            newNote: notesService.getEmptyNote(),
            txt: ''
        }
    },
    methods: {
        setNewType(newType) {
            this.newNote.type = newType
        },
        save() {
            this.newNote.info.txt = this.txt
            notesService.save(this.newNote).then(note => {
                console.log(note);
                this.$emit('saved', note)
            })
            this.newNote = notesService.getEmptyNote()
        }
    },
    computed: {
        setInputPlaceHolder() {
            if (this.newNote.type === 'note-txt') {
                this.newNote.info = {
                    txt: this.txt
                }
                return 'Enter text...'
            }
            if (this.newNote.type === 'note-img') {
                this.newNote.info = {
                    URL: this.txt
                }
                return 'Enter image URL...'
            }
            if (this.newNote.type === 'note-todos') {
                this.newNote.info = {
                    URL: this.txt
                }

                // label: "Get my stuff together",
                // todos: [
                //     { txt: "Driving liscence", doneAt: null },
                //     { txt: "Coding power", doneAt: 187111111 }
                // ]
                return 'Enter comma separated list...'
            }
        },
    }
}