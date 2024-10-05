import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'
import {useStoreAuth} from '@/stores/storeAuth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewNotes
      // component: () => import('../views/ViewNotes.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats
    },
    {
      path: '/edit/:id',
      name: 'edit-note',
      component: ViewEditNote
    },
    {
      path: '/auth',
      name: 'auth',
      component: ViewAuth
    }
  ]
})

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()
  // console.log(to)
  if (!storeAuth.user.id && to.name != 'auth'){
    return {name: 'auth'}
  }
  if (storeAuth.user.id && to.name == 'auth'){
    return false
  }
  if(to.name != 'auth'){
    sessionStorage.setItem('last-route',to.fullPath,1)
  }
})

export default router
