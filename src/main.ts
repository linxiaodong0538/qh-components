/*
 * @Author: linx linx@skeqi.com
 * @Date: 2022-09-06 08:14:22
 * @LastEditors: @zhuyadexiatian 734127061@qq.com
 * @LastEditTime: 2022-09-11 19:38:39
 * @FilePath: \smart_cover_mobile_managere:\学习\qh-components\src\main.ts
 * @Description:
 *
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'

import App from './App.vue'

import qhComponents from 'qh-components'


import 'qh-components/style.css'

// import qhComponents from '../lib/qh-components.es.js'
// import '../lib/style.css'

// import Table from '../packages/table/src/index.vue'
// import Form from '../packages/form/src/index.vue'
// import Dialog from '../packages/dialog/src/index.vue'



const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


// app.component('qh-form', Form)

app.use(ElementPlus, { locale }).use(router).use(qhComponents).mount('#app')
