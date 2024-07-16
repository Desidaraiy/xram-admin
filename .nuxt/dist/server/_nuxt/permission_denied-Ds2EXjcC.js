import { _ as __nuxt_component_0 } from "../server.mjs";
import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { mdiDoor } from "@mdi/js";
import { _ as _sfc_main$1 } from "./SectionFullScreen-BkBF3oy_.js";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./CardBox-SmAHmX3l.js";
import { _ as _sfc_main$3 } from "./BaseButtons-BgEV_qrs.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "maska";
import "./colors-BYRMrYIa.js";
import "./nuxt-link-B4HAH-BK.js";
const _sfc_main = {
  __name: "permission_denied",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { bg: "greenIndigo" }, {
              default: withCtx(({ cardClass }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    class: [cardClass, "max-h-screen overflow-y-auto"],
                    title: "«Телеос-1» кабинет администратора",
                    headerIcon: unref(mdiDoor)
                  }, {
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, {
                                color: "success",
                                label: "Вернуться",
                                to: "/"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4, {
                                  color: "success",
                                  label: "Вернуться",
                                  to: "/"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$3, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, {
                                color: "success",
                                label: "Вернуться",
                                to: "/"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-3"${_scopeId3}><h2 class="text-2xl"${_scopeId3}>У вас нет доступа к этому разделу. </h2></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("h2", { class: "text-2xl" }, "У вас нет доступа к этому разделу. ")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      class: [cardClass, "max-h-screen overflow-y-auto"],
                      title: "«Телеос-1» кабинет администратора",
                      headerIcon: unref(mdiDoor)
                    }, {
                      footer: withCtx(() => [
                        createVNode(_sfc_main$3, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4, {
                              color: "success",
                              label: "Вернуться",
                              to: "/"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-3" }, [
                          createVNode("h2", { class: "text-2xl" }, "У вас нет доступа к этому разделу. ")
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class", "headerIcon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { bg: "greenIndigo" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$2, {
                    class: [cardClass, "max-h-screen overflow-y-auto"],
                    title: "«Телеос-1» кабинет администратора",
                    headerIcon: unref(mdiDoor)
                  }, {
                    footer: withCtx(() => [
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4, {
                            color: "success",
                            label: "Вернуться",
                            to: "/"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("h2", { class: "text-2xl" }, "У вас нет доступа к этому разделу. ")
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class", "headerIcon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/permission_denied.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=permission_denied-Ds2EXjcC.js.map
