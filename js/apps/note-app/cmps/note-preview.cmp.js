import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVideo from "./note-video.cmp.js";


export default {
  template: `
           <component :is="note.type"
                      :info="note.info"
           ></component>
  `,
  props: ['note'],
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
  },
  components:{
    noteTxt,
    noteTodos,
    noteImg,
    noteVideo,
  }
};