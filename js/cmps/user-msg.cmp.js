import { eventBus } from "../services/event-bus-service.js";
export default {
    template: `
            <section v-if="msg" class="user-msg" :class="msg.type">
                <span>{{msg.txt}}</span>
                <button class="close-modal-btn" @click="msg=null">X</button>
            </section>
            `,
    data() {
        return {
            unsubscribe: null,
            msg: null
        };
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 3000)
        }
    },
    computed: {},
    unmounted() {
        this.unsubscribe()
    },
};