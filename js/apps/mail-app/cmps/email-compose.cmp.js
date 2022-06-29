 export default {
 template:`
        <button @click="isShow=!isShow">Add</button>
        <section class="email-compose-container" v-if="isShow">
            <form @submit.prevent="add">
                <p>
                    <span>To: </span>
                    <input type="text" placeholder="example@mail.com" v-model="emailContent.to">
                </p>
                <p>
                    <span>Subject: </span>
                    <input type="text" placeholder="Enter email subject" v-model="emailContent.subject">
                </p>
                <p>
                    <textarea name="email-body" cols="30" rows="10" v-model="emailContent.body">
                    </textarea>
                </p>
                <button>Submit</button>
            </form>
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