export const emailDataService = {
    getEmailData,
    getLoggedUser
}

const emailData = [
  {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551134930494,
    from: 'jojo@jojo.com',
    to: 'momo@momo.com',
    status: 'sent',
    isStarred: false
  },
  {
    id: 'e102',
    subject: 'Love You!',
    body: 'Damnnn son where you find this, bla, more bla bla',
    isRead: false,
    sentAt: 1531113932594,
    from: 'jojo@jojo.com',
    to: 'momo@momo.com',
    status: 'sent',
    isStarred: false
  },
  {
    id: 'e103',
    subject: 'Whats up man',
    body: 'Would love to catch up sometimes, Damnnn son where you find this',
    isRead: false,
    sentAt: 1521133931594,
    from: 'jojo@jojo.com',
    to: 'momo@momo.com',
    status: 'inbox',
    isStarred: false
  },
  {
    id: 'e104',
    subject: 'Lets go',
    body: 'Would love to catch up sometimes, lets go to the park and get some strawberris while watching the bird fly away',
    isRead: false,
    sentAt: 1451133930794,
    from: 'jojo@jojo.com',
    to: 'momo@momo.com',
    status: 'inbox',
    isStarred: false
  },
]
const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }

function getEmailData() {
  return emailData
}

function getLoggedUser() {
    return loggedinUser
}