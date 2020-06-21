
import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import virtualList from './views/virtualList.vue'
import timeSlice from './views/timeSlice.vue'
import promise from './views/promise.vue'
import changeTheme from './views/changeTheme.vue'
import debounce from './views/debounce.vue'
import waterfall from './views/waterfall.vue'
import waterfallTest from './views/waterfallTest.vue'
import customAlert from './components/customAlert.vue'
import index from './views/index.vue'
import bigDataUpload from './views/bigDataUpload.vue'
import vueTransition from './views/vueTransition.vue'
import wxLongImg from './views/wxLongImg.vue'
import flex from './views/flex.vue'
import prototype from './views/prototype.vue'
import newInstentof from './views/new-instentof.vue'

import App from './App.vue'
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/virtualList', name: 'virtualList', component: virtualList },
    { path: '/timeSlice', name: 'timeSlice', component: timeSlice },
    { path: '/promise', name: 'promise', component: promise },
    { path: '/changeTheme', name: 'changeTheme', component: changeTheme },
    { path: '/debounce', name: 'debounce', component: debounce },
    { path: '/waterfall', name: 'waterfall', component: waterfall },
    { path: '/waterfallTest', name: 'waterfallTest', component: waterfallTest },
    { path: '/customAlert', name: 'customAlert', component: customAlert },
    { path: '/', name: 'index', component: index },
    { path: '/bigDataUpload', name: 'bigDataUpload', component: bigDataUpload },
    { path: '/vueTransition', name: 'vueTransition', component: vueTransition },
    { path: '/wxLongImg', name: 'wxLongImg', component: wxLongImg },
    { path: '/flex', name: 'flex', component: flex },
    { path: '/prototype', name: 'prototype', component: prototype },
    { path: '/new-instentof', name: 'newInstentof', component: newInstentof },
  ]
})