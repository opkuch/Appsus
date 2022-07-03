 export default {
 template:`
         <section class="compose-btn-container" @click="toggleCompose" >
            <span>Compose</span>
            <img class="compose-img" src="assets/mail-img/icons/add.svg"/>
        </section>
            <section class="email-compose-container" v-show="isShow">
                <div class="compose-header">
                    <p>New Email</p>
                    <button class="close-btn" @click="toggleCompose">X</button>
                </div>
                <div class="compose-body">
                    <form @submit.prevent="add">
                        <div class="compose-to">
                            <span>To </span>
                            <input class="input-txt" type="email" placeholder="example@mail.com" v-model="emailContent.to">
                        </div>
                        <div class="compose-subject">
                            <span>Subject </span>
                            <input class="input-txt" type="text" placeholder="Enter email subject" v-model="emailContent.subject">
                        </div>
                        <div>
                            <textarea name="email-body" cols="45" rows="10" v-model="emailContent.body">
                            </textarea>
                        </div>
                        <button class="submit-btn" type="submit">Send</button>
                    </form>
                </div>
            </section>
        `,
    components: {},
  data() {
   return {
    componentKey: 0,
    emailContent: {
        to: null,
        subject: null,
        body: null
    },
    isShow: false,
    intervalId: null
   };
    },
  created() {   
  },
 methods: {
    add() {
        this.$emit('added', this.emailContent)
        this.emailContent =  {
            to: null,
            subject: null,
            body: null
        }
        this.toggleCompose()
    },
    toggleCompose() {
        this.isShow = !this.isShow
        if (this.isShow) {
            this.intervalId = setInterval(() => {
                this.$emit('toDraft', this.emailContent)
            },10000)
        }
        else clearInterval(this.intervalId)
    }
 },
 computed: {},
  };