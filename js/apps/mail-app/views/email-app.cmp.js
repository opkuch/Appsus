import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFolderList from '../cmps/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
  template: `
        <section class="main-layout main-app email-app-container" v-if="emails">
          <div class="main-content-container">
            <email-filter @searching="searchEmails"/>
            <email-list :emails="emailsToShow" @read="saveEmail" @removed="moveToTrash" @starred="starEmail" :key="componentKey"/>
          </div>
          <div class="side-bar-container">
              <email-compose @added="addEmail" @to-draft="saveToDraft"/>
            <email-folder-list />
          </div>
        </section>
        `,
  components: {
    emailList,
    emailFolderList,
    emailCompose,
    emailFilter,
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
      draftMail: null,
      searchVal: null,
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
  mounted() {},
  methods: {
    loadEmails() {
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
    saveToDraft(emailContent) {
      if (!emailContent.to && !emailContent.subject && !emailContent.body)
        return
      if (!this.draftMail) {
        this.draftMail = emailService.getEmptyEmail()
      }
      const { to, subject, body } = emailContent
      this.draftMail.to = to
      this.draftMail.subject = subject
      this.draftMail.body = body
      this.draftMail.status = 'draft'
      emailService.save(this.draftMail)
      this.forceRerender()
    },
    searchEmails(val) {
      this.searchVal = val
    },
  },
  computed: {
    emailsToShow() {
      if (!this.searchVal) return this.emails
      const regex = new RegExp(this.searchVal, 'i')
      let subjectFiltered = this.emails
        .filter((email) => {
          return regex.test(email.subject)
        })
        let from
      let bodyFiltered = this.emails.filter(email => regex.test(email.body))
      bodyFiltered = bodyFiltered.filter(email => {
        const sliceIdx = email.from.indexOf('@')
        from = email.from.slice(0, sliceIdx)
        return !regex.test(email.subject) && !regex.test(from)
    })

      
      return subjectFiltered.concat(bodyFiltered)
    },
  },
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
