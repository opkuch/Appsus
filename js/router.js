// import BookHomePage from "./apps/book-app/js/views/home-page.cmp"
import appHomePage from "./views/app-home-page.cmp.js"

import noteApp from "./apps/note-app/views/note-app.cmp.js"
import noteEdit from "./apps/note-app/views/note-edit.cmp.js"

import bookHomePage from "./apps/book-app/js/views/home-page.cmp.js"
import bookAboutPage from "./apps/book-app/js/views/about-page.cmp.js"
import bookApp from "./apps/book-app/js/views/book-app.cmp.js"
import bookDetails from "./apps/book-app/js/views/book-details.cmp.js"

import emailApp from "./apps/mail-app/views/email-app.cmp.js"
import emailDetails from "./apps/mail-app/views/email-details.cmp.js"

const routes = [
    {
        path: '/',
        component: appHomePage
    },
    {
        path: '/missKeep',
        component: noteApp
    },
    {
       path:'/missKeep/edit/:noteId?',
       component: noteEdit
    },
    {
        path: '/bookHome',
        component: bookHomePage
    },
    {
        path: '/about',
        component: bookAboutPage
    },
    {
        path: '/book',
        component: bookApp,
        children: [
            {
                path: '/book/:bookId',
                component: bookDetails
            },
        ]
    },
    {
        path: '/emailApp',
        component: emailApp,

    },
    {
        path: '/emailApp/:emailId',
        component: emailDetails
    }

]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})