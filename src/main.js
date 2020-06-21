import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import VueTouch from 'vue-touch'
import router from './router'
import VConsole from 'vconsole'
import * as globalComps from './js/globalComps.js'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false

// 全局comps注册
console.log('-',globalComps)
for (const key in globalComps) {
  console.log('>>> ',globalComps[key])
  Vue.use(globalComps[key]) 
}
 
Vue.use(elementUI)
// init vConsole
var vConsole = new VConsole();


router.beforeEach((to,from,next)=>{
   next()

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
