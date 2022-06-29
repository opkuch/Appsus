export default {
	props: ['text'],
	template: `
    <p>{{formatedText}}<span v-if="!isMore && longText">...</span> <span :style="readStyle" v-if="longText" @click="isMore=!isMore">{{readText}} </span></p>
`,
	data() {
		return {
			isMore: false,
			longText: (this.text)? this.text.length > 100 : false,
		}
	},
	methods: {},
	computed: {
		formatedText() {
      if(!this.text) return
			return this.isMore ? this.text : this.text.slice(0, 100)
		},
		readText() {
			return this.isMore ? ' Read Less' : ' Read more'
		},
		readStyle() {
			return {
				cursor: 'pointer',
				'text-decoration': 'underline',
				// textDecoration: 'underline',
			}
		},
	},
}
