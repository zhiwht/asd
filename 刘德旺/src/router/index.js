import Vue from 'vue'
import Router from 'vue-router'
import Name from '@/components/index/Name'
import familyName from '@/components/familyName/familyName'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Name',
      component: Name,
    },
    {
      path: '/familyName',
      name: 'familyName',
      component: familyName,
    }
  ]
})
