import { mergeProps, unref, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$2, a as colorsBgLight, f as colorsText } from './colors-BYRMrYIa.mjs';
import { f as containerMaxW } from './server.mjs';

const _sfc_main$1 = {
  __name: "IconRounded",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: null
    },
    w: {
      type: String,
      default: "w-12"
    },
    h: {
      type: String,
      default: "h-12"
    },
    bg: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        path: __props.icon,
        w: __props.w,
        h: __props.h,
        size: "24",
        class: ["rounded-full", __props.bg ? unref(colorsBgLight)[__props.type] : [unref(colorsText)[__props.type], "bg-gray-50 dark:bg-slate-800"]]
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconRounded.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SectionMain",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["p-6", unref(containerMaxW)]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=SectionMain-oKKzVNTB.mjs.map
