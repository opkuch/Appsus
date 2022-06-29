import { emailService } from "../services/email-service.js"

export default {
  template: `
            <section class="email-details-container">
                <section class="email-details-header">
                    <span>From {{getSenderName}}, {{email.from}}</span></p>
                    <span>To {{email.to}}</span>
                    <span>Subject:<h3>{{email.subject}}</h3></span>
                </section>
                <section class="email-details-body">
                    <p>{{email.boy}}</p>
                </section>
                <section class="email-details-actions">
                </section>
            </section>
            `,
  components: {},
  data() {
    return {
        email: null
    }
  },
  created() {
    console.log('hi');
    const id = this.$route.params.emailId
    emailService.get(id).then((email) => (this.email = email))
  },
  methods: {},
  computed: {
    getSenderName() {
        const { from } = this.email
        const sliceIdx = from.indexOf('@')
        return from.slice(0, sliceIdx)
      },
      getTime() {
          const emailDate = new Date(this.email.sentAt) + ''
          return emailDate.slice(16, 21)
      }
  },
}
