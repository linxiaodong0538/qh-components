/*
 * @Author: linx linx@skeqi.com
 * @Date: 2022-09-05 08:42:42
 * @LastEditors: linx linx@skeqi.com
 * @LastEditTime: 2022-09-08 09:20:10
 * @FilePath: \mye:\项目\qh-components\src\components\dialog\src\types.ts
 * @Description:
 *
 */
import { RuleItem } from './rule'
import { DefineComponent } from 'vue'

export interface DialogOptions {
  label: string
  prop: string
  type:
    | 'select'
    | 'cascader'
    | 'upload'
    | 'date'
    | 'year'
    | 'month'
    | 'week'
    | 'dates'
    | 'daterange'
    | 'monthrange'
    | 'yearrange'
    | 'datetime'
    | 'datetimerange'
    | 'time'
    | 'switch'
    | 'radio'
    | 'checkbox'
    | 'number'
    | 'textarea'
    | 'text'
    | 'password'
    | 'timerange'
  attrs?: any
  placeholder?: string
  maxlength?: string | number
  max?: number
  min?: number
  step?: number
  format?: string
  hide?: boolean
  append?: string
  appendIcon?: DefineComponent
  collapse?: boolean
  size?: string
  span?: number
  clearable?: boolean
  controls?: boolean
  controlsPosition?: 'right' | undefined
  autosize?: boolean | { minRows: number; maxRows: number }
  options?: {
    label: string
    value: string | number | boolean
    disabled?: boolean
    children?: DialogOptions['options']
  }[]
  shortcuts?: Array<{ text: string; value: Date | Function }>
  rules?: RuleItem[]
  props?: Object
  icon?: DefineComponent
  disabled?: boolean
  multiple?: boolean
  filterable?: boolean
  remote?: boolean
  rangeShortcuts?: DialogOptions['shortcuts']
  remoteMethod?: (val: any) => void
  width?: number | string
}
