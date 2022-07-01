import { emailService } from '../services/email-service.js'
import emailFolderList from '../cmps/email-folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
  template: `
            <section class="main-layout main-app email-details-container" v-if="email">
              <div class="email-content">
                <section class="content-header">
                <router-link :to="'/emailApp/' + getRightPath" class="back-btn"><img class="" src="assets/mail-img/icons/arrow-back.svg"/></router-link>
                  <div class="subject-container">
                    <h1>{{email.subject}}</h1>
                    <section class="content-actions">
                      <div class="read-container"><img class="read-icon" :src="getReadIcon" @click.stop.prevent="toggleIsRead" /></div>
                      <a @click="starEmail" class="star-container"><img class="star-icon" src="assets/mail-img/icons/star-outline.svg" :class="getStarStyle"/></a>
                      <router-link :to="'/emailApp/' + getRightPath" @click="moveToTrash" class="remove-btn"> 
                        <div class="trash-container"><img class="trash-icon" src="assets/mail-img/icons/trash.svg" /></div>
                      </router-link>
                    </section>
                  </div>
                    <div class="sub-header">
                      <img class="user-icon" src="assets/mail-img/icons/user.svg" />
                      <div class="send-details">
                        <div><span class="bold">From</span> <span>{{email.from}}</span></div>
                        <div><span class="bold">To</span> <span>{{email.to}}</span></div>
                        <div class="bold date-details"><span>{{getDate}}</span></div>
                      </div>
                    </div>
                </section>
                <section class="content-body">
                   <p>{{email.body}}</p>
                </section>
              </div>
              <div class="side-bar-container">
                <email-compose @added="addEmail"/>
                <email-folder-list />
              </div>
            </section>
            `,
  components: {
    emailFolderList,
    emailCompose
  },
  data() {
    return {
      email: null,
      path: null
    }
  },
  created() {
    const id = this.$route.params.emailId
    emailService.get(id).then((email) => (this.email = email))

  },
  methods: {
    moveToTrash() {
      this.email.status = 'trash'
      emailService.save(this.email)
    },
    starEmail() {
      this.email.isStarred = !this.email.isStarred
      emailService.save(this.email)
    },
    toggleIsRead() {
      this.email.isRead = !this.email.isRead
      emailService.save(this.email)
    }
  },
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
    },
    getDate(){
      if (!this.email) return
      return (new Date(this.email.sentAt) + '').slice(0, 21)
    },
    getRightPath() {
      if (this.email.status === 'inbox/sent') {
        return 'inbox'
      }else return this.email.status
    },
    getStarStyle() {
      return {'starred': this.email.isStarred, '': !this.email.isStarred}
    },
    getReadIcon() {
      if (this.email.isRead) return 'assets/mail-img/icons/mail-open.svg'
       else return 'assets/mail-img/icons/mail-close.svg'
    },

  },
}
