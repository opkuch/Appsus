 export default {
    props: ['modalContent'],
 template:` 
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                        <button class="modal-default-button" @click="$emit('close')">
                            X
                        </button>
                        </slot>
                    </div>
                </div>
            </div>
            </div>
            `,
    components: {},
  data() {
   return {};
    },
  created() {},
 methods: {},
 computed: {},
  };