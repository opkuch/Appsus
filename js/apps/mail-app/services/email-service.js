import { utilService } from "../../../services/util-service.js"
import { emailDataService } from './email-data-service.js'
import { storageService } from '../../../services/async-storage-service.js'

export const emailService = {
    query,
    get,
    save,
    getEmptyEmail
}

const EMAIL_KEY = 'demoemailDB'

_createEmails()

function query(criteria) {
    return storageService.query(EMAIL_KEY)
    .then(emails => {
        return emails.filter(email => {
            const {status, isRead, isStarred} = email
            if (criteria.status === 'star' && isStarred) {
                return email
            }
            else if (criteria.status === status) {
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

  function getEmptyEmail() {
    const user = emailDataService.getLoggedUser()
    return   {
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now(),
        from: user.email,
        to: '',
        status: 'inbox',
      }
  }

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
      emails = emailDataService.getEmailData()
      utilService.saveToStorage(EMAIL_KEY, emails)
    }
  }


  

  