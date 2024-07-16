import { computed, mergeProps, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "BaseIcon",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      required: true
    },
    w: {
      type: String,
      default: "w-6"
    },
    h: {
      type: String,
      default: "h-6"
    },
    size: {
      type: [String, Number],
      default: 16
    }
  },
  setup(__props) {
    const props = __props;
    const spanClass = computed(() => `inline-flex justify-center items-center ${props.w} ${props.h}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: spanClass.value }, _attrs))}><svg viewBox="0 0 24 24"${ssrRenderAttr("width", __props.size)}${ssrRenderAttr("height", __props.size)} class="inline-block"><path fill="currentColor"${ssrRenderAttr("d", __props.path)}></path></svg>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gradientBgBase = "bg-gradient-to-tr";
const gradientBgPurplePink = `${gradientBgBase} from-purple-400 via-pink-500 to-red-500`;
const gradientBgDark = `${gradientBgBase} from-slate-700 via-slate-900 to-slate-800`;
const gradientBgPinkRed = `${gradientBgBase} from-pink-400 via-red-500 to-yellow-500`;
const gradientBgGreenIndigo = `${gradientBgBase} from-emerald-500 via-emerald-300 to-indigo-500`;
const colorsBgLight = {
  white: "bg-white text-black",
  light: "bg-white text-black dark:bg-slate-900/70 dark:text-white",
  contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
  success: "bg-emerald-500 border-emerald-500 text-white",
  danger: "bg-red-500 border-red-500 text-white",
  warning: "bg-yellow-500 border-yellow-500 text-white",
  info: "bg-blue-500 border-blue-500 text-white"
};
const colorsText = {
  white: "text-black dark:text-slate-100",
  light: "text-gray-700 dark:text-slate-400",
  contrast: "dark:text-white",
  success: "text-emerald-500",
  danger: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500"
};
const colorsOutline = {
  white: [colorsText.white, "border-gray-100"],
  light: [colorsText.light, "border-gray-100"],
  contrast: [colorsText.contrast, "border-gray-900 dark:border-slate-100"],
  success: [colorsText.success, "border-emerald-500"],
  danger: [colorsText.danger, "border-red-500"],
  warning: [colorsText.warning, "border-yellow-500"],
  info: [colorsText.info, "border-blue-500"]
};
const getButtonColor = (color, isOutlined, hasHover) => {
  const colors = {
    bg: {
      white: "bg-white text-black",
      contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
      light: "bg-gray-50 text-black",
      success: "bg-emerald-600 dark:bg-emerald-500 text-white",
      danger: "bg-red-600 dark:bg-red-500 text-white",
      warning: "bg-yellow-600 dark:bg-yellow-500 text-white",
      info: "bg-blue-600 dark:bg-blue-500 text-white"
    },
    bgHover: {
      white: "hover:bg-gray-50",
      contrast: "hover:bg-gray-900 hover:dark:bg-slate-100",
      light: "hover:bg-gray-200",
      success: "hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",
      danger: "hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",
      warning: "hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",
      info: "hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"
    },
    borders: {
      white: "border-gray-100",
      contrast: "border-gray-900 dark:border-slate-100",
      light: "border-gray-100 dark:border-slate-700",
      success: "border-emerald-600 dark:border-emerald-500",
      danger: "border-red-600 dark:border-red-500",
      warning: "border-yellow-600 dark:border-yellow-500",
      info: "border-blue-600 dark:border-blue-500"
    },
    text: {
      white: "text-black dark:text-slate-100",
      contrast: "dark:text-slate-100",
      light: "text-gray-700 dark:text-slate-400",
      success: "text-emerald-600 dark:text-emerald-500",
      danger: "text-red-600 dark:text-red-500",
      warning: "text-yellow-600 dark:text-yellow-500",
      info: "text-blue-600 dark:text-blue-500"
    },
    outlineHover: {
      white: "hover:bg-gray-100 hover:text-gray-900 dark:hover:text-slate-900",
      contrast: "hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",
      light: "hover:bg-gray-100 hover:text-gray-900 dark:hover:text-slate-900",
      success: "hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",
      danger: "hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",
      warning: "hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",
      info: "hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"
    }
  };
  if (!colors.bg[color]) {
    return color;
  }
  const base = [
    isOutlined ? colors.text[color] : colors.bg[color],
    colors.borders[color]
  ];
  if (hasHover) {
    base.push(isOutlined ? colors.outlineHover[color] : colors.bgHover[color]);
  }
  return base;
};

export { _sfc_main as _, colorsBgLight as a, gradientBgPurplePink as b, colorsOutline as c, gradientBgDark as d, gradientBgGreenIndigo as e, colorsText as f, gradientBgPinkRed as g, getButtonColor as h };
//# sourceMappingURL=colors-BYRMrYIa.mjs.map
