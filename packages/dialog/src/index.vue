<!--
 * @Author: lx
 * @Date: 2022-09-04 14:07:40
 * @LastEditors: @zhuyadexiatian 734127061@qq.com
 * @LastEditTime: 2022-09-10 21:52:00
 * @FilePath: \smart_cover_mobile_managere:\学习\qh-components\packages\dialog\src\index.vue
 * @Description: 
 * 
-->

<template>
  <el-dialog
    :top="top"
    :title="title"
    :model-value="visible"
    :width="width"
    :fullscreen="fullscreen"
    :close-on-click-modal="false"
    :close-on-press-escape="true"
    :show-close="showClose"
    :append-to-body="appendToBody"
    :modal-append-to-body="modalAppendToBody"
    :destroy-on-close="destroyOnClose || false"
    @close="cancel"
  >
    <el-form
      ref="myForm"
      :model="form"
      :rules="rules"
      :inline="inline || false"
      :label-width="labelWidth"
      v-loading="loading"
      @submit.native.prevent
      v-bind="$attrs"
    >
      <el-row :gutter="20">
        <template v-for="(opt, idx) in options" :key="'col' + idx">
          <el-col v-if="!opt.hide" :span="opt.span || 12">
            <el-form-item
              :label="opt.label"
              :prop="opt.prop"
              :size="opt.size || 'default'"
              :rules="opt.rules"
            >
              <el-select
                v-if="opt.type === 'select'"
                v-model="form[opt.prop]"
                :multiple="opt.multiple || false"
                :collapse-tags="opt.collapse"
                :placeholder="opt.placeholder"
                :disabled="opt.disabled"
                :filterable="opt.filterable || true"
                :remote="opt.remote || false"
                :remote-method="opt.remoteMethod"
                :clearable="opt.clearable || true"
                @change="
                  change({
                    category: opt.prop,
                    value: form[opt.prop],
                    data: opt.options!.find((x) => x.value === form[opt.prop]),
                  })
                "
              >
                <el-option
                  v-for="item in opt.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled || undefined"
                />
              </el-select>

              <el-cascader
                v-else-if="opt.type === 'cascader'"
                v-model="form[opt.prop]"
                :options="opt.options"
                :disabled="opt.disabled"
                :clearable="opt.clearable === undefined ? true : opt.clearable"
                :props="opt.props"
                @change="
                  change({
                    category: opt.prop,
                    value: form[opt.prop],
                    data: cascaderMapping({
                      data: opt.options,
                      value: form[opt.prop],
                    }),
                  })
                "
              />

              <el-upload
                v-else-if="opt.type === 'upload'"
                class="avatar-uploader"
                :action="opt.attrs?.action"
                :show-file-list="opt.attrs.showFileList || false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :headers="opt.attrs?.headers"
                :data="opt.attrs?.formData"
                :disabled="opt.disabled"
                :list-type="opt.attrs?.listType"
                :limit="opt.attrs?.limit || 1"
                :file-list="opt.attrs?.fileList"
                accept="image/*"
                ref="uploadFileList"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>

              <el-date-picker
                v-if="
                  ['date', 'year', 'month', 'week', 'dates'].includes(opt.type)
                "
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
                :start-placeholder="
                  opt.placeholder ? opt.placeholder[0] : '开始日期'
                "
                :end-placeholder="
                  opt.placeholder ? opt.placeholder[1] : '结束日期'
                "
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
                :clearable="opt.clearable || false"
                :placeholder="opt.placeholder || '选择日期时间'"
                style="width: 100%"
              />

              <el-date-picker
                v-else-if="opt.type === 'datetimerange'"
                v-model="form[opt.prop]"
                type="datetimerange"
                :picker-options="opt.rangeShortcuts || rangeShortcuts"
                :format="opt.format || 'YYYY-MM-DD HH:mm:ss'"
                :clearable="opt.clearable || false"
                range-separator="-"
                :start-placeholder="
                  opt.placeholder ? opt.placeholder[0] : '开始日期时间'
                "
                :end-placeholder="
                  opt.placeholder ? opt.placeholder[1] : '结束日期时间'
                "
                style="width: 100%"
              />

              <el-time-picker
                v-else-if="opt.type === 'time'"
                v-model="form[opt.prop]"
                :picker-options="{
                  selectableRange: '00:00:00 - 23:59:59',
                }"
                :value-format="opt.format || 'HH:mm:ss'"
                placeholder="请选择时间"
              ></el-time-picker>
              <el-time-picker
                v-else-if="opt.type === 'timerange'"
                v-model="form[opt.prop]"
                is-range
                range-separator="-"
                :start-placeholder="
                  opt.placeholder ? opt.placeholder[0] : '开始时间'
                "
                :end-placeholder="
                  opt.placeholder ? opt.placeholder[1] : '开始时间'
                "
                :format="opt.format || 'HH:mm:ss'"
                :value-format="opt.format || 'HH:mm:ss'"
                :picker-options="{
                  start: '00:00',
                  step: '01:00',
                  end: '24:00',
                }"
                :clearable="opt.clearable || false"
                style="width: 100%"
              />

              <el-switch
                v-else-if="opt.type === 'switch'"
                v-model="form[opt.prop]"
                :disabled="opt.disabled"
              />

              <el-radio-group
                v-else-if="opt.type === 'radio'"
                v-model="form[opt.prop]"
                :disabled="opt.disabled"
              >
                <el-radio
                  v-for="item in opt.options"
                  :key="item.value"
                  :label="item.value"
                  :disabled="item.disabled || undefined"
                >
                  {{ item.label }}
                </el-radio>
              </el-radio-group>

              <el-checkbox-group
                v-else-if="opt.type === 'checkbox'"
                v-model="form[opt.prop]"
              >
                <el-checkbox
                  v-for="item in opt.options"
                  :key="item.value"
                  :label="item.value"
                  >{{ item.label }}
                </el-checkbox>
              </el-checkbox-group>

              <el-input-number
                v-else-if="opt.type === 'number'"
                v-model="form[opt.prop]"
                :disabled="opt.disabled"
                :controls="opt.controls || false"
                :controls-position="opt.controlsPosition"
                :min="opt.min"
                :max="opt.max"
                :step="opt.step || 1"
                @focus="
                  focus({
                    category: opt.prop,
                    value: form[opt.prop],
                  })
                "
              />

              <el-input
                v-else-if="
                  ['textarea', 'text', 'email', 'password'].includes(opt.type)
                "
                v-model="form[opt.prop]"
                :suffix-icon="opt.icon"
                :type="opt.type"
                :show-password="opt.type == 'password'"
                :autosize="opt.autosize || undefined"
                :placeholder="opt.placeholder || undefined"
                :disabled="opt.disabled"
                :maxlength="opt.maxlength || 20"
                :clearable="opt.clearable || true"
                @focus="
                  focus({
                    category: opt.prop,
                    value: form[opt.prop],
                  })
                "
                @input="
                  trigger({
                    category: opt.prop,
                  })
                "
              >
                <template v-if="opt.append" #append> {{ opt.append }}</template>
                <template v-if="opt.appendIcon" #append>
                  <el-button :icon="opt.appendIcon" />
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <template #footer>
      <div v-if="isShowBtn" class="dialog-footer">
        <el-button type="primary" size="default" @click="submitForm"
          >确 定</el-button
        >
        <el-button size="default" @click="cancel">取 消</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import "@element-plus/icons-vue";
import { ref, PropType, computed, onMounted, watch, nextTick } from "vue";
import { ElMessage, ElUpload } from "element-plus";
import type { UploadProps, FormRules, FormInstance } from "element-plus";
import { DialogOptions } from "./types";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  visible: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  appendToBody: {
    type: Boolean,
    default: false,
  },
  modalAppendToBody: {
    type: Boolean,
    default: false,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  form: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  options: {
    type: Array as PropType<DialogOptions[]>,
    required: true,
    default: () => [],
  },
  rules: {
    type: Object as PropType<FormRules>,
    default: () => ({}),
  },
  isShowBtn: {
    type: Boolean,
    default: true,
  },
  labelWidth: {
    type: String,
    default: "auto",
  },
  width: {
    type: String,
    default: "720px",
  },
  top: {
    type: String,
    default: "15vh",
  },
});

const emit = defineEmits([
  "input",
  "change",
  "callback",
  "cancel",
  "focus",
  "update:visible",
  "upload-success",
]);
const myForm = ref<any>(null);

const shortcuts: DialogOptions["shortcuts"] = [
  {
    text: "今日",
    value: new Date(),
  },
  {
    text: "昨日",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "一周前",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

const rangeShortcuts: DialogOptions["shortcuts"] = [
  {
    text: "最近一周",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "最近一个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "最近三个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

const submitForm = () => {
  myForm.value.validate((valid: boolean) => {
    if (valid) {
      myForm.value.clearValidate();
      emit("callback");
    }
  });
};

const trigger = ({ category }: any) => {
  emit("input", { category, data: props.form[category] });
};
const resetForm = () => {
  nextTick(() => {
    myForm.value.resetFields();
  });
};

const uploadFileList = ref();

const cancel = () => {
  resetForm();
  emit("cancel");
  emit("update:visible", false);
};
const change = (params = {}) => {
  emit(`change`, params);
};
const focus = (params = {}) => {
  console.log("params", params);
  emit(`focus`, params);
};

const imageUrl = ref("");
const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile,
  uploadFiles
) => {
  imageUrl.value = window.URL.createObjectURL(new Blob([uploadFile.raw!]));
  emit("upload-success", {
    response,
    uploadFile,
    uploadFiles,
  });
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  const isImage = rawFile.type.includes("image/");
  const isLt2M = rawFile.size / 1024 / 1024 < 2;

  if (!isImage) {
    ElMessage.error("只接受图片格式!");
  }
  if (!isLt2M) {
    ElMessage.error("上传头像图片大小不能超过 2MB!");
  }
  return isImage && isLt2M;
};
const cascaderMapping = ({ data, value }: any = {}): any => {
  for (const item of data) {
    if (item.value === value) {
      return item;
    }
    if (item.children && item.children.length) {
      return cascaderMapping({ data: item.children, value });
    }
  }
};

defineExpose({ myForm });
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: red;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-border-color);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
