import { _ as __nuxt_component_0 } from './nuxt-link-B4HAH-BK.mjs';
import { computed, unref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString, createVNode, resolveDynamicComponent, useSSRContext, useSlots, reactive, watch, createTextVNode, withDirectives, vModelText, renderSlot } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderAttr, ssrRenderSlot } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { RouterLink } from 'file:///Users/admin/work/teleos-admin/node_modules/vue-router/dist/vue-router.node.mjs';
import { h as getButtonColor, _ as _sfc_main$2 } from './colors-BYRMrYIa.mjs';
import { mdiCog } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';

const _sfc_main$1 = {
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    },
    type: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "white"
    },
    as: {
      type: String,
      default: null
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    roundedFull: Boolean
  },
  setup(__props) {
    const props = __props;
    const is = computed(() => {
      if (props.as) {
        return props.as;
      }
      if (props.to) {
        return RouterLink;
      }
      if (props.href) {
        return "a";
      }
      return "button";
    });
    const computedType = computed(() => {
      var _a;
      if (is.value === "button") {
        return (_a = props.type) != null ? _a : "button";
      }
      return null;
    });
    const labelClass = computed(() => props.small && props.icon ? "px-1" : "px-2");
    const componentClass = computed(() => {
      const base = [
        "inline-flex",
        "cursor-pointer",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "focus:outline-none",
        "transition-colors",
        "focus:ring",
        "duration-150",
        "border",
        props.roundedFull ? "rounded-full" : "rounded",
        props.active ? "ring ring-black dark:ring-white" : "ring-blue-700",
        getButtonColor(props.color, props.outline, !props.disabled)
      ];
      if (props.small) {
        base.push(
          "text-sm",
          props.roundedFull ? "px-3 py-1" : "p-1"
        );
      } else {
        base.push(
          "py-2",
          props.roundedFull ? "px-6" : "px-3"
        );
      }
      if (props.disabled) {
        base.push("cursor-not-allowed", props.outline ? "opacity-50" : "opacity-70");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (is.value === unref(RouterLink)) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          class: componentClass.value,
          type: computedType.value,
          to: __props.to,
          target: __props.target,
          disabled: __props.disabled
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.icon) {
                _push2(ssrRenderComponent(_sfc_main$2, { path: __props.icon }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.label) {
                _push2(`<span class="${ssrRenderClass(labelClass.value)}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.icon ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  path: __props.icon
                }, null, 8, ["path"])) : createCommentVNode("", true),
                __props.label ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: labelClass.value
                }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
          class: componentClass.value,
          href: __props.href,
          type: computedType.value,
          to: __props.to,
          target: __props.target,
          disabled: __props.disabled
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.icon) {
                _push2(ssrRenderComponent(_sfc_main$2, { path: __props.icon }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.label) {
                _push2(`<span class="${ssrRenderClass(labelClass.value)}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.icon ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  path: __props.icon
                }, null, 8, ["path"])) : createCommentVNode("", true),
                __props.label ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: labelClass.value
                }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "CardBox",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    headerIcon: {
      type: String,
      default: null
    },
    rounded: {
      type: String,
      default: "rounded-xl"
    },
    flex: {
      type: String,
      default: "flex-col"
    },
    hasTable: Boolean,
    hasSearchbar: Boolean,
    empty: Boolean,
    form: Boolean,
    hoverable: Boolean,
    modal: Boolean
  },
  emits: ["header-icon-click", "submit", "search-toggle", "search-string"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const is = computed(() => props.form ? "form" : "div");
    const slots = useSlots();
    const footer = computed(() => slots.footer && !!slots.footer());
    const componentClass = computed(() => {
      const base = [
        props.rounded,
        props.flex,
        props.modal ? "dark:bg-slate-900" : "dark:bg-slate-900/70"
      ];
      if (props.hoverable) {
        base.push("hover:shadow-lg transition-shadow duration-500");
      }
      return base;
    });
    const controller = reactive({
      query: "",
      searching: false
    });
    const handleSearchString = (value) => {
      emit("search-string", value);
    };
    watch(() => controller.query, (newValue) => {
      handleSearchString(newValue);
    });
    computed(() => {
      var _a;
      return (_a = props.headerIcon) != null ? _a : mdiCog;
    });
    const submit = (e) => {
      emit("submit", e);
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
        class: [componentClass.value, "bg-white flex"],
        onSubmit: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.title) {
              _push2(`<header class="flex items-stretch border-b border-gray-100 dark:border-slate-800"${_scopeId}><div class="${ssrRenderClass([[__props.icon ? "px-4" : "px-6"], "flex items-center py-3 grow font-bold"])}"${_scopeId}>`);
              if (__props.icon) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  path: __props.icon,
                  class: "mr-3"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(__props.title)}</div>`);
              if (__props.hasSearchbar) {
                _push2(`<div class="searchbar_wrapper py-2 px-2"${_scopeId}><input type="text" class="py-2 px-2 rounded-md text-sm text-black-700 dark:text-slate-700" placeholder="\u041F\u043E\u0438\u0441\u043A..."${ssrRenderAttr("value", controller.query)}${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</header>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.empty) {
              _push2(`<div class="text-center py-24 text-gray-500 dark:text-slate-400"${_scopeId}><p${_scopeId}>Nothing&#39;s here\u2026</p></div>`);
            } else {
              _push2(`<div class="${ssrRenderClass([{ "p-6": !__props.hasTable }, "flex-1"])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }
            if (footer.value) {
              _push2(`<div class="p-6 border-t border-gray-100 dark:border-slate-800"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.title ? (openBlock(), createBlock("header", {
                key: 0,
                class: "flex items-stretch border-b border-gray-100 dark:border-slate-800"
              }, [
                createVNode("div", {
                  class: ["flex items-center py-3 grow font-bold", [__props.icon ? "px-4" : "px-6"]]
                }, [
                  __props.icon ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    path: __props.icon,
                    class: "mr-3"
                  }, null, 8, ["path"])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(__props.title), 1)
                ], 2),
                __props.hasSearchbar ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "searchbar_wrapper py-2 px-2"
                }, [
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "py-2 px-2 rounded-md text-sm text-black-700 dark:text-slate-700",
                    placeholder: "\u041F\u043E\u0438\u0441\u043A...",
                    "onUpdate:modelValue": ($event) => controller.query = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, controller.query]
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              __props.empty ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center py-24 text-gray-500 dark:text-slate-400"
              }, [
                createVNode("p", null, "Nothing's here\u2026")
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: ["flex-1", { "p-6": !__props.hasTable }]
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)),
              footer.value ? (openBlock(), createBlock("div", {
                key: 3,
                class: "p-6 border-t border-gray-100 dark:border-slate-800"
              }, [
                renderSlot(_ctx.$slots, "footer")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=CardBox-SmAHmX3l.mjs.map
