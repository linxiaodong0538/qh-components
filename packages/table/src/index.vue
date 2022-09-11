<template>
  <div>
    <el-table
      v-loading="loading"
      :data="data"
      :max-height="maxHeight"
      :stripe="stripe"
      :border="border"
      :row-key="rowKey"
      :size="size"
      :height="height"
      header-cell-class-name="headerStyle"
      @selection-change="selectionChange"
      @select="select"
      @select-all="selectAll"
      @row-click="handleRowClick"
    >
      <el-table-column
        v-if="isSelectable"
        type="selection"
        width="55"
        :reserve-selection="reserveSelection"
      />
      <el-table-column
        v-if="isNmu"
        label="序号"
        :width="numWidth"
        align="center"
      >
        <template #default="scope">
          <span v-text="getIndex(scope.$index)"></span>
        </template>
      </el-table-column>

      <template v-for="item in options" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :align="item.align || 'center'"
          :width="item.width"
          :min-width="item.minWidth"
          :formatter="item.formatter"
        />
      </template>
      <slot />
    </el-table>
    <el-row justify="end">
      <el-pagination
        v-if="isPaging"
        background
        :layout="layout"
        v-model:total="pagination.all"
        :page-sizes="pageSizes"
        :page-count="pagination.count"
        v-model:page-size="pagination.size"
        v-model:current-page="pagination.index"
        :style="{ marginTop: '20px' }"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { Pager } from '../../dtos/pager'
import { reactive, PropType } from 'vue'
import { TableOptions } from './types'
const props = defineProps({
  isNmu: {
    type: Boolean,
    default: false,
  },
  numWidth: {
    type: String,
    default: '120',
  },
  // 缓存选中
  reserveSelection: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as PropType<{ [key: string]: any }[]>,
    required: true,
    default: [],
  },
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
    default: [],
  },
  rowKey: {
    type: [String, Function],
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
  },
  // 斑马格子
  stripe: {
    type: Boolean,
    default: false,
  },
  // 表格大小
  size: {
    type: String,
    default: 'default',
  },
  // 表格高度
  height: {
    type: [Number, String],
    default: undefined,
  },
  maxHeight: {
    type: [Number, String],
    default: undefined,
  },
  isPaging: {
    type: Boolean,
    default: true,
  },
  isSelectable: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: Object as PropType<Pager>,
    default: new Pager(),
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next',
  },
})

const emit = defineEmits([
  'page-change',
  'row-click',
  'selection-change',
  'select',
  'select-all',
])

const pageSizes = reactive([5, 10, 20, 50, 100])

const handleSizeChange = (size: number) => {
  emit('page-change')
}

const handleCurrentChange = () => {
  emit('page-change')
}
const handleRowClick = (row: any, column: any) => {
  emit('row-click', { row, column })
}
const selectionChange = (selection: any) => {
  emit('selection-change', selection)
}
const select = (selection: any, row: any) => {
  emit('select', selection, row)
}
const selectAll = (selection: any) => {
  emit('select-all', selection)
}
const getIndex = ($index: number) => {
  return (props.pagination.index - 1) * props.pagination.size + $index + 1
}
</script>
