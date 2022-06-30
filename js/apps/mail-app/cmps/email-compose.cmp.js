 export default {
 template:`
        <section class="compose-btn-container" @click="isShow=!isShow" >
            <span>Compose Email</span>
            <img class="compose-img" src="assets/mail-img/icons/add.svg"/>
        </section>
        <section class="email-compose-container" v-if="isShow">
            <div class="compose-header">
                <p>New Email</p>
            </div>
            <div class="compose-body">
                <form @submit.prevent="add">
                    <p class="compose-to">
                        <span>To: </span>
                        <input type="text" placeholder="example@mail.com" v-model="emailContent.to">
                    </p>
                    <p>
                        <span class="compose-subject">Subject: </span>
                        <input type="text" placeholder="Enter email subject" v-model="emailContent.subject">
                    </p>
                    <p>
                        <textarea name="email-body" cols="45" rows="20" v-model="emailContent.body">
                        </textarea>
                    </p>
                    <button>Submit</button>
                </form>
            </div>
            <button @click="isShow=!isShow">Back to emails</button>

        </section>
        `,
    components: {},
  data() {
   return {
    emailContent: {
        to: null,
        subject: null,
        body: null
    },
    isShow: false
   };
    },
  created() {},
 methods: {
    add() {
        this.$emit('added', this.emailContent)
    }
 },
 computed: {},
  };