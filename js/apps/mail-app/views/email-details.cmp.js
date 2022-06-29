import { emailService } from "../services/email-service.js"
import emailFolderList from "../cmps/email-folder-list.cmp.js"

export default {
  template: `
            <section class="main-layout main-app email-details-container" v-if="email">
                <div class="email-content">
                    <section class="content-header">
                        <p><span>From {{email.from}}</span></p>
                        <p> <span>To {{email.to}}</span></p>
                        <p><span>Subject:<h5>{{email.subject}}</h5></span></p>
                    </section>
                    <section class="content-body">
                        <p>{{email.body}}</p>
                    </section>
                    <section class="content-actions">
                        <button>Delete</button>
                        <router-link :to="'/emailApp/'">Back</router-link>
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
        email: null,
        isShow: false
    }
  },
  created() {
    this.isShow = true
    const id = this.$route.params.emailId
    emailService.get(id).then((email) => (this.email = email))
  },
  methods: {},
  computed: {
    getSenderName() {
        if (!this.email) return
        const { from } = this.email
        const sliceIdx = from.indexOf('@')
        return from.slice(0, sliceIdx)
      },
      getTime() {
        if (!this.email) return
          const emailDate = new Date(this.email.sentAt) + ''
          return emailDate.slice(16, 21)
      }
  }
}
