 export default {
 template:`
            <section class="main-app email-folders">
                <ul class="clean-list">
                    <router-link class="ibx" :to="'/emailApp/' + 'inbox'" >
                        <li @click="inbox" class="inbox-container">
                            <div class="inbox-icon-container">
                                <img class="inbox-icon" src="assets/mail-img/icons/archive.svg"/>
                            </div>
                            <span>Inbox</span>
                        </li>
                    </router-link>
                    <router-link class="snt" :to="'/emailApp/' + 'sent'" >
                        <li @click="sent" class="sent-folder-container">
                            <div class="sent-icon-container">
                                <img class="sent-icon" src="assets/mail-img/icons/send.svg"/>
                            </div>
                            <span>Sent</span>
                        </li>
                    </router-link>
                    <router-link class="trsh" :to="'/emailApp/' + 'trash'" >
                        <li @click="trash" class="trash-folder-container">
                            <div class="bin-icon-container">
                                <img class="bin-icon" src="assets/mail-img/icons/trash-bin.svg"/>
                            </div>
                            <span>Trash</span>
                        </li>
                    </router-link>
                    <router-link :to="'/emailApp/' + 'star'" >
                        <li @click="star" class="star-folder-container">
                            <div class="star-folder">
                                <img class="star-folder-icon" src="assets/mail-img/icons/star.svg"/>
                            </div>
                            <span>Starred</span>
                        </li>
                    </router-link>
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