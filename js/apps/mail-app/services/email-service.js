import { utilService } from '../../../services/util-service.js'
import { emailDataService } from './email-data-service.js'
import { storageService } from '../../../services/async-storage-service.js'

export const emailService = {
  query,
  get,
  save,
  getEmptyEmail,
  remove,
  saveNoteInfo
}

const EMAIL_KEY = 'demoemailDB'

_createEmails()

function query(criteria) {
  return storageService.query(EMAIL_KEY).then((emails) => {
    return emails.filter((email) => {
      const { status, isRead, isStarred } = email
      if (criteria.status === 'star' && isStarred) {
        return email
      } else if (criteria.status === status) {
        return email
      }else if ((criteria.status === 'inbox' || criteria.status === 'sent') && status === 'inbox/sent') {
        return email
      }
    })
  })
}

function get(emailId) {
  return storageService.get(EMAIL_KEY, emailId)
}

function save(email) {
  if (email.id) return storageService.put(EMAIL_KEY, email)
  else return storageService.post(EMAIL_KEY, email)
}

function remove(emailId) {
  return storageService.remove(EMAIL_KEY, emailId)
}

function getEmptyEmail() {
  const user = emailDataService.getLoggedUser()
  return {
    subject: '',
    body: '',
    isRead: false,
    sentAt: Date.now(),
    from: user.email,
    to: '',
    status: 'inbox',
    isDraft: false,
    isStarred: false
  }
}

function saveNoteInfo(infoValues) {
  const newEmail = getEmptyEmail()
  newEmail.subject = infoValues[0]
  newEmail.body = infoValues[1]
  newEmail.to = emailDataService.getLoggedUser().email
  newEmail.from = 'My Notes'
  return save(newEmail)
  .then(email => 'success')
  .catch(err => console.log(err, 'Something went wrong'))
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = emailDataService.getEmailData()
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
}
