 export default {
 template:`
        <section class="compose-btn-container" @click="isShow=!isShow" >
            <span>Compose</span>
            <img class="compose-img" src="assets/mail-img/icons/add.svg"/>
        </section>
        <section class="email-compose-container" v-if="isShow">
            <div class="compose-header">
                <p>New Email</p>
            </div>
            <div class="compose-body">
                <form @submit.prevent="add">
                    <div class="compose-to">
                        <span>To: </span>
                        <input class="input-txt" type="email" placeholder="example@mail.com" v-model="emailContent.to">
                    </div>
                    <div class="compose-subject">
                        <span>Subject: </span>
                        <input class="input-txt" type="text" placeholder="Enter email subject" v-model="emailContent.subject">
                    </div>
                    <div>
                        <textarea name="email-body" cols="45" rows="15" v-model="emailContent.body">
                        </textarea>
                    </div>
                    <button class="submit-btn" type="submit">Submit</button>
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
        this.emailContent =  {
            to: null,
            subject: null,
            body: null
        }
    }
 },
 computed: {},
  };