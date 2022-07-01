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

function getEmptyNote() {
    return {
        id: '',
        type: 'note-txt',
        isPinned: false,
        backgroundColor: 'white',
        info: {}
    }
}

function get(id) {
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
            isPinned: false,
            info: {
                title: '',
                txt: "Fullstack Me Baby!"
            },
            backgroundColor: "white"
        },
        {
            id: "n102",
            type: "note-img",
            isPinned: false,
            info: {
                title: "My pizza",
                url: "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            },
            backgroundColor: "white"
        },
        {
            id: "n103",
            type: "note-todos",
            isPinned: false,
            info: {
                title: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            },
            backgroundColor: "white"
        },
        {
            id: "n104",
            type: "note-img",
            isPinned: true,
            info: {
                title: "shakshuka",
                url: "https://images.unsplash.com/photo-1520218576172-c1a2df3fa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            backgroundColor: "white"
        },
        {
            id: "n105",
            type: "note-todos",
            isPinned: false,
            info: {
                title: "Get my stuff together",
                todos: [
                    { txt: "Do this", doneAt: null },
                    { txt: "Do that", doneAt: 187111111 },
                    { txt: "Go to sleep", doneAt: 187111111 },
                    { txt: "Learn", doneAt: 187111111 },
                    { txt: "Eat", doneAt: 187111111 },
                    { txt: "Sleepp", doneAt: 187111111 },
                ]
            },
            backgroundColor: "white"
        },
        {
            id: "n106",
            type: "note-txt",
            isPinned: false,
            info: {
                title: 'Text',
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti exercitationem nisi nulla repellendus, iure fuga quas voluptatibus eligendi ipsum fugit ut inventore harum quibusdam ratione et reprehenderit temporibus sapiente?"
            },
            backgroundColor: "white"
        },
    ]
}