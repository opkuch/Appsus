import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
  template: `
            <div class="title">
                <h1>{{note.info.title}}</h1>
                <span v-if="note.isPinned" class="pinned-note"><img class="note-icon" src="assets/mail-img/icons/pin-outline.svg"></span>
            </div>
           <component :is="note.type"
                      :info="note.info"
                     
           ></component>
           <div class="actions">
                  <button class="btn remove-note-btn" @click="remove" title="delete"><img class="note-icon" src="assets/mail-img/icons/trash.svg"></button>
                   <router-link :to="'/missKeep/edit/'+note.id" title="edit"><img class="note-icon" src="assets/mail-img/icons/create-outline.svg"></router-link>
                  <label :for="note.id">
                    <img class="note-icon" src="assets/mail-img/icons/color-fill-outline.svg">
                  </label>
                  <input :id="note.id" type="color" v-model="color" title="Background Color" @input="setBgClr" />
                  <button @click="copy" title="Copy"><img class="note-icon" src="assets/mail-img/icons/copy-outline.svg"></button>
                  <button @click="send" title="Send"><img class="note-icon" src="assets/mail-img/icons/paper-plane-outline.svg"></button>
                  <button class="pin" @click="setPinned" title="Pin"><img class="note-icon" src="assets/mail-img/icons/pin-outline.svg"></button>
            </div>
  `,
  props: ['note'],
  data() {
    return {
      color: '#rrggbb',
    }
  },
  created() {

  },
  methods: {
    setPinned() {
      this.$emit('setPinned', this.note)
    },
    copy() {
      this.$emit('copy', this.note)
    },
    remove() {
      this.$emit('remove', this.note.id)
    },
    setBgClr() {
      this.note.backgroundColor = this.color
      this.$emit('saveBgClr', this.note)
    },
    send() {
      const {info} = this.note
      this.$emit('send', info)
    }
  },
  computed: {
  },
  components: {
    noteTxt,
    noteTodos,
    noteImg,
    noteVideo,
  },
}
