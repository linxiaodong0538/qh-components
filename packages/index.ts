/*
 * @Author: linx linx@skeqi.com
 * @Date: 2022-09-08 09:47:25
 * @LastEditors: @zhuyadexiatian 734127061@qq.com
 * @LastEditTime: 2022-09-12 22:19:10
 * @FilePath: \smart_cover_mobile_managere:\学习\qh-components\packages\index.ts
 * @Description:
 *
 */
import { App } from 'vue'
import dialog from './dialog'
import form from './form'
import table from './table'


const components = [dialog, form, table]

const install = (app: App) => {
  if (install.installed) return
  install.installed = true

  components.forEach(item => {
    app.use(item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
