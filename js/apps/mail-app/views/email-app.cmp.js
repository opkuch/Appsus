import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFolderList from '../cmps/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
export default {
  template: `
        <section class="main-layout main-app email-app-container" v-if="emails">
            <email-list :emails="emails" @read="saveEmail"/>
            <div class="side-bar-container">
              <email-compose @added="addEmail"/>
              <email-folder-list @folder="getFolder"/>
            </div>
        </section>
        `,
  components: {
    emailList,
    emailFolderList,
    emailCompose,
  },
  data() {
    return {
      emails: null,
      criteria: {
        status: 'inbox',
        isRead: false,
        isStarred: false,
      },
    }
  },
  created() {
    this.$route.params.status = 'inbox'
    emailService.query(this.criteria).then((emails) => {
      this.emails = emails
    })
  },
  methods: {
    emailsToShow() {
      emailService.query(this.criteria).then((emails) => {
        this.emails = emails
      })
    },
    saveEmail(emailId) {
      const emailIdx = this.emails.findIndex((email) => email.id === emailId)
      emailService.save(this.emails[emailIdx])
      this.emails[emailIdx].isRead = true
    },
    getFolder(status) {
      this.criteria.status = status
      // this.$route.params['status'] = status
      this.emailsToShow()
    },
    addEmail(emailContent) {
      const newEmail = emailService.getEmptyEmail()
      const { to, subject, body } = emailContent
      newEmail.to = to
      newEmail.subject = subject
      newEmail.body = body
      emailService.save(newEmail)
      this.emails.push(newEmail)
      this.emailsToShow()
    },
  },
  computed: {},
  watch: {
    '$route.params.status': {
      handler() {
        this.criteria.status = this.$route.params.emailId
        emailService.query(this.criteria).then((emails) => {
          this.emails = emails
        })
      },
      // immediate: true,
    },
  },
}
