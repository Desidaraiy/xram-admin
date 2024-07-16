import { mergeProps, unref, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlotInner } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { e as useStyleStore } from './server.mjs';

const _sfc_main = {
  __name: "OverlayLayer",
  __ssrInlineRender: true,
  props: {
    zIndex: {
      type: String,
      default: "z-50"
    },
    type: {
      type: String,
      default: "flex"
    }
  },
  emits: ["overlay-click"],
  setup(__props, { emit: __emit }) {
    const styleStore = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[__props.type, __props.zIndex], "items-center flex-col justify-center overflow-hidden fixed inset-0"]
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore).overlayStyle, "absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700"])}"></div>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OverlayLayer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=OverlayLayer-Ca6LWwyv.mjs.map
