import ViewCategory from './components/sites/ViewCategory'
import Home from './components/sites/home'

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'history',
    routes : [
        { path: '/category', component: ViewCategory },
        { path: '/', component: Home},
    ]
})



// router.beforeEach((to, from, next) => {
//     const currentUser = firebase.auth().currentUser
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth) 
//     console.log('user ', currentUser)
    
//     if ( requiresAuth ) {
//         if ( currentUser ) {
//             next()
//         }
//         else {
//             // go to login if user is not logged in
//             next('/')
//         }
//     }
//     else {
//         next()
//     }
// })

export default router