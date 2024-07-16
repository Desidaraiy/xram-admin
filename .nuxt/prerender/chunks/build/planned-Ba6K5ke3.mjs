import { a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from './server.mjs';
import { _ as _sfc_main$2 } from './SectionTitleLine-DzOtNnyA.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$1 } from './CardBox-SmAHmX3l.mjs';
import { _ as _sfc_main$4 } from './BaseButtons-BgEV_qrs.mjs';
import { computed, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiChevronLeft } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$1 } from './SectionMain-oKKzVNTB.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/h3/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/devalue/index.js';
import 'file:///Users/admin/work/teleos-admin/node_modules/ufo/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/destr/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/hookable/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/klona/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/scule/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/defu/dist/defu.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/ohash/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/admin/work/teleos-admin/node_modules/pathe/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/unhead/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/unctx/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/maska/dist/maska.js';
import './colors-BYRMrYIa.mjs';
import './nuxt-link-B4HAH-BK.mjs';

const _sfc_main = {
  __name: "planned",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const mailing = computed(() => mainStore.pushmailing);
    function dateTimeToDate(dateTime) {
      return dateTime.split(" ")[0];
    }
    function dateTimeToTime(dateTime) {
      return dateTime.split(" ")[1];
    }
    const deleteById = async (id) => {
      const path = proxyBaseUrl + "remove-message";
      $fetch(path, {
        method: "POST",
        body: {
          token: mainStore.userToken,
          id
        }
      }).then((r) => {
        if (r.message === "ok") {
          mainStore.getPlannedPushmailingList();
        } else {
          alert("\u041E\u0448\u0438\u0431\u043A\u0430: ", r);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLine = _sfc_main$2;
      const _component_CardBox = _sfc_main$3;
      const _component_BaseButtons = _sfc_main$4;
      const _component_BaseButton = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
                    back: true,
                    main: ""
                  }, null, _parent3, _scopeId2));
                  if (mailing.value.length > 0) {
                    _push3(`<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"${_scopeId2}><!--[-->`);
                    ssrRenderList(mailing.value, (mail) => {
                      _push3(ssrRenderComponent(_component_CardBox, {
                        key: mail.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (mail.title) {
                              _push4(`<h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId3}>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A: ${ssrInterpolate(mail.title)}</h2>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<p class="my-2"${_scopeId3}>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: ${ssrInterpolate(mail.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : mail.message)}</p>`);
                            if (mail.date.split("-")[0] != "0000") {
                              _push4(`<div${_scopeId3}><p class="my-2"${_scopeId3}>\u0414\u0430\u0442\u0430: ${ssrInterpolate(dateTimeToDate(mail.date))}</p><p class="my-2"${_scopeId3}>\u0412\u0440\u0435\u043C\u044F: ${ssrInterpolate(dateTimeToTime(mail.date))}</p></div>`);
                            } else {
                              _push4(`<div class="my-2"${_scopeId3}> \u0411\u0435\u0437 \u0434\u0430\u0442\u044B </div>`);
                            }
                            _push4(ssrRenderComponent(_component_BaseButtons, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(mail.id)
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                                    color: "info",
                                    small: "",
                                    outline: "",
                                    to: `/pushmailing/edit/${mail.id}`
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseButton, {
                                      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                      color: "warning",
                                      small: "",
                                      outline: "",
                                      onClick: ($event) => deleteById(mail.id)
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_BaseButton, {
                                      label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                                      color: "info",
                                      small: "",
                                      outline: "",
                                      to: `/pushmailing/edit/${mail.id}`
                                    }, null, 8, ["to"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              mail.title ? (openBlock(), createBlock("h2", {
                                key: 0,
                                class: "text-xl text-gray-700 dark:text-gray-300 my-2"
                              }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A: " + toDisplayString(mail.title), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "my-2" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: " + toDisplayString(mail.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : mail.message), 1),
                              mail.date.split("-")[0] != "0000" ? (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("p", { class: "my-2" }, "\u0414\u0430\u0442\u0430: " + toDisplayString(dateTimeToDate(mail.date)), 1),
                                createVNode("p", { class: "my-2" }, "\u0412\u0440\u0435\u043C\u044F: " + toDisplayString(dateTimeToTime(mail.date)), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 2,
                                class: "my-2"
                              }, " \u0411\u0435\u0437 \u0434\u0430\u0442\u044B ")),
                              createVNode(_component_BaseButtons, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseButton, {
                                    label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(mail.id)
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_BaseButton, {
                                    label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                                    color: "info",
                                    small: "",
                                    outline: "",
                                    to: `/pushmailing/edit/${mail.id}`
                                  }, null, 8, ["to"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="flex flex-col h-192 items-center justify-center"${_scopeId2}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId2}>\u041D\u0435\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A</h2>`);
                    _push3(ssrRenderComponent(_component_BaseButton, {
                      color: "info",
                      label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443",
                      to: "/pushmailing/"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    createVNode(_component_SectionTitleLine, {
                      icon: unref(mdiChevronLeft),
                      title: "\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
                      back: true,
                      main: ""
                    }, null, 8, ["icon"]),
                    mailing.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(mailing.value, (mail) => {
                        return openBlock(), createBlock(_component_CardBox, {
                          key: mail.id
                        }, {
                          default: withCtx(() => [
                            mail.title ? (openBlock(), createBlock("h2", {
                              key: 0,
                              class: "text-xl text-gray-700 dark:text-gray-300 my-2"
                            }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A: " + toDisplayString(mail.title), 1)) : createCommentVNode("", true),
                            createVNode("p", { class: "my-2" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: " + toDisplayString(mail.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : mail.message), 1),
                            mail.date.split("-")[0] != "0000" ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("p", { class: "my-2" }, "\u0414\u0430\u0442\u0430: " + toDisplayString(dateTimeToDate(mail.date)), 1),
                              createVNode("p", { class: "my-2" }, "\u0412\u0440\u0435\u043C\u044F: " + toDisplayString(dateTimeToTime(mail.date)), 1)
                            ])) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "my-2"
                            }, " \u0411\u0435\u0437 \u0434\u0430\u0442\u044B ")),
                            createVNode(_component_BaseButtons, null, {
                              default: withCtx(() => [
                                createVNode(_component_BaseButton, {
                                  label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                  color: "warning",
                                  small: "",
                                  outline: "",
                                  onClick: ($event) => deleteById(mail.id)
                                }, null, 8, ["onClick"]),
                                createVNode(_component_BaseButton, {
                                  label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                                  color: "info",
                                  small: "",
                                  outline: "",
                                  to: `/pushmailing/edit/${mail.id}`
                                }, null, 8, ["to"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col h-192 items-center justify-center"
                    }, [
                      createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "\u041D\u0435\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A"),
                      createVNode(_component_BaseButton, {
                        color: "info",
                        label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443",
                        to: "/pushmailing/"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, null, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
                    back: true,
                    main: ""
                  }, null, 8, ["icon"]),
                  mailing.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(mailing.value, (mail) => {
                      return openBlock(), createBlock(_component_CardBox, {
                        key: mail.id
                      }, {
                        default: withCtx(() => [
                          mail.title ? (openBlock(), createBlock("h2", {
                            key: 0,
                            class: "text-xl text-gray-700 dark:text-gray-300 my-2"
                          }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A: " + toDisplayString(mail.title), 1)) : createCommentVNode("", true),
                          createVNode("p", { class: "my-2" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: " + toDisplayString(mail.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : mail.message), 1),
                          mail.date.split("-")[0] != "0000" ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("p", { class: "my-2" }, "\u0414\u0430\u0442\u0430: " + toDisplayString(dateTimeToDate(mail.date)), 1),
                            createVNode("p", { class: "my-2" }, "\u0412\u0440\u0435\u043C\u044F: " + toDisplayString(dateTimeToTime(mail.date)), 1)
                          ])) : (openBlock(), createBlock("div", {
                            key: 2,
                            class: "my-2"
                          }, " \u0411\u0435\u0437 \u0434\u0430\u0442\u044B ")),
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseButton, {
                                label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                color: "warning",
                                small: "",
                                outline: "",
                                onClick: ($event) => deleteById(mail.id)
                              }, null, 8, ["onClick"]),
                              createVNode(_component_BaseButton, {
                                label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                                color: "info",
                                small: "",
                                outline: "",
                                to: `/pushmailing/edit/${mail.id}`
                              }, null, 8, ["to"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col h-192 items-center justify-center"
                  }, [
                    createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "\u041D\u0435\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A"),
                    createVNode(_component_BaseButton, {
                      color: "info",
                      label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443",
                      to: "/pushmailing/"
                    })
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pushmailing/planned.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=planned-Ba6K5ke3.mjs.map
