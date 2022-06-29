 export default {
 template:`
            <section class="main-app email-folders">
                <ul class="clean-list">
                    <li @click="inbox">inbox</li>
                    <li @click="sent">sent</li>
                    <li @click="trash">trash</li>
                    <li @click="draft">draft</li>
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
    draft() {
        this.$emit('folder', 'draft')
    }
 },
 computed: {},
  };