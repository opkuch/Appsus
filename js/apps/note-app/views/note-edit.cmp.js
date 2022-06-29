import { notesService } from "../services/note-service.cmp.js"

export default {
    template: `
        <section class="note-edit" v-if="noteToEdit">
            <h1>{{noteToEdit.type}}</h1>
            <h1>{{noteToEdit}}</h1>

            <input type="txt" :placeholder="setInputPlaceHolder" v-bind=""/>
            <button @click="setNewType('note-txt')">txt</button>
            <button @click="setNewType('note-img')">img</button>
            <button @click="setNewType('note-todos')">todos</button>

            <!-- <h4>{{pageTitle}}</h4>
            <form @submit.prevent="save">
                <input type="text" v-model="carToEdit.vendor" placeholder="Vendor">
                <input type="number" v-model.number="carToEdit.maxSpeed" placeholder="Max speed">
                <button type="submit">Save</button>
            </form> -->
        </section>
    `,
    data() {
        return {
            noteToEdit: null
        };
    },
    created() {
        const id = this.$route.params.noteId
        if (id) {
            notesService.get(id).then(note => this.noteToEdit = note)
        } else {
            this.noteToEdit = notesService.getEmptyNote() 
       }
       console.log(this.noteToEdit);
    },
    methods: {
        setNewType(newType){
            this.noteToEdit.type = newType
        }
        // save() {
        //     if (!this.noteToEdit) return;
        //     noteService.save(this.carToEdit).then(car => {
        //         this.$router.push('/car')
        //         eventBus.emit('show-msg', { txt: 'Saved/Update successfully', type: 'success' });
        //     })
        // }
    },
    computed: {
        setInputPlaceHolder(){
            if(this.noteToEdit.type === 'note-txt') return 'Enter text...'
            if(this.noteToEdit.type === 'note-img') return 'Enter image URL...'
            if(this.noteToEdit.type === 'note-todos') return 'Enter comma separated list...'
        }
        // pageTitle() {
        //     const id = this.$route.params.carId
        //     return id ? 'Edit car' : 'Add car'
        // }
    },
    components:{
        notesService,
    }
};