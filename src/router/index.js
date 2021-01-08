import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/characters/:page?',
        alias: "/",
        name: 'Characters',
        component: () =>
            import ( /* webpackChunkName: "Characters" */ '../views/Characters.vue')

    },
    {
        path: '/episodes/:page?',
        name: 'Episodes',
        // route level code-splitting
        // this generates a separate chunk (Episodes.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Episodes" */ '../views/Episodes.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router