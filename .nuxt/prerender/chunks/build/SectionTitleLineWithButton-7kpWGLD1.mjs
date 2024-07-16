import { computed, useSlots, mergeProps, unref, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiCog } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$2 } from './colors-BYRMrYIa.mjs';
import { a as _sfc_main$1$1 } from './CardBox-SmAHmX3l.mjs';
import { a as _sfc_main$1 } from './SectionMain-oKKzVNTB.mjs';

const _sfc_main = {
  __name: "SectionTitleLineWithButton",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    main: Boolean,
    back: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const isBackArrow = computed(() => props.back === true ? true : false);
    const hasSlot = computed(() => useSlots().default);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [{ "pt-6": !__props.main }, "mb-6 flex items-center justify-between"]
      }, _attrs))}><div class="flex items-center justify-start">`);
      if (__props.icon && __props.main) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          type: "light",
          class: "mr-3",
          onClick: ($event) => isBackArrow.value ? _ctx.$router.go(-1) : null,
          bg: ""
        }, null, _parent));
      } else if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$2, {
          path: __props.icon,
          class: "mr-2",
          size: "20"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="${ssrRenderClass([__props.main ? "text-3xl" : "text-2xl", "leading-tight"])}">${ssrInterpolate(__props.title)}</h1></div>`);
      if (hasSlot.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(ssrRenderComponent(_sfc_main$1$1, {
          icon: unref(mdiCog),
          small: ""
        }, null, _parent));
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionTitleLineWithButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SectionTitleLineWithButton-7kpWGLD1.mjs.map
