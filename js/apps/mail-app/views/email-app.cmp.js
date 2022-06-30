import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFolderList from '../cmps/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
  template: `
        <section class="main-layout main-app email-app-container" v-if="emails">
            <email-list :emails="emails" @read="saveEmail" @removed="moveToTrash" @starred="starEmail" :key="componentKey"/>
            <div class="side-bar-container">
              <email-compose @added="addEmail"/>
              <email-folder-list />
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
      componentKey: 0,
      lastFolder: null,
      criteria: {
        status: 'inbox',
        isRead: false,
        isStarred: false,
      },
    }
  },
  created() {
    this.criteria.status = this.$route.path.slice(10)
    if (!this.criteria.status) {
      this.criteria.status = 'inbox'
    }
    emailService.query(this.criteria).then((emails) => {
      this.emails = emails.reverse()
    })
  },
  mounted() {
  },
  methods: {
    emailsToShow() {
      emailService.query(this.criteria).then((emails) => {
        this.emails = emails.reverse()
      })
    },
    saveEmail(emailId) {
      const emailIdx = this.emails.findIndex((email) => email.id === emailId)
      emailService.save(this.emails[emailIdx])
      this.emails[emailIdx].isRead = true
    },
    addEmail(emailContent) {
      let newEmail = emailService.getEmptyEmail()
      const { to, subject, body } = emailContent
      newEmail.to = to
      newEmail.subject = subject
      newEmail.body = body
      newEmail.status = 'inbox/sent'
      emailService.save(newEmail).then((email) => {
        this.emails.unshift(email)
      })
      this.forceRerender()
    },
    moveToTrash(emailId) {
      emailService.get(emailId).then((email) => {
        if (email.status === 'trash' && confirm('Are you sure?')) {
          emailService.remove(emailId)
          const idx = this.emails.findIndex(
            (wantedEmail) => wantedEmail.id === email.id
          )
          this.emails.splice(idx, 1)
          this.forceRerender()
          return
        }
        email.status = 'trash'
        emailService.save(email).then((email) => {
          const updatedEmail = email
          const idx = this.emails.findIndex(
            (email) => email.id === updatedEmail.id
          )
          this.emails.splice(idx, 1)
        })
        this.forceRerender()
      })
    },
    forceRerender() {
      this.componentKey += 1
    },
    starEmail(emailId) {
      emailService.get(emailId).then((email) => {
        email.isStarred = !email.isStarred
        emailService.save(email).then((email) => {
          const updatedEmail = email
          const idx = this.emails.findIndex(
            (email) => email.id === updatedEmail.id
          )
          this.emails.splice(idx, 1, updatedEmail)
        })
        this.forceRerender()
      })
    },
  },
  computed: {},
  watch: {
    '$route.path': {
      handler() {
        this.criteria.status = this.$route.path.slice(10)
        emailService.query(this.criteria).then((emails) => {
          this.emails = emails.reverse()
        })
      },
    },
  },
}
