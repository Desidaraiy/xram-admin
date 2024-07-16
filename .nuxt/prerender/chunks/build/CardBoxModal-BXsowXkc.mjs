import { computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, renderSlot, withDirectives, vShow, useSSRContext, useSlots, resolveDynamicComponent, createTextVNode } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderVNode } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiClose, mdiCog } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$4 } from './colors-BYRMrYIa.mjs';
import { a as _sfc_main$1$1 } from './CardBox-SmAHmX3l.mjs';
import { _ as _sfc_main$3 } from './BaseButtons-BgEV_qrs.mjs';
import { _ as _sfc_main$2 } from './OverlayLayer-Ca6LWwyv.mjs';

const _sfc_main$1 = {
  __name: "CardBoxScrollable",
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
    empty: Boolean,
    form: Boolean,
    hoverable: Boolean,
    modal: Boolean
  },
  emits: ["header-icon-click", "submit"],
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
    const computedHeaderIcon = computed(() => {
      var _a;
      return (_a = props.headerIcon) != null ? _a : mdiCog;
    });
    const headerIconClick = () => {
      emit("header-icon-click");
    };
    const submit = (e) => {
      emit("submit", e);
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
        class: [componentClass.value, "bg-white flex flex-col"],
        onSubmit: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.title) {
              _push2(`<header class="flex items-stretch border-b border-gray-100 dark:border-slate-800"${_scopeId}><div class="${ssrRenderClass([[__props.icon ? "px-4" : "px-6"], "flex items-center py-3 grow font-bold"])}"${_scopeId}>`);
              if (__props.icon) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  path: __props.icon,
                  class: "mr-3"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(__props.title)}</div><button class="flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, { path: computedHeaderIcon.value }, null, _parent2, _scopeId));
              _push2(`</button></header>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.empty) {
              _push2(`<div class="text-center py-24 text-gray-500 dark:text-slate-400"${_scopeId}><p${_scopeId}>Nothing&#39;s here\u2026</p></div>`);
            } else {
              _push2(`<div class="${ssrRenderClass([{ "p-6": !__props.hasTable }, "flex-1 overflow-y-auto"])}"${_scopeId}>`);
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
                  __props.icon ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    path: __props.icon,
                    class: "mr-3"
                  }, null, 8, ["path"])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(__props.title), 1)
                ], 2),
                createVNode("button", {
                  class: "flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring",
                  onClick: headerIconClick
                }, [
                  createVNode(_sfc_main$4, { path: computedHeaderIcon.value }, null, 8, ["path"])
                ])
              ])) : createCommentVNode("", true),
              __props.empty ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center py-24 text-gray-500 dark:text-slate-400"
              }, [
                createVNode("p", null, "Nothing's here\u2026")
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: ["flex-1 overflow-y-auto", { "p-6": !__props.hasTable }]
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardBoxScrollable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "CardBoxModal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: null
    },
    largeTitle: {
      type: String,
      default: null
    },
    button: {
      type: String,
      default: "info"
    },
    buttonLabel: {
      type: String,
      default: "\u0413\u043E\u0442\u043E\u0432\u043E"
    },
    hasCancel: Boolean,
    hasTable: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  emits: ["update:modelValue", "cancel", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get: () => props.modelValue,
      set: (value2) => emit("update:modelValue", value2)
    });
    const confirmCancel = (mode) => {
      value.value = false;
      emit(mode);
    };
    const confirm = () => confirmCancel("confirm");
    const cancel = () => confirmCancel("cancel");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBoxScrollable = _sfc_main$1;
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        style: value.value ? null : { display: "none" },
        onOverlayClick: cancel
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardBoxScrollable, {
              style: value.value ? null : { display: "none" },
              title: __props.title,
              class: "shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50",
              "header-icon": unref(mdiClose),
              modal: "",
              onHeaderIconClick: cancel
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1$1, {
                          label: __props.buttonLabel,
                          color: __props.button,
                          onClick: confirm
                        }, null, _parent4, _scopeId3));
                        if (__props.hasCancel) {
                          _push4(ssrRenderComponent(_sfc_main$1$1, {
                            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                            color: __props.button,
                            outline: "",
                            onClick: cancel
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$1$1, {
                            label: __props.buttonLabel,
                            color: __props.button,
                            onClick: confirm
                          }, null, 8, ["label", "color"]),
                          __props.hasCancel ? (openBlock(), createBlock(_sfc_main$1$1, {
                            key: 0,
                            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                            color: __props.button,
                            outline: "",
                            onClick: cancel
                          }, null, 8, ["color"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "" }, [
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1$1, {
                            label: __props.buttonLabel,
                            color: __props.button,
                            onClick: confirm
                          }, null, 8, ["label", "color"]),
                          __props.hasCancel ? (openBlock(), createBlock(_sfc_main$1$1, {
                            key: 0,
                            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                            color: __props.button,
                            outline: "",
                            onClick: cancel
                          }, null, 8, ["color"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-3 flex flex-col"${_scopeId2}>`);
                  if (__props.largeTitle) {
                    _push3(`<h1 class="text-2xl flex-1"${_scopeId2}>${ssrInterpolate(__props.largeTitle)}</h1>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="${ssrRenderClass([{ "p-6": !__props.hasTable }, "flex-1"])}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-3 flex flex-col" }, [
                      __props.largeTitle ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "text-2xl flex-1"
                      }, toDisplayString(__props.largeTitle), 1)) : createCommentVNode("", true),
                      createVNode("div", {
                        class: ["flex-1", { "p-6": !__props.hasTable }]
                      }, [
                        renderSlot(_ctx.$slots, "default")
                      ], 2)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(_component_CardBoxScrollable, {
                title: __props.title,
                class: "shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50",
                "header-icon": unref(mdiClose),
                modal: "",
                onHeaderIconClick: cancel
              }, {
                footer: withCtx(() => [
                  createVNode("div", { class: "" }, [
                    createVNode(_sfc_main$3, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1$1, {
                          label: __props.buttonLabel,
                          color: __props.button,
                          onClick: confirm
                        }, null, 8, ["label", "color"]),
                        __props.hasCancel ? (openBlock(), createBlock(_sfc_main$1$1, {
                          key: 0,
                          label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                          color: __props.button,
                          outline: "",
                          onClick: cancel
                        }, null, 8, ["color"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-3 flex flex-col" }, [
                    __props.largeTitle ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "text-2xl flex-1"
                    }, toDisplayString(__props.largeTitle), 1)) : createCommentVNode("", true),
                    createVNode("div", {
                      class: ["flex-1", { "p-6": !__props.hasTable }]
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2)
                  ])
                ]),
                _: 3
              }, 8, ["title", "header-icon"]), [
                [vShow, value.value]
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardBoxModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CardBoxModal-BXsowXkc.mjs.map
