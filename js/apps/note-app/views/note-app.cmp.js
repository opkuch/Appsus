import { notesService } from '../services/note-service.cmp.js'
import { emailService } from '../../mail-app/services/email-service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

export default {
  template: `
    <section class="note-app"> 
        <note-filter @filtered="setFilter"/>
        <note-add @saved="save"/>
        <note-list :notes="notesForDisplay" 
                   @remove="removeNote" 
                   @setPinned="setPinned" 
                   @copy="copy"
                   @saveBgClr="saveBgClr"
                   @send="sendInfo"/>
    </section>
  `,
  data() {
    return {
      notes: null,
      filterBy: null,
    }
  },
  created() {
    notesService.query().then((notes) => (this.notes = notes))
  },
  methods: {
    removeNote(id) {
      console.log(id)
      notesService.remove(id)
      const idx = this.notes.findIndex((note) => note.id === id)
      console.log(idx)
      this.notes.splice(idx, 1)
    },
    save(note) {
      console.log(note)
      notesService.save(note).then((note) => {
        notesService.query().then((notes) => {
          this.notes = notes
        })
      })
    },
    copy(note) {
      note.id = ''
      notesService.save(note).then((note) => {
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
      notesService.save(note).then((note) => {
        const notes = notesService.query().then((notes) => (this.notes = notes))

        this.notes = notes
      })
    },
    sendInfo(info) {
      const valuesStr = JSON.stringify(info)
      const infoValues = Object.values(JSON.parse(valuesStr))
      emailService.saveNoteInfo(infoValues)
        .then(res => console.log(res))
    }
  },
  computed: {
    notesForDisplay() {
      if (!this.filterBy) return this.notes
      let { txt } = this.filterBy

      let notes = this.notes
      notes = notes.filter((note) => {
      //   if(note.type === 'note-todos') {
      //     const todos = []
      //     note.info.todos.map((todo) => {
      //       todos.push(todo.txt)
      //     })

      //   }
      // console.log(note);
      // const noteVal = JSON.stringify(note.info);
      // console.log(JSON.stringify(note.info));
      // Object.values(note.info).map(val=>{
      //   console.log(val);
      // })
      // console.log(Object.values(note.info));
      // return Object.values(note.info).includes(txt.toLowerCase())
      return note.type.includes(txt.toLowerCase())
      //  note.info.title.includes(txt, toLowerCase())
      // console.log(note.info);
      // console.log(note.info.);
    })
    return notes
  },
},
components: {
  noteList,
    noteAdd,
    noteFilter,
  },
}
