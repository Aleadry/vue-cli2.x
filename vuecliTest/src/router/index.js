import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Hello2 from '@/components/hello2'
import Hello1 from '@/components/hello1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Hello1,
        right:Hello2
      }
    }, {
      path: '/jspang',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hello2,
        right: Hello1
      }
    },
    {
      path: '/Hi',
      component: Hi,
      children:[
        {
          path:'/',
          name:'Hello/Hi',
          component:Hi
        },
        {
          path:'Hi1',
          name:'hi1',
          component:Hi1
        },
        {
          path:'Hi2',
          name:'hi2',
          component:Hi2
        },

      ]
    }
  ]
})
