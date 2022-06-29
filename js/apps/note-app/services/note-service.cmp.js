import { utilService } from "../../../services/util-service.js"
import { storageService } from "../../../services/async-storage-service.js";

export const notesService = {
    query,
    remove,
    save,
    getEmptyNote,
    get,
}

const NOTES_KEY = 'noteDB'
_createNotes()

function query() {
    return storageService.query(NOTES_KEY)
}

function remove(id) {
    return storageService.remove(NOTES_KEY, id)
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note)
    else return storageService.post(NOTES_KEY, note)
}

function getEmptyNote(){
    return {
        id:'',
        type:'note-txt',
        isPinned: false,
        style: {
            backgroundColor: 'white'
        },
        info:{}
    }
}

function get(id){
return storageService.get(NOTES_KEY, id)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = getNotes()
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}

function getNotes() {
    return [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "http://some-img/me",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            }
        }
    ]
}

// const gNotes = [
//     {
//         id: "n101",
//         type: "note-txt",
//         isPinned: true,
//         info: {
//             txt: "Fullstack Me Baby!"
//         }
//     },
//     {
//         id: "n102",
//         type: "note-img",
//         info: {
//             url: "http://some-img/me",
//             title: "Bobi and Me"
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: "n103",
//         type: "note-todos",
//         info: {
//             label: "Get my stuff together",
//             todos: [
//                 { txt: "Driving liscence", doneAt: null },
//                 { txt: "Coding power", doneAt: 187111111 }
//             ]
//         }
//     }
// ];