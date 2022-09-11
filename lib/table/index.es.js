var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, reactive, resolveComponent, resolveDirective, openBlock, createElementBlock, withDirectives, createBlock, withCtx, createCommentVNode, createElementVNode, toDisplayString, Fragment, renderList, renderSlot, createVNode } from "vue";
class Pager {
  constructor({ index: index2 = 1, count = 0, all = 0, size = 10 } = {}) {
    __publicField(this, "index", 1);
    __publicField(this, "count", 0);
    __publicField(this, "all", 0);
    __publicField(this, "size", 10);
    this.index = index2;
    this.count = count;
    this.all = all;
    this.size = size;
  }
}
const _hoisted_1 = ["textContent"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    isNmu: {
      type: Boolean,
      default: false
    },
    numWidth: {
      type: String,
      default: "120"
    },
    reserveSelection: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      required: true,
      default: []
    },
    options: {
      type: Array,
      required: true,
      default: []
    },
    rowKey: {
      type: [String, Function],
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    height: {
      type: [Number, String],
      default: void 0
    },
    maxHeight: {
      type: [Number, String],
      default: void 0
    },
    isPaging: {
      type: Boolean,
      default: true
    },
    isSelectable: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Object,
      default: new Pager()
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next"
    }
  },
  emits: [
    "page-change",
    "row-click",
    "selection-change",
    "select",
    "select-all"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const pageSizes = reactive([5, 10, 20, 50, 100]);
    const handleSizeChange = (size) => {
      emit("page-change");
    };
    const handleCurrentChange = () => {
      emit("page-change");
    };
    const handleRowClick = (row, column) => {
      emit("row-click", { row, column });
    };
    const selectionChange = (selection) => {
      emit("selection-change", selection);
    };
    const select = (selection, row) => {
      emit("select", selection, row);
    };
    const selectAll = (selection) => {
      emit("select-all", selection);
    };
    const getIndex = ($index) => {
      return (props.pagination.index - 1) * props.pagination.size + $index + 1;
    };
    return (_ctx, _cache) => {
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_el_row = resolveComponent("el-row");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock("div", null, [
        withDirectives((openBlock(), createBlock(_component_el_table, {
          data: __props.data,
          "max-height": __props.maxHeight,
          stripe: __props.stripe,
          border: __props.border,
          "row-key": __props.rowKey,
          size: __props.size,
          height: __props.height,
          "header-cell-class-name": "headerStyle",
          onSelectionChange: selectionChange,
          onSelect: select,
          onSelectAll: selectAll,
          onRowClick: handleRowClick
        }, {
          default: withCtx(() => [
            __props.isSelectable ? (openBlock(), createBlock(_component_el_table_column, {
              key: 0,
              type: "selection",
              width: "55",
              "reserve-selection": __props.reserveSelection
            }, null, 8, ["reserve-selection"])) : createCommentVNode("", true),
            __props.isNmu ? (openBlock(), createBlock(_component_el_table_column, {
              key: 1,
              label: "\u5E8F\u53F7",
              width: __props.numWidth,
              align: "center"
            }, {
              default: withCtx((scope) => [
                createElementVNode("span", {
                  textContent: toDisplayString(getIndex(scope.$index))
                }, null, 8, _hoisted_1)
              ]),
              _: 1
            }, 8, ["width"])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item) => {
              return openBlock(), createBlock(_component_el_table_column, {
                key: item.prop,
                prop: item.prop,
                label: item.label,
                align: item.align || "center",
                width: item.width,
                "min-width": item.minWidth,
                formatter: item.formatter
              }, null, 8, ["prop", "label", "align", "width", "min-width", "formatter"]);
            }), 128)),
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["data", "max-height", "stripe", "border", "row-key", "size", "height"])), [
          [_directive_loading, __props.loading]
        ]),
        createVNode(_component_el_row, { justify: "end" }, {
          default: withCtx(() => [
            __props.isPaging ? (openBlock(), createBlock(_component_el_pagination, {
              key: 0,
              background: "",
              layout: __props.layout,
              total: __props.pagination.all,
              "onUpdate:total": _cache[0] || (_cache[0] = ($event) => __props.pagination.all = $event),
              "page-sizes": pageSizes,
              "page-count": __props.pagination.count,
              "page-size": __props.pagination.size,
              "onUpdate:page-size": _cache[1] || (_cache[1] = ($event) => __props.pagination.size = $event),
              "current-page": __props.pagination.index,
              "onUpdate:current-page": _cache[2] || (_cache[2] = ($event) => __props.pagination.index = $event),
              style: { marginTop: "20px" },
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }, null, 8, ["layout", "total", "page-sizes", "page-count", "page-size", "current-page"])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var index = {
  install(app) {
    app.component("qh-table", _sfc_main);
  }
};
export { index as default };
