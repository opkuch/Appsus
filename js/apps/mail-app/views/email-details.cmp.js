import { emailService } from "../services/email-service.js"
import emailFolderList from "../cmps/email-folder-list.cmp.js"

export default {
  template: `
            <section class="main-layout main-app email-details-container">
                <div class="email-content">
                    <section class="content-header">
                        <p><span>From {{getSenderName}}, {{email.from}}</span></p>
                        <p> <span>To {{email.to}}</span></p>
                        <p><span>Subject:<h5>{{email.subject}}</h5></span></p>
                    </section>
                    <section class="content-body">
                        <p>{{email.body}}</p>
                    </section>
                    <section class="content-actions">
                        <button>Delete</button>
                        <button>Back</button>
                    </section>
                </div>
                <email-folder-list />
            </section>
            `,
  components: {
    emailFolderList
  },
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
