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
               <button type="submit">save</button>
            </form>
          `,
    props: [],
    data() {
        return {
            newNote:null,
            txt: ''
        }
    },
    created() {
        this.newNote =  notesService.getEmptyNote()
    },
    methods: {
        setNewType(newType) {
            this.newNote.type = newType
        },
        save() {
            console.log(this.newNote.info);
            notesService.save(this.newNote).then(note => {
                this.$emit('saved', note)
            }) 
                this.newNote = notesService.getEmptyNote()
                console.log(this.newNote);
        }
    },
        computed: {
            setInputPlaceHolder() {
                if (this.newNote.type === 'note-txt') {
                    this.newNote.info = {
                        txt: this.txt
                    }
                    // console.log(this.newNote);
                    return 'Enter text...'
                } else if (this.newNote.type === 'note-img') {
                    this.newNote.info = {
                        URL: this.txt
                    }
                    // console.log(this.newNote);
                    return 'Enter image URL...'
                } else {
                    const todos = []
                    this.txt.split(',').map((todo) => {
                        const newTodo = { txt: todo }
                        todos.push(newTodo)
                    })
                    this.newNote.info = {todos: todos}
                    console.log(this.newNote.info);
                    return 'Enter comma separated list...'
                }
            }
        },
    }