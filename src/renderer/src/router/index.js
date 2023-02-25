import { createRouter, createWebHashHistory } from 'vue-router'

import ParallelView from '../views/ParallelView.vue'
import SingleView from '../views/SingleView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'parallelMode',
      component: ParallelView
    },
    {
      path: '/single/',
      name: 'singleMode',
      component: SingleView
    },
    {
      path: '/settings/',
      name: 'settingsMode',
      component: SettingsView
    }
  ]
})

export default router
