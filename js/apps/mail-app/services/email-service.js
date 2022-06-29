import { utilService } from "../../../services/util-service.js"
import { emailDataService } from './email-data-service.js'
import { storageService } from '../../../services/async-storage-service.js'

export const emailService = {
    query,
    get
}

const EMAIL_KEY = 'demoemailDB'

_createEmails()



function query() {
    return storageService.query(EMAIL_KEY)
  }

  function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
  }

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
      emails = emailDataService.getEmailData()
      utilService.saveToStorage(EMAIL_KEY, emails)
    }
  }

  