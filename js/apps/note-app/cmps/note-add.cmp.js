import { notesService } from "../services/note-service.cmp.js"

export default {
    template: `
            <form @submit.prevent="save" class="add-note-container">
                <div class="add-new-note-input">
                   <input type="text" :placeholder="setInputPlaceHolder" v-model="txt" ref="addInput"/>
                      <div class="add-actions-btns">
                        <button @click="setNewType('note-txt')" title="text note" type="button"><i class="fa-solid fa-comment"></i></button>
                        <button @click="setNewType('note-img')" title="image note" type="button"><i class="fa-solid fa-image"></i></button>
                        <button @click="setNewType('note-todos')" title="to do note" type="button"><i class="fa-solid fa-list"></i></button>
                        <button type="submit" title="save" class="save-btn"><i class="fa-solid fa-circle-check"></i></button>
                     </div>
               </div>
            </form>
          `,
    props: [],
    data() {
        return {
            newNote: null,
            txt: ''
        }
    },
    created() {
        this.newNote = notesService.getEmptyNote()
    },
    mounted() {
        this.$refs.addInput.focus()
    },
    methods: {
        setNewType(newType) {
            this.newNote.type = newType

            // const type = this.newNote.type
            // console.log(type);
            // if (type === 'note-txt') this.newNote.info = { txt: this.txt }
            // else if (type === 'note-img') this.newNote.info = { url: this.txt }
            // else {
            //     const todos = []
            //     this.txt.split(',').map((todo) => {
            //         const newTodo = { txt: todo }
            //         todos.push(newTodo)
            //     })
            //     this.newNote.info = { todos: todos }
            // }
        },
        save() {
            console.log(this.newNote.info);
            notesService.save(this.newNote).then(note => {
                this.$emit('saved', note)
            })
            this.newNote = notesService.getEmptyNote()
            this.txt = ''
        },
    },
    computed: {
        setInputPlaceHolder() {
            if (this.newNote.type === 'note-txt') {
                this.newNote.info = {
                    txt: this.txt
                }
                return 'Enter text...'
            } else if (this.newNote.type === 'note-img') {
                this.newNote.info = {
                    url: this.txt
                }
                return 'Enter image URL...'
            } else {
                const todos = []
                this.txt.split(',').map((todo) => {
                    const newTodo = { txt: todo }
                    todos.push(newTodo)
                })
                this.newNote.info = { todos: todos }
                return 'Enter comma separated list...'
            }
        }
    },
}