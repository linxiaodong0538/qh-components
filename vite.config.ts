/*
 * @Author: lx
 * @Date: 2022-09-04 13:35:52
 * @LastEditors: @zhuyadexiatian 734127061@qq.com
 * @LastEditTime: 2022-09-11 19:07:56
 * @FilePath: \smart_cover_mobile_managere:\学习\qh-components\vite.config.ts
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  // build: {
  //   rollupOptions: {
  //     // 请确保外部化那些你的库中不需要的依赖
  //     external: ['vue'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  //   lib: {
  //     entry: './packages/index.ts',
  //     name: 'qh-components',
  //   },
  // }
})
