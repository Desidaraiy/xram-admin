import { ref, watch, createVNode, resolveDynamicComponent, mergeProps, withCtx, withDirectives, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderVNode, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
const _sfc_main = {
  __name: "TableCheckboxCell",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "td"
    }
  },
  emits: ["checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const checked = ref(false);
    watch(checked, (newVal) => {
      emit("checked", newVal);
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.type), mergeProps({ class: "lg:w-1" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<label class="checkbox"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(checked.value) ? ssrLooseContain(checked.value, null) : checked.value) ? " checked" : ""} type="checkbox"${_scopeId}><span class="check"${_scopeId}></span></label>`);
          } else {
            return [
              createVNode("label", { class: "checkbox" }, [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => checked.value = $event,
                  type: "checkbox"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelCheckbox, checked.value]
                ]),
                createVNode("span", { class: "check" })
              ])
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableCheckboxCell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TableCheckboxCell-DxFE6wzt.js.map
