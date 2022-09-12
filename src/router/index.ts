/*
 * @Author: lx
 * @Date: 2022-09-11 19:33:16
 * @LastEditors: @zhuyadexiatian 734127061@qq.com
 * @LastEditTime: 2022-09-11 19:41:23
 * @FilePath: \smart_cover_mobile_managere:\学习\qh-components\src\router\index.ts
 * @Description: 
 * 
 */
import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router