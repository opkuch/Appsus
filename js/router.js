// import BookHomePage from "./apps/book-app/js/views/home-page.cmp"
import appHomePage from "./views/app-home-page.cmp.js"

const routes = [
    {
        path: '/',
        component: appHomePage
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})