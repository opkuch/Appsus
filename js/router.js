// import BookHomePage from "./apps/book-app/js/views/home-page.cmp"
import noteApp from "./apps/note-app/views/note-app.cmp.js"
import appHomePage from "./views/app-home-page.cmp.js"

const routes = [
    {
        path: '/',
        component: appHomePage
    },
    {
        path: '/miss-keep/',
        component: noteApp
    }
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})