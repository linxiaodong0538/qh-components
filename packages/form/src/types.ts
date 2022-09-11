/*
 * @Author: linx linx@skeqi.com
 * @Date: 2022-09-06 08:14:22
 * @LastEditors: linx linx@skeqi.com
 * @LastEditTime: 2022-09-07 17:29:34
 * @FilePath: \mye:\项目\qh-components\src\components\form\src\types.ts
 * @Description:
 *
 */
export interface FormOptions {
  label: string
  // 字段名称
  prop: string
  type: string
  // 是否可清除
  clearable?: boolean
  options?: {
    label: string
    value: string | number | boolean
    children?: FormOptions['options']
  }[]
  placeholder?: string
  shortcuts?: Array<{ text: string; value: Date | Function }>
  format?: string
  rangeShortcuts?: FormOptions['shortcuts']
  multiple?: boolean
  filterable?: boolean
  disabled?: boolean
  remote?: boolean
  remoteMethod?: (val: any) => void
  props?: Object
  width?: number | string
}
