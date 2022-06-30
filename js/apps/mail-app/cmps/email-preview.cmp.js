
export default {
  props: ['email'],
  template: `
            <router-link class="email-details-btn" :to="'/emailApp/' + email.id">   
                <li class="email-prev-container" @click="read" :class="isRead">
                    <section class="email-prev-header">
                        <span>{{getSenderName}}</span>
                    </section>
                    <section class="email-prev-body">
                        <span>{{email.subject}}</span>
                        <span class="sliced-body">{{sliceEmailBody}}</span>

                    </section>
                    <section class="email-prev-footer">
                        <span>{{getTime}}</span>
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
      return this.email.body.slice(0, 40) + '...'
    }
  },
}
