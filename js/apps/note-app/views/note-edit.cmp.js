import { notesService } from '../services/note-service.cmp.js'
import { emailService } from '../../mail-app/services/email-service.js'
export default {
  template: `        
            <section class="edit-page" v-if="noteToEdit">
                <div class="note-edit" :style="{backgroundColor: noteToEdit.backgroundColor}">
                    <div v-if="noteToEdit.isPinned" class="pinned-note"><i class="fa-solid fa-thumbtack"></i></div>
                  <input type="text" ref="editInput" placeholder="Enter title" v-model="noteToEdit.info.title"/>
                  <textarea v-model="newTxt" :placeholder="setInputPlaceHolder" rows="4" cols="50"></textarea>
                       <div class="actions">
                       <router-link :to="'/missKeep'" title="back" class="return-btn"><img class="note-icon" src="assets/mail-img/icons/arrow-forward.svg" /></router-link>
                           <button @click="setPinned" title="pinned"><img class="note-icon" src="assets/mail-img/icons/pin-outline.svg"></button>
                           <button @click="remove" title="delete"><img class="note-icon" src="assets/mail-img/icons/trash.svg"></button>
                           <label :for="noteToEdit.id" title="Background Color">
                                <img src="assets/mail-img/icons/color-fill-outline.svg" class="note-icon"/>
                            </label>
                            <input :id="noteToEdit.id" type="color" v-model="color" title="background color" @input="setBgClr"/>
                            <button @click="sendInfo" title="Send"><img class="note-icon" src="assets/mail-img/icons/paper-plane-outline.svg"></button>
                            <button @click="save" class="save-btn" title="save"><img class="note-icon" src="assets/mail-img/icons/checkbox-outline.svg" ></button>
                       </div>
                </div>
            </section>
    `,
  data() {
    return {
      noteToEdit: null,
      newTxt: '',
      color: '',
    }
  },
  created() {
    const id = this.$route.params.noteId
    if (id) {
      notesService.get(id).then((note) => {
        this.noteToEdit = note
        const info = this.noteToEdit.info
        if (this.noteToEdit.type === 'note-txt') this.newTxt = info.txt
        if (this.noteToEdit.type === 'note-img') this.newTxt = info.url
        if (this.noteToEdit.type === 'note-video') this.newTxt = info.url
        if (this.noteToEdit.type === 'note-todos') {
          const todos = []
          this.noteToEdit.info.todos.map((todo) => {
            todos.push(todo.txt)
          })
          this.newTxt = todos.join(',')
        }
      })
    }
  },
  mounted() {
    console.log(this.$refs)
    // this.$refs.editInput.focus()
  },
  methods: {
    save() {
      console.log(this.noteToEdit)
      const type = this.noteToEdit.type
      if (type === 'note-txt') this.noteToEdit.info.txt = this.newTxt
      else if (type === 'note-img') this.noteToEdit.info.url = this.newTxt
      else {
        const todos = []
        this.newTxt.split(',').map((todo) => {
          const newTodo = { txt: todo }
          todos.push(newTodo)
        })
        this.noteToEdit.info = { todos: todos }
      }
      notesService.save(this.noteToEdit)
      this.$router.push('/missKeep')
    },
    setBgClr() {
      this.noteToEdit.backgroundColor = this.color
      notesService.save(this.noteToEdit)
    },
    setPinned() {
      this.noteToEdit.isPinned = !this.noteToEdit.isPinned
      notesService.save(this.noteToEdit)
    },
    remove() {
      notesService.remove(this.noteToEdit)
      this.$router.push('/missKeep')
    },
    sendInfo() {
      const valuesStr = JSON.stringify(this.noteToEdit.info)
      const infoValues = Object.values(JSON.parse(valuesStr))
      console.log(infoValues);
      emailService.saveNoteInfo(infoValues).then((res) => console.log(res))
    },
  },
  computed: {
    setInputPlaceHolder() {
      if (this.noteToEdit.type === 'note-txt') return 'Enter text...'
      if (this.noteToEdit.type === 'note-img') return 'Enter image URL...'
      if (this.noteToEdit.type === 'note-todos')
        return 'Enter comma separated list...'
    },
  },
  components: {
    notesService,
  },
}
