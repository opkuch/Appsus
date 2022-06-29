 import { emailService } from "../services/email-service.js"
 import emailList from "../cmps/email-list.cmp.js"

 export default {
 template:`
        <section class="main-layout main-app email-app-container">
            <email-list :emails="emails"/>
            <div class="email-folders">
                <ul>
                    <li>inbox</li>
                    <li>sent</li>
                    <li>trash</li>
                    <li>draft</li>
                </ul>
            </div>
        </section>
        `,
    components: {
        emailList,
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