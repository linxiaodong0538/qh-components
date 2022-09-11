/*
 * @Author: linx linx@skeqi.com
 * @Date: 2022-09-05 08:42:42
 * @LastEditors: linx linx@skeqi.com
 * @LastEditTime: 2022-09-07 08:27:25
 * @FilePath: \mye:\项目\qh-components\src\components\dialog\index.ts
 * @Description: 
 * 
 */
import { App } from "vue";
import Dialog from './src/index.vue'

export default {
    install(app: App) {
        app.component('qh-dialog', Dialog)
    }
}