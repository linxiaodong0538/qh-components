<!--
 * @Author: linx linx@skeqi.com
 * @Date: 2022-09-06 08:14:22
 * @LastEditors: linx linx@skeqi.com
 * @LastEditTime: 2022-09-08 14:29:01
 * @FilePath: \mye:\项目\qh-components\packages\form\src\index.vue
 * @Description: 
 * 
-->
<template>
  <el-form
    :inline="inline"
    ref="xform"
    :model="form"
    :status-icon="showStatusIcon"
    :rules="rules"
    label-position="right"
    :label-width="labelWidth || undefined"
    :size="size || 'default'"
    class="x-form"
  >
    <el-row>
      <el-form-item
        :label="opt.label"
        :prop="opt.prop"
        v-for="opt in options"
        :key="opt.prop"
        style="margin-right: 20px"
      >
        <el-date-picker
          v-if="['date', 'year', 'month', 'week', 'dates'].includes(opt.type)"
          v-model="form[opt.prop]"
          :type="opt.type || 'date'"
          :placeholder="opt.placeholder || '选择日期'"
          :shortcuts="opt.shortcuts || shortcuts"
          :format="opt.format || 'YYYY-MM-DD'"
          :value-format="opt.format || 'YYYY-MM-DD'"
          :clearable="opt.clearable || true"
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
          @change="change({ category: opt.prop, value: form[opt.prop] })"
        />
        <el-date-picker
          v-else-if="
            ['daterange', 'monthrange', 'yearrange'].includes(opt.type)
          "
          v-model="form[opt.prop]"
          :type="opt.type || 'daterange'"
          unlink-panels
          range-separator="-"
          :start-placeholder="opt.placeholder ? opt.placeholder[0] : '开始日期'"
          :end-placeholder="opt.placeholder ? opt.placeholder[1] : '结束日期'"
          :format="opt.format || 'YYYY-MM-DD'"
          :value-format="opt.format || 'YYYY-MM-DD'"
          :shortcuts="opt.rangeShortcuts || rangeShortcuts"
          :clearable="opt.clearable || false"
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
        />
        <el-date-picker
          v-else-if="opt.type === 'datetime'"
          v-model="form[opt.prop]"
          type="datetime"
          :format="opt.format || 'YYYY-MM-DD HH:mm:ss'"
          :value-format="opt.format || 'YYYY-MM-DD HH:mm:ss'"
          :clearable="opt.clearable || false"
          :placeholder="opt.placeholder || '选择日期时间'"
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
        />
        
        <el-date-picker
          v-else-if="opt.type === 'datetimerange'"
          v-model="form[opt.prop]"
          type="datetimerange"
          :shortcuts="opt.rangeShortcuts || rangeShortcuts"
          :format="opt.format || 'YYYY-MM-DD HH:mm:ss'"
          :value-format="opt.format || 'YYYY-MM-DD HH:mm:ss'"
          :clearable="opt.clearable || true"
          range-separator="-"
          :start-placeholder="
            opt.placeholder ? opt.placeholder[0] : '开始日期时间'
          "
          :end-placeholder="
            opt.placeholder ? opt.placeholder[1] : '结束日期时间'
          "
          style="width: 340px"
        />

        <el-time-picker
          v-else-if="opt.type === 'timerange'"
          v-model="form[opt.prop]"
          is-range
          placeholder="选择时间"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :format="opt.format || 'HH:mm:ss'"
          :value-format="opt.format || 'HH:mm:ss'"
          :clearable="opt.clearable || true"
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
        />

        <el-input-number
          v-else-if="opt.type === 'number'"
          v-model="form[opt.prop]"
          controls-position="right"
          :controls="false"
          :placeholder="opt.placeholder || '请输入'"
          clearable
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
        >
        </el-input-number>

        <el-select
          v-else-if="opt.type === 'select'"
          v-model="form[opt.prop]"
          :multiple="opt.multiple || false"
          collapse-tags
          :remote="opt.remote || false"
          :remote-method="opt.remoteMethod"
          :placeholder="opt.placeholder || '请选择'"
          :clearable="opt.clearable !== undefined ? opt.clearable : undefined"
          :filterable="opt.filterable || true"
          :disabled="opt.disabled"
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
          @change="
            change({
              category: opt.prop,
              value: form[opt.prop],
              data: opt.options!.find(x => x.value === form[opt.prop]),
            })
          "
        >
          <el-option
            v-for="(item, index) in opt.options"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-cascader
          v-else-if="opt.type === 'cascader'"
          v-model="form[opt.prop]"
          :options="opt.options"
          :props="opt.props"
          :show-all-levels="false"
          :clearable="opt.clearable"
          :placeholder="opt.placeholder"
          @change="
            change({
              category: opt.prop,
              value: form[opt.prop],
              data: opt.options!.find(x => x.value === form[opt.prop]),
            })
          "
        />
        <el-input
          v-else-if="opt.type === 'text'"
          v-model="form[opt.prop]"
          :placeholder="opt.placeholder || '请输入'"
          :clearable="opt.clearable || true"
          :disabled="opt.disabled"
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
          @change="change({ category: opt.prop, value: form[opt.prop] })"
        ></el-input>
        <el-input
          v-else
          v-model="form[opt.prop]"
          autocomplete="off"
          :placeholder="opt.placeholder || '请输入'"
          :type="opt.type === 'textarea' ? 'textarea' : undefined"
          :clearable="opt.clearable !== undefined ? opt.clearable : undefined"
          :disabled="opt.disabled"
          :style="opt.width ? `width:${opt.width}px` : `width: ${240}px`"
          @change="change({ category: opt.prop, value: form[opt.prop] })"
        >
        </el-input>
      </el-form-item>
      <slot />
      <el-form-item>
        <el-button
          v-if="hasSearch"
          type="primary"
          class="button"
          size="default"
          :icon="Search"
          @click.prevent="submitForm"
          >搜索</el-button
        >
        <el-button
          v-if="hasReset"
          type="primary"
          class="button"
          :icon="RefreshLeft"
          size="default"
          plain
          @click.prevent="resetForm"
          >重置</el-button
        >
        <slot name="button" />
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import {
  ref,
  PropType,
} from 'vue'
import { RefreshLeft, Search } from '@element-plus/icons-vue'
import { FormOptions } from './types'
defineProps({
  inline: {
    type: Boolean,
  },
  showStatusIcon: {
    type: Boolean,
    default: false,
  },
  form: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  size: {
    type: String,
    default: 'default',
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  rules: {
    type: Object,
    default: () => {
      return {}
    },
  },
  labelWidth: {
    type: String,
    default: '',
  },
  hasSearch: {
    type: Boolean,
    default: true,
  },
  hasReset: {
    type: Boolean,
    default: true,
  }
})

const emit = defineEmits(['callback', 'change', 'reset'])

const xform = ref<any>(null)

const shortcuts: FormOptions['shortcuts'] = [
  {
    text: '今日',
    value: new Date(),
  },
  {
    text: '昨日',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const rangeShortcuts: FormOptions['shortcuts'] = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

const submitForm = () => {
  xform.value.validate((valid: Boolean) => {
    if (valid) {
      emit('callback')
    }
  })
}
const change = (parameters: any) => {
  emit(`change`, parameters)
}

const resetForm = () => {
  xform.value.resetFields()
  emit(`reset`)
}
</script>
<style>
.x-form {
  margin-bottom: 20px;
}
</style>
