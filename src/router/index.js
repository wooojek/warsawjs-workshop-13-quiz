import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/components/Quiz'
import Game from '@/components/Game'
import Finish from '@/components/Finish'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Quiz',
            component: Quiz
        },
        {
            path: '/quiz',
            name: '',
            component: Game
        },
        {
            path: '/finish',
            name: '',
            component: Finish
        }
    ]
})
