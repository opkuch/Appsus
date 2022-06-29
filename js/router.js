import BookHomePage from "./apps/book-app/js/views/home-page.cmp"


const routes = [
    {
        path: '/bookHome',
        component: BookHomePage
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})