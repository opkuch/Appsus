 export default {
 template:`
            <section class="main-app email-folders">
                <ul class="clean-list">
                        <li @click="inbox">
                            <img />
                            <span>Inbox</span>
                        </li>
                    <li @click="sent">
                        <img />
                        <span>Sent</span>
                    </li>
                    <li @click="trash">
                        <img />
                        <span>Trash</span>
                    </li>
                    <li @click="star">
                        <img />
                        <span>Starred</span>
                    </li>
                </ul>
            </section>
        `,
    components: {},
  data() {
   return {
   };
    },
  created() {},
 methods: {
    inbox() {
        this.$emit('folder', 'inbox')
    },
    sent() {
        this.$emit('folder', 'sent')
    },
    trash() {
        this.$emit('folder', 'trash')
    },
    star() {
        this.$emit('folder', 'star')
    }
 },
 computed: {},
  };