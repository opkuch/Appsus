import emailPreview from '../cmps/email-preview.cmp.js'

export default {
  props: ['emails'],
  template: `
        <section class="email-list-container">
            <ul>
                <email-preview v-for="email in emails" :email="email"/>
            </ul>
        </section>

        
        `,
  components: {
    emailPreview
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
}
