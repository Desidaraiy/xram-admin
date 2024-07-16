import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { e as useStyleStore } from "../server.mjs";
import { d as gradientBgDark, e as gradientBgGreenIndigo, g as gradientBgPinkRed, b as gradientBgPurplePink } from "./colors-BYRMrYIa.js";
const _sfc_main = {
  __name: "SectionFullScreen",
  __ssrInlineRender: true,
  props: {
    bg: {
      type: String,
      required: true,
      validator: (value) => ["purplePink", "pinkRed", "greenIndigo"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const colorClass = computed(() => {
      if (useStyleStore().darkMode) {
        return gradientBgDark;
      }
      switch (props.bg) {
        case "purplePink":
          return gradientBgPurplePink;
        case "pinkRed":
          return gradientBgPinkRed;
        case "greenIndigo":
          return gradientBgGreenIndigo;
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex min-h-screen items-center justify-center", colorClass.value]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { cardClass: "w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionFullScreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=SectionFullScreen-BkBF3oy_.js.map
