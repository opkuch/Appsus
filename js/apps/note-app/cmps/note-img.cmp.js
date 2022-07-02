export default {
    template: `
       <section class="note-img-container">
            <img class="note-img" :src="info.url" alt="" :class="getImgName" />
       </section>  
          `,
    props: ['info'],
    data() {
        return {
            val: ''
        }
    },
    methods: {
    },
    computed: {
        getImgName() {
            const reversedUrl = this.info.url.split('').reverse().join('')
            const sliceIdx = reversedUrl.indexOf('/')
            console.log(reversedUrl);
            console.log(sliceIdx);
        }
    }
}