
export default {
  props: ['email'],
  template: `
            <router-link class="email-details-btn" :to="'/emailApp/' + email.id">   
                <li class="email-prev-container" @click="read" :class="isRead" :class="getStarStyle">
                    <section class="email-prev-header">
                    <div class="read-container"><img class="read-icon" :src="getReadIcon" @click.stop.prevent="toggleIsRead" /></div>
                      <div @click.stop.prevent="star" class="star-container"><img class="star-icon" src="assets/mail-img/icons/star-outline.svg" :class="getStarStyle"/></div>
                      <span class="from">{{getSenderName}}</span>
                    </section>
                    <section class="email-prev-body">
                        <span>{{getSubject}}</span>
                        <span class="sliced-body">{{sliceEmailBody}}</span>

                    </section>
                    <section class="email-prev-footer">
                        <span class="email-time">{{getTime}}</span>
                        <div class="trash-container" @click.stop.prevent="remove"><img class="trash-icon" src="assets/mail-img/icons/trash.svg" /></div>
                    </section>
                </li>
            </router-link>

        `,
  components: {},
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    read() {
        this.email.isRead = true
        this.$emit('read', this.email.id)
    },
    remove() {
      this.$emit('removed', this.email.id)
    },
    star() {
      this.$emit('starred', this.email.id)
    },
    toggleIsRead() {
      this.email.isRead = !this.email.isRead
      this.$emit('toggleRead', this.email)
    }
  },
  computed: {
    getSenderName() {
      const { from } = this.email
      const sliceIdx = from.indexOf('@')
      return from.slice(0, sliceIdx)
    },
    getTime() {
        const emailDate = new Date(this.email.sentAt) + ''
        return emailDate.slice(16, 21)
    },
    isRead() {
        return {read: this.email.isRead, 'not-read': !this.email.isRead}
    },
    sliceEmailBody() {
      if (!this.email.body) return
      return this.email.body.slice(0, 80) + '...'
    },
    getReadIcon() {
      if (this.email.isRead) return 'assets/mail-img/icons/mail-open.svg'
       else return 'assets/mail-img/icons/mail-close.svg'
    },
    getStarStyle() {
      return {'starred': this.email.isStarred, '': !this.email.isStarred}
    },
    getSubject() {
      if(this.email.subject.length > 30) return this.email.subject.slice(0,30) + '..'
      else return this.email.subject
    }
  },
}
