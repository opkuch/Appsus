import { notesService } from "../services/note-service.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import noteAdd from "../cmps/note-add.cmp.js";

export default {
    template: `
    <section class="note-app"> 
        <note-add/>
        <note-list :notes="notesForDisplay" @remove="removeNote"/>
    </section>
  `,
    data() {
        return {
            notes: null
        };
    },
    created() {
        notesService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        removeNote(id){
            console.log(id);
            notesService.remove(id)
            .then(() => {
                const idx = this.notes.findIndex((note) => note.id === id)
                this.notes.splice(idx, 1)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        notesForDisplay(){
            return this.notes
        }
    },
    components: {
        noteList,
        noteAdd
    }
};