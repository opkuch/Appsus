import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFolderList from '../cmps/email-folder-list.cmp.js'

export default {
  template: `
        <section class="main-layout main-app email-app-container">
            <email-list :emails="emails" @read="saveEmail"/>
            <email-folder-list @folder="getFolder"/>
        </section>
        `,
  components: {
    emailList,
    emailFolderList,
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
      this.emailsToShow()
    },
  },
  computed: {

  },
}
