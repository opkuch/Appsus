 export default {
 template:`
            <section class="main-app email-folders">
                <ul class="clean-list">
                    <router-link class="ibx" :to="'/emailApp/' + 'inbox'" >
                        <li class="inbox-container">
                            <div class="inbox-icon-container">
                                <img class="inbox-icon" src="assets/mail-img/icons/archive.svg"/>
                            </div>
                            <span>Inbox</span>
                        </li>
                    </router-link>
                    <router-link class="snt" :to="'/emailApp/' + 'sent'" >
                        <li class="sent-folder-container">
                            <div class="sent-icon-container">
                                <img class="sent-icon" src="assets/mail-img/icons/send.svg"/>
                            </div>
                            <span>Sent</span>
                        </li>
                    </router-link>
                    <router-link class="trsh" :to="'/emailApp/' + 'trash'" >
                        <li class="trash-folder-container">
                            <div class="bin-icon-container">
                                <img class="bin-icon" src="assets/mail-img/icons/trash-bin.svg"/>
                            </div>
                            <span>Trash</span>
                        </li>
                    </router-link>
                    <router-link class="star" :to="'/emailApp/' + 'star'" >
                        <li class="star-folder-container">
                            <div class="star-folder">
                                <img class="star-folder-icon" src="assets/mail-img/icons/star.svg"/>
                            </div>
                            <span>Starred</span>
                        </li>
                    </router-link>
                    <router-link class="drft" :to="'/emailApp/' + 'draft'" >
                        <li class="draft-folder-container">
                            <div class="draft-folder">
                                <img class="draft-folder-icon" src="assets/mail-img/icons/clipboard.svg"/>
                            </div>
                            <span>Draft</span>
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
 },
 computed: {},
  };