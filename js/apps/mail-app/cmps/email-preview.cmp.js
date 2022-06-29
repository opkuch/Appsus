
export default {
  props: ['email'],
  template: `
            <router-link class="email-details-btn" :to="'/emailApp/' + email.id">   
                <li class="email-prev-container" @click="toggleClick">
                    <section class="email-prev-header">
                        <span>{{getSenderName}}</span>
                    </section>
                    <section class="email-prev-body">
                        <span>{{email.subject}}</span>
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
        isClicked: false
    }
  },
  created() {},
  methods: {
    toggleClick() {
        this.isClicked = !this.isClicked
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
    }
  },
}
