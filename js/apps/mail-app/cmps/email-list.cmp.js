import emailPreview from '../cmps/email-preview.cmp.js'

export default {
  props: ['emails'],
  template: `
        <section class="email-list-container">
            <ul>
                <email-preview v-for="email in emails" :email="email" @read="read" @removed="remove" @starred="star" @toggle-read="toggleRead" />
            </ul>
        </section>

        
        `,
  components: {
    emailPreview
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    read(emailId) {
        this.$emit('read', emailId)
    },
    remove(emailId) {
      this.$emit('removed', emailId)
    },
    star(emailId) {
      this.$emit('starred', emailId)
    },
    toggleRead(email) {
      this.$emit('toggleRead', email)
    }
  },
  computed: {},
}
