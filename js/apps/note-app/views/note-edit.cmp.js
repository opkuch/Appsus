import { notesService } from "../services/note-service.cmp.js"

export default {
    template: `        
            <section class="note-edit" v-if="noteToEdit">
            <h1>{{noteToEdit.type}}</h1>
            <h1>{{noteToEdit}}</h1>
            <input type="text" placeholder="Enter title" v-model="noteToEdit.info.title"/>
             <textarea v-model="newTxt" :placeholder="setInputPlaceHolder" rows="4" cols="50"></textarea>
            <button @click="save">save</button>
            </section>
    `,
    data() {
        return {
            noteToEdit: null,
            newTxt: ''
        };
    },
    created() {
        const id = this.$route.params.noteId
        if (id) {
            notesService.get(id).then(note => {
                this.noteToEdit = note
            })       
        }
    },
    methods: {
        save(){
            const type = this.noteToEdit.type
            if(type ==='note-txt') this.noteToEdit.info.txt = this.newTxt
            else if(type ==='note-img') this.noteToEdit.info.url = this.newTxt
            else{
                const todos = []
                this.newTxt.split(',').map((todo) => {
                    const newTodo = { txt: todo }
                    todos.push(newTodo)
                })
                this.newNote.info = {todos: todos}
            }
            
            console.log(this.noteToEdit.info);
            this.$emit('save', this.noteToEdit)
        }
    },
    computed: {
        setInputPlaceHolder(){
            if(this.noteToEdit.type === 'note-txt') return 'Enter text...'
            if(this.noteToEdit.type === 'note-img') return 'Enter image URL...'
            if(this.noteToEdit.type === 'note-todos') return 'Enter comma separated list...'
        }
    },
    components:{
        notesService,
    }
};