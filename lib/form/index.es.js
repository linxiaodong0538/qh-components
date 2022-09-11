import { openBlock, createElementBlock, createElementVNode, defineComponent, ref, resolveComponent, createBlock, withCtx, createVNode, Fragment, renderList, normalizeStyle, renderSlot, unref, withModifiers, createCommentVNode, createTextVNode } from "vue";
/*! Element Plus Icons Vue v2.0.9 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var _sfc_main215 = {
  name: "RefreshLeft"
}, _hoisted_1215 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2215 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), _hoisted_3214 = [
  _hoisted_2215
];
function _sfc_render215(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1215, _hoisted_3214);
}
var refresh_left_default = /* @__PURE__ */ export_helper_default(_sfc_main215, [["render", _sfc_render215], ["__file", "refresh-left.vue"]]);
var _sfc_main225 = {
  name: "Search"
}, _hoisted_1225 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2225 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), _hoisted_3224 = [
  _hoisted_2225
];
function _sfc_render225(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1225, _hoisted_3224);
}
var search_default = /* @__PURE__ */ export_helper_default(_sfc_main225, [["render", _sfc_render225], ["__file", "search.vue"]]);
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u641C\u7D22");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u91CD\u7F6E");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    inline: {
      type: Boolean
    },
    showStatusIcon: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      required: true,
      default: () => ({})
    },
    size: {
      type: String,
      default: "default"
    },
    options: {
      type: Array,
      required: true
    },
    rules: {
      type: Object,
      default: () => {
        return {};
      }
    },
    labelWidth: {
      type: String,
      default: ""
    },
    hasSearch: {
      type: Boolean,
      default: true
    },
    hasReset: {
      type: Boolean,
      default: true
    }
  },
  emits: ["callback", "change", "reset"],
  setup(__props, { emit }) {
    const xform = ref(null);
    const shortcuts = [
      {
        text: "\u4ECA\u65E5",
        value: new Date()
      },
      {
        text: "\u6628\u65E5",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1e3 * 24);
          return date;
        }
      },
      {
        text: "\u4E00\u5468\u524D",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1e3 * 24 * 7);
          return date;
        }
      }
    ];
    const rangeShortcuts = [
      {
        text: "\u6700\u8FD1\u4E00\u5468",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 7);
          return [start, end];
        }
      },
      {
        text: "\u6700\u8FD1\u4E00\u4E2A\u6708",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 30);
          return [start, end];
        }
      },
      {
        text: "\u6700\u8FD1\u4E09\u4E2A\u6708",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 90);
          return [start, end];
        }
      }
    ];
    const submitForm = () => {
      xform.value.validate((valid) => {
        if (valid) {
          emit("callback");
        }
      });
    };
    const change = (parameters) => {
      emit(`change`, parameters);
    };
    const resetForm = () => {
      xform.value.resetFields();
      emit(`reset`);
    };
    return (_ctx, _cache) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_time_picker = resolveComponent("el-time-picker");
      const _component_el_input_number = resolveComponent("el-input-number");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_cascader = resolveComponent("el-cascader");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(_component_el_form, {
        inline: __props.inline,
        ref_key: "xform",
        ref: xform,
        model: __props.form,
        "status-icon": __props.showStatusIcon,
        rules: __props.rules,
        "label-position": "right",
        "label-width": __props.labelWidth || void 0,
        size: __props.size || "default",
        class: "x-form"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_row, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (opt) => {
                return openBlock(), createBlock(_component_el_form_item, {
                  label: opt.label,
                  prop: opt.prop,
                  key: opt.prop,
                  style: { "margin-right": "20px" }
                }, {
                  default: withCtx(() => [
                    ["date", "year", "month", "week", "dates"].includes(opt.type) ? (openBlock(), createBlock(_component_el_date_picker, {
                      key: 0,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      type: opt.type || "date",
                      placeholder: opt.placeholder || "\u9009\u62E9\u65E5\u671F",
                      shortcuts: opt.shortcuts || shortcuts,
                      format: opt.format || "YYYY-MM-DD",
                      "value-format": opt.format || "YYYY-MM-DD",
                      clearable: opt.clearable || true,
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`),
                      onChange: ($event) => change({ category: opt.prop, value: __props.form[opt.prop] })
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder", "shortcuts", "format", "value-format", "clearable", "style", "onChange"])) : ["daterange", "monthrange", "yearrange"].includes(opt.type) ? (openBlock(), createBlock(_component_el_date_picker, {
                      key: 1,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      type: opt.type || "daterange",
                      "unlink-panels": "",
                      "range-separator": "-",
                      "start-placeholder": opt.placeholder ? opt.placeholder[0] : "\u5F00\u59CB\u65E5\u671F",
                      "end-placeholder": opt.placeholder ? opt.placeholder[1] : "\u7ED3\u675F\u65E5\u671F",
                      format: opt.format || "YYYY-MM-DD",
                      "value-format": opt.format || "YYYY-MM-DD",
                      shortcuts: opt.rangeShortcuts || rangeShortcuts,
                      clearable: opt.clearable || false,
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "start-placeholder", "end-placeholder", "format", "value-format", "shortcuts", "clearable", "style"])) : opt.type === "datetime" ? (openBlock(), createBlock(_component_el_date_picker, {
                      key: 2,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      type: "datetime",
                      format: opt.format || "YYYY-MM-DD HH:mm:ss",
                      "value-format": opt.format || "YYYY-MM-DD HH:mm:ss",
                      clearable: opt.clearable || false,
                      placeholder: opt.placeholder || "\u9009\u62E9\u65E5\u671F\u65F6\u95F4",
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "value-format", "clearable", "placeholder", "style"])) : opt.type === "datetimerange" ? (openBlock(), createBlock(_component_el_date_picker, {
                      key: 3,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      type: "datetimerange",
                      shortcuts: opt.rangeShortcuts || rangeShortcuts,
                      format: opt.format || "YYYY-MM-DD HH:mm:ss",
                      "value-format": opt.format || "YYYY-MM-DD HH:mm:ss",
                      clearable: opt.clearable || true,
                      "range-separator": "-",
                      "start-placeholder": opt.placeholder ? opt.placeholder[0] : "\u5F00\u59CB\u65E5\u671F\u65F6\u95F4",
                      "end-placeholder": opt.placeholder ? opt.placeholder[1] : "\u7ED3\u675F\u65E5\u671F\u65F6\u95F4",
                      style: { "width": "340px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "shortcuts", "format", "value-format", "clearable", "start-placeholder", "end-placeholder"])) : opt.type === "timerange" ? (openBlock(), createBlock(_component_el_time_picker, {
                      key: 4,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      "is-range": "",
                      placeholder: "\u9009\u62E9\u65F6\u95F4",
                      "start-placeholder": "\u5F00\u59CB\u65F6\u95F4",
                      "end-placeholder": "\u7ED3\u675F\u65F6\u95F4",
                      format: opt.format || "HH:mm:ss",
                      "value-format": opt.format || "HH:mm:ss",
                      clearable: opt.clearable || true,
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "value-format", "clearable", "style"])) : opt.type === "number" ? (openBlock(), createBlock(_component_el_input_number, {
                      key: 5,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      "controls-position": "right",
                      controls: false,
                      placeholder: opt.placeholder || "\u8BF7\u8F93\u5165",
                      clearable: "",
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "style"])) : opt.type === "select" ? (openBlock(), createBlock(_component_el_select, {
                      key: 6,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      multiple: opt.multiple || false,
                      "collapse-tags": "",
                      remote: opt.remote || false,
                      "remote-method": opt.remoteMethod,
                      placeholder: opt.placeholder || "\u8BF7\u9009\u62E9",
                      clearable: opt.clearable !== void 0 ? opt.clearable : void 0,
                      filterable: opt.filterable || true,
                      disabled: opt.disabled,
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`),
                      onChange: ($event) => change({
                        category: opt.prop,
                        value: __props.form[opt.prop],
                        data: opt.options.find((x) => x.value === __props.form[opt.prop])
                      })
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(opt.options, (item, index2) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: index2,
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "multiple", "remote", "remote-method", "placeholder", "clearable", "filterable", "disabled", "style", "onChange"])) : opt.type === "cascader" ? (openBlock(), createBlock(_component_el_cascader, {
                      key: 7,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      options: opt.options,
                      props: opt.props,
                      "show-all-levels": false,
                      clearable: opt.clearable,
                      placeholder: opt.placeholder,
                      onChange: ($event) => change({
                        category: opt.prop,
                        value: __props.form[opt.prop],
                        data: opt.options.find((x) => x.value === __props.form[opt.prop])
                      })
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "clearable", "placeholder", "onChange"])) : opt.type === "text" ? (openBlock(), createBlock(_component_el_input, {
                      key: 8,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      placeholder: opt.placeholder || "\u8BF7\u8F93\u5165",
                      clearable: opt.clearable || true,
                      disabled: opt.disabled,
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`),
                      onChange: ($event) => change({ category: opt.prop, value: __props.form[opt.prop] })
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "clearable", "disabled", "style", "onChange"])) : (openBlock(), createBlock(_component_el_input, {
                      key: 9,
                      modelValue: __props.form[opt.prop],
                      "onUpdate:modelValue": ($event) => __props.form[opt.prop] = $event,
                      autocomplete: "off",
                      placeholder: opt.placeholder || "\u8BF7\u8F93\u5165",
                      type: opt.type === "textarea" ? "textarea" : void 0,
                      clearable: opt.clearable !== void 0 ? opt.clearable : void 0,
                      disabled: opt.disabled,
                      style: normalizeStyle(opt.width ? `width:${opt.width}px` : `width: ${240}px`),
                      onChange: ($event) => change({ category: opt.prop, value: __props.form[opt.prop] })
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "type", "clearable", "disabled", "style", "onChange"]))
                  ]),
                  _: 2
                }, 1032, ["label", "prop"]);
              }), 128)),
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  __props.hasSearch ? (openBlock(), createBlock(_component_el_button, {
                    key: 0,
                    type: "primary",
                    class: "button",
                    size: "default",
                    icon: unref(search_default),
                    onClick: withModifiers(submitForm, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 1
                  }, 8, ["icon", "onClick"])) : createCommentVNode("", true),
                  __props.hasReset ? (openBlock(), createBlock(_component_el_button, {
                    key: 1,
                    type: "primary",
                    class: "button",
                    icon: unref(refresh_left_default),
                    size: "default",
                    plain: "",
                    onClick: withModifiers(resetForm, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      _hoisted_2
                    ]),
                    _: 1
                  }, 8, ["icon", "onClick"])) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "button")
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["inline", "model", "status-icon", "rules", "label-width", "size"]);
    };
  }
});
var index = {
  install(app) {
    app.component("qh-form", _sfc_main);
  }
};
export { index as default };
