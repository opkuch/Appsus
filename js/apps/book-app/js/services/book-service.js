import { utilService } from './util-service.js'
import { dataService } from './data-service.js'
import { storageService } from './async-storage-service.js'
const BOOKS_KEY = 'vuebookDB'

export const bookService = {
  query,
  remove,
  save,
  get,
  addReview,
  searchGoogleBooks,
  addBook,
  getNeighborBookId
}
_createBooks()

function query() {
  return storageService.query(BOOKS_KEY)
}

function remove(bookId) {
  return storageService.remove(BOOKS_KEY, bookId)
}

function save(book) {
  if (book.id) return storageService.put(BOOKS_KEY, book)
  else return storageService.post(BOOKS_KEY, book)
}

function addReview(bookId, review) {
  return get(bookId).then((book) => {
    book.reviews.push(review)
    return save(book)
  })
}

function searchGoogleBooks(searchVal) {
  if (!searchVal) return
  return _connectToGoogleBooks(searchVal)
    .then((data) => data.items)
    .then((items) => {
      return Promise.resolve(_prepBooksTitles(items))
    })
}

function addBook(id) {
  return _connectToGoogleBooks(id)
    .then((data) => data.items)
    .then((items) => {
      const newBook = _prepBookProps(items[0])
      return save(newBook)
    })
}

function _prepBookProps(book) {
  const {
    authors,
    categories,
    imageLinks,
    language,
    pageCount,
    publishedDate,
    title,
    description,
  } = book.volumeInfo
  const { thumbnail } = imageLinks
  const reviews = []
  return {
    title,
    subtitle: 'mi est eros convallis auctor arcu dapibus himenaeos',
    authors,
    publishedDate,
    reviews,
    description,
    pageCount,
    categories,
    thumbnail,
    language,
    listPrice: {
      amount: Math.random() * 100,
      currencyCode: 'USD',
      isOnSale: false,
    },
  }
}
function _prepBooksTitles(items) {
  return items.map((item) => {
    return { title: item.volumeInfo.title, id: item.id }
  })
}

function _connectToGoogleBooks(searchVal) {
  let query = searchVal.replaceAll(' ', '%20')
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?printType=books&q=${query}`
  ).then((res) => {
    return res.json()
  })
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOKS_KEY)
  if (!books || !books.length) {
    books = dataService.getBooksData()
    books.forEach((book) => {
      if (!book.reviews) book.reviews = []
    })
    utilService.saveToStorage(BOOKS_KEY, books)
  }
}

function get(bookId) {
  return storageService.get(BOOKS_KEY, bookId)
}

function getNeighborBookId(bookId) {
  return storageService.query(BOOKS_KEY).then((books) => {
    const idx = books.findIndex((book) => book.id === bookId)
    return {
      nextId: idx < books.length - 1 ? books[idx + 1].id : books[0].id,
      prevId: idx > 0 ? books[idx - 1].id : books[books.length - 1].id,
    }
  })
}
