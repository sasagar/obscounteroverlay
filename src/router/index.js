import { createRouter, createWebHistory } from 'vue-router'
import Usage from '../components/Usage.vue'
import CountDown from '../components/CountDown.vue'

const routes = [
    {
        path: '/',
        name: 'Usage',
        component: Usage,
    },
    {
        path: '/CountDown*',
        name: 'CountDown',
        component: CountDown,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router