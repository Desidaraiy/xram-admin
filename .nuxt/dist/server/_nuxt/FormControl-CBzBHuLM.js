import { useSlots, computed, mergeProps, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderDynamicModel } from "vue/server-renderer";
import { a as useMainStore } from "../server.mjs";
import { _ as _sfc_main$3 } from "./colors-BYRMrYIa.js";
const _sfc_main$2 = {
  __name: "FormField",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: null
    },
    labelFor: {
      type: String,
      default: null
    },
    help: {
      type: String,
      default: null
    },
    isValid: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const slots = useSlots();
    const wrapperClass = computed(() => {
      const base = [];
      const slotsLength = slots.default().length;
      if (slotsLength > 1) {
        base.push("grid grid-cols-1 gap-3");
      }
      if (slotsLength === 2) {
        base.push("md:grid-cols-2");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6 last:mb-0" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.labelFor)} class="block font-bold mb-2">${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(wrapperClass.value)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (__props.help) {
        _push(`<div class="${ssrRenderClass({ "text-xs text-gray-500 dark:text-slate-400 mt-1": true, "text-red-500": !__props.isValid })}">${ssrInterpolate(__props.help)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormField.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FormControlIcon",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    h: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        path: __props.icon,
        w: "w-10",
        h: __props.h,
        class: "absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormControlIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FormControl",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    inputmode: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object],
      default: ""
    },
    intonly: {
      type: Boolean,
      default: false
    },
    masked: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: null
    },
    required: Boolean,
    borderless: Boolean,
    transparent: Boolean,
    ctrlKFocus: Boolean
  },
  emits: ["update:modelValue", "setRef"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const inputElClass = computed(() => {
      const base = [
        "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full",
        "dark:placeholder-gray-400",
        computedType.value === "textarea" ? "h-24" : "h-12",
        props.borderless ? "border-0" : "border",
        props.transparent ? "bg-transparent" : "bg-white dark:bg-slate-800"
      ];
      if (props.icon) {
        base.push("pl-10");
      }
      return base;
    });
    const computedType = computed(() => props.options ? "select" : props.type);
    const controlIconH = computed(() => props.type === "textarea" ? "h-full" : "h-12");
    useMainStore();
    ref("");
    ref("");
    ref("");
    if (props.ctrlKFocus)
      ;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      if (computedType.value === "select") {
        _push(`<select${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("name", __props.name)} class="${ssrRenderClass(inputElClass.value)}"><!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<option${ssrRenderAttr("value", option)}>${ssrInterpolate(option.label ?? option)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else if (computedType.value === "textarea") {
        _push(`<textarea${ssrRenderAttr("id", __props.id)} class="${ssrRenderClass(inputElClass.value)}"${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}>${ssrInterpolate(computedValue.value)}</textarea>`);
      } else {
        _push(`<input style="${ssrRenderStyle(computedType.value !== "dadata" ? null : { display: "none" })}"${ssrRenderAttr("id", __props.id)}${ssrRenderDynamicModel(computedType.value, computedValue.value, null)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("inputmode", __props.inputmode)}${ssrRenderAttr("autocomplete", __props.autocomplete)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("type", computedType.value)} class="${ssrRenderClass(inputElClass.value)}"${ssrRenderAttr("v-maska", __props.masked)}${ssrRenderAttr("data-maska", __props.masked ? __props.mask !== "" ? __props.mask : null : null)}>`);
      }
      if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          h: controlIconH.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormControl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$2 as _,
  _sfc_main as a
};
//# sourceMappingURL=FormControl-CBzBHuLM.js.map