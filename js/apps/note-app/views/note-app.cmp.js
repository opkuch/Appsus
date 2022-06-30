import { notesService } from "../services/note-service.cmp.js"
import noteAdd from "../cmps/note-add.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js"

export default {
    template: `
    <section class="note-app"> 
        <note-filter @filtered="setFilter"/>
        <note-add @saved="save"/>
        <note-list :notes="notesForDisplay" 
                   @remove="removeNote" 
                   @setPinned="setPinned" 
                   @copy="copy"
                   @saveBgClr="saveBgClr"/>
    </section>
  `,
    data() {
        return {
            notes: null,
            filterBy: null
        }
    },
    created() {
        notesService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        removeNote(id) {
            notesService.remove(id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === id)
                    this.notes.splice(idx, 1)
                })
        },
        save(note) {
            console.log(note);
            notesService.save(note).then( note => {
                notesService.query()
                    .then(notes => {
                        console.log(notes);
                        this.notes = notes
                    })
            })
        },
        copy(note) {
            note.id = ''
            notesService.save(note).then(note => {
                this.notes.push(note)
            })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setPinned(note) {
            note.isPinned = !note.isPinned
            notesService.save(note)
        },
        saveBgClr(note) {
            notesService.save(note).then(note => {
                const notes = notesService.query()
                    .then(notes => this.notes = notes)

                this.notes = notes
            })
        }

    },
    computed: {
        notesForDisplay() {
            if (!this.filterBy) return this.notes
            let { type } = this.filterBy

            let notes = this.notes
            notes = notes.filter((note) => {
                return note.type.includes(type.toLowerCase())
                // console.log(note.info);
                // note.info
            })
            return notes
        }
    },
    components: {
        noteList,
        noteAdd,
        noteFilter,
    }
};