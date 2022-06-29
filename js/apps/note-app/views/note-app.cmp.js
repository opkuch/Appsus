import { notesService } from "../services/note-service.cmp.js"
import noteList from "../cmps/note-list.cmp.js"

export default {
    template: `
    <section class="note-app"> 
        <note-list :notes="notesForDisplay"/>
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
    },
    computed: {
        notesForDisplay(){
            return this.notes
        }
    },
    components: {
        noteList,
    }
};