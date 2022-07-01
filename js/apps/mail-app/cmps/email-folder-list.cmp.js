import emailSort from './email-sort.cmp.js' 
 export default {
 template:`
            <section class="email-folders">
                <ul class="clean-list">
                    <router-link class="ibx" :to="'/emailApp/' + 'inbox'" >
                        <li class="inbox-container">
                            <div class="inbox-icon-container">
                                <img class="inbox-icon" src="assets/mail-img/icons/archive.svg"/>
                            </div>
                            <span>Inbox</span>
                            <div class="sorting-option">
                                <button class="sorting-btn">
                                    <img src="assets/mail-img/icons/ellipsis.svg" @click="toggleInboxSort"/>
                                </button>
                            </div>
                            <email-sort v-show="isInboxSort" @sorted="selectSort"/>
                        </li>
                    </router-link>
                    <router-link class="snt" :to="'/emailApp/' + 'sent'" >
                        <li class="sent-folder-container">
                            <div class="sent-icon-container">
                                <img class="sent-icon" src="assets/mail-img/icons/send.svg"  />
                            </div>
                            <span>Sent</span>
                            <div class="sorting-option">
                                <button class="sorting-btn">
                                    <img src="assets/mail-img/icons/ellipsis.svg"  @click="toggleSentSort"/>
                                </button>
                            </div>
                            <email-sort v-show="isSentSort" @sorted="selectSort"/>
                        </li>
                    </router-link>
                    <router-link class="trsh" :to="'/emailApp/' + 'trash'" >
                        <li class="trash-folder-container">
                            <div class="bin-icon-container">
                                <img class="bin-icon" src="assets/mail-img/icons/trash-bin.svg" />
                            </div>
                            <span>Trash</span>
                            <div class="sorting-option">
                                <button class="sorting-btn">
                                    <img src="assets/mail-img/icons/ellipsis.svg" @click="toggleTrashSort"/>
                                </button>
                            </div>
                            <email-sort v-show="isTrashSort" @sorted="selectSort"/>
                        </li>
                    </router-link>
                    <router-link class="star" :to="'/emailApp/' + 'star'" >
                        <li class="star-folder-container">
                            <div class="star-folder">
                                <img class="star-folder-icon" src="assets/mail-img/icons/star.svg"  />
                            </div>
                            <span>Starred</span>
                            <div class="sorting-option">
                                <button class="sorting-btn">
                                    <img src="assets/mail-img/icons/ellipsis.svg" @click="toggleStarSort"/>
                                </button>
                            </div>
                            <email-sort v-show="isStarSort" @sorted="selectSort"/>
                        </li>
                    </router-link>
                    <router-link class="drft" :to="'/emailApp/' + 'draft'" >
                        <li class="draft-folder-container">
                            <div class="draft-folder">
                                <img class="draft-folder-icon" src="assets/mail-img/icons/clipboard.svg"/>
                            </div>
                            <span>Draft</span>
                            <div class="sorting-option">
                                <button class="sorting-btn">
                                    <img src="assets/mail-img/icons/ellipsis.svg" @click="toggleDraftSort"/>
                                </button>
                            </div>
                            <email-sort v-show="isDraftSort" @sorted="selectSort"/>
                        </li>
                    </router-link>
                </ul>
            </section>
        `,
    components: {
        emailSort
    },
  data() {
   return {
    isInboxSort: false,
    isSentSort: false,
    isTrashSort: false,
    isStarSort: false,
    isDraftSort: false
   };
    },
  created() {},
 methods: {
    selectSort(sortBy) {
        this.$emit('sorted', sortBy)
    },
    toggleInboxSort() {
        this.isSentSort= false
        this.isTrashSort= false
        this.isStarSort= false
        this.isDraftSort= false
        this.isInboxSort = !this.isInboxSort
    },
    toggleSentSort() {
        this.isInboxSort= false
        this.isTrashSort= false
        this.isStarSort= false
        this.isDraftSort= false
        this.isSentSort = !this.isSentSort
    },
    toggleTrashSort() {
        this.isSentSort= false
        this.isInboxSort= false
        this.isStarSort= false
        this.isDraftSort= false
        this.isTrashSort = !this.isTrashSort
    },
    toggleStarSort() {
        this.isSentSort= false
        this.isTrashSort= false
        this.isInboxSort= false
        this.isDraftSort= false
        this.isStarSort = !this.isStarSort
    },
    toggleDraftSort() {
        this.isSentSort= false
        this.isTrashSort= false
        this.isStarSort= false
        this.isInboxSort= false
        this.isDraftSort = !this.isDraftSort
    }
 },
 computed: {},
  };