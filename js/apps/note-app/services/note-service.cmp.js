import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

export const notesService = {
  query,
  remove,
  save,
  getEmptyNote,
  get,
  addEmailToNotes
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
    info: {},
  }
}

function get(id) {
  return storageService.get(NOTES_KEY, id)
}

function addEmailToNotes(subejct, body) {
    const newNote = getEmptyNote()
    newNote.info.title = subejct
    newNote.info.txt = body
    save(newNote)
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
      id: 'n101',
      type: 'note-txt',
      isPinned: false,
      info: {
        title: 'story time',
        txt: `Once upon a time, a very long time ago now, about last Friday, Winnie-the-Pooh lived in a forest all by himself under the name of Sanders. ("What does 'under the name' mean?" asked Christopher Robin. "It means he had the name over the door in gold letters, and lived under it." "Winnie-the-Pooh wasn't quite sure," said Christopher Robin. "Now I am," said a growly voice. "Then I will go on," said I.) One day when he was out walking, he came to an open place in the middle of the forest, and in the middle of this place was a large oak-tree, and, from the top of the tree, there came a loud buzzing-noise.`,
      },
      backgroundColor: '#FFAAAA',
    },
    {
      id: 'n102',
      type: 'note-img',
      isPinned: false,
      info: {
        title: 'My pizza',
        url: 'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      backgroundColor: '#AA3939',
    },
    {
      id: 'n103',
      type: 'note-todos',
      isPinned: false,
      info: {
        title: 'Get my stuff together',
        todos: [
          { txt: 'Driving liscence', doneAt: null },
          { txt: 'Coding power', doneAt: 187111111 },
        ],
      },
      backgroundColor: '#496D89',
    },
    {
      id: 'n104',
      type: 'note-img',
      isPinned: false,
      info: {
        title: 'shakshuka',
        url: 'https://images.unsplash.com/photo-1520218576172-c1a2df3fa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },
      backgroundColor: '#496D89',
    },
    {
      id: 'n104',
      type: 'note-img',
      isPinned: true,
      info: {
        title: 'Hallelujah!!!',
        url: 'https://c.tenor.com/m53EbYd742IAAAAM/praise-dance.gif',
      },
      backgroundColor: '#718EA4',
    },
    {
      id: 'n105',
      type: 'note-todos',
      isPinned: false,
      info: {
        title: 'Get my stuff together',
        todos: [
          { txt: 'Do this', doneAt: null },
          { txt: 'Do that', doneAt: 187111111 },
          { txt: 'Go to sleep', doneAt: 187111111 },
          { txt: 'Learn', doneAt: 187111111 },
          { txt: 'Eat', doneAt: 187111111 },
          { txt: 'Sleepp', doneAt: 187111111 },
        ],
      },
      backgroundColor: '#FFAAAA',
    },
    {
      id: 'n106',
      type: 'note-txt',
      isPinned: false,
      info: {
        title: 'Text',
        txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti exercitationem nisi nulla repellendus, iure fuga quas voluptatibus eligendi ipsum fugit ut inventore harum quibusdam ratione et reprehenderit temporibus sapiente?',
      },
      backgroundColor: '#FFD6AA',
    },
    {
      id: 'n107',
      type: 'note-video',
      isPinned: true,
      info: {
        title: 'Queen',
        url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      },
      backgroundColor: '#FFD6AA',
    },
    {
      id: 'n108',
      type: 'note-todos',
      isPinned: false,
      info: {
        title: 'days',
        todos: [
          { txt: 'sunday', doneAt: null },
          { txt: 'monday', doneAt: 187111111 },
          { txt: 'tusday', doneAt: 187111111 },
        ],
      },
      backgroundColor: '#953255',
    },
    {
      id: 'n109',
      type: 'note-txt',
      isPinned: false,
      info: {
        title: 'Text',
        txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti exercitationem nisi nulla repellendus, iure fuga quas voluptatibus eligendi ipsum fugit ...',
      },
      backgroundColor: '#953255',
    },
    {
      id: 'n110',
      type: 'note-img',
      isPinned: false,
      info: {
        title: ':)',
        url: 'https://images.unsplash.com/photo-1464219551459-ac14ae01fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      backgroundColor: '#AA3939',
    },
  ]
}
