 import { emailService } from "../services/email-service.js"
 import emailList from "../cmps/email-list.cmp.js"
import emailFolderList from "../cmps/email-folder-list.cmp.js"

 export default {
 template:`
        <section class="main-layout main-app email-app-container">
            <email-list :emails="emails"/>
            <email-folder-list />
        </section>
        `,
    components: {
        emailList,
        emailFolderList
    },
  data() {
   return {
    emails: null
   };
    },
  created() {
    emailService.query()
    .then(emails => {
        this.emails = emails
    })
  },
 methods: {},
 computed: {},
  };