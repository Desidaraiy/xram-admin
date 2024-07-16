import { a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$2 } from "./SectionTitleLine-DzOtNnyA.js";
import { _ as _sfc_main$3, a as _sfc_main$5 } from "./CardBox-SmAHmX3l.js";
import { _ as _sfc_main$4 } from "./BaseButtons-BgEV_qrs.js";
import { computed, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { mdiChevronLeft } from "@mdi/js";
import { _ as _sfc_main$1 } from "./SectionMain-oKKzVNTB.js";
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
          alert("Ошибка: ", r);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLine = _sfc_main$2;
      const _component_CardBox = _sfc_main$3;
      const _component_BaseButtons = _sfc_main$4;
      const _component_BaseButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "Запланированные рассылки",
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
                              _push4(`<h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId3}>Заголовок: ${ssrInterpolate(mail.title)}</h2>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<p class="my-2"${_scopeId3}>Сообщение: ${ssrInterpolate(mail.length < 0 ? "Текст объявления пуст" : mail.message)}</p>`);
                            if (mail.date.split("-")[0] != "0000") {
                              _push4(`<div${_scopeId3}><p class="my-2"${_scopeId3}>Дата: ${ssrInterpolate(dateTimeToDate(mail.date))}</p><p class="my-2"${_scopeId3}>Время: ${ssrInterpolate(dateTimeToTime(mail.date))}</p></div>`);
                            } else {
                              _push4(`<div class="my-2"${_scopeId3}> Без даты </div>`);
                            }
                            _push4(ssrRenderComponent(_component_BaseButtons, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "Удалить",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(mail.id)
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "Редактировать",
                                    color: "info",
                                    small: "",
                                    outline: "",
                                    to: `/pushmailing/edit/${mail.id}`
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseButton, {
                                      label: "Удалить",
                                      color: "warning",
                                      small: "",
                                      outline: "",
                                      onClick: ($event) => deleteById(mail.id)
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_BaseButton, {
                                      label: "Редактировать",
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
                              }, "Заголовок: " + toDisplayString(mail.title), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "my-2" }, "Сообщение: " + toDisplayString(mail.length < 0 ? "Текст объявления пуст" : mail.message), 1),
                              mail.date.split("-")[0] != "0000" ? (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("p", { class: "my-2" }, "Дата: " + toDisplayString(dateTimeToDate(mail.date)), 1),
                                createVNode("p", { class: "my-2" }, "Время: " + toDisplayString(dateTimeToTime(mail.date)), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 2,
                                class: "my-2"
                              }, " Без даты ")),
                              createVNode(_component_BaseButtons, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseButton, {
                                    label: "Удалить",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(mail.id)
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_BaseButton, {
                                    label: "Редактировать",
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
                    _push3(`<div class="flex flex-col h-192 items-center justify-center"${_scopeId2}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId2}>Нет рассылок</h2>`);
                    _push3(ssrRenderComponent(_component_BaseButton, {
                      color: "info",
                      label: "Создать рассылку",
                      to: "/pushmailing/"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    createVNode(_component_SectionTitleLine, {
                      icon: unref(mdiChevronLeft),
                      title: "Запланированные рассылки",
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
                            }, "Заголовок: " + toDisplayString(mail.title), 1)) : createCommentVNode("", true),
                            createVNode("p", { class: "my-2" }, "Сообщение: " + toDisplayString(mail.length < 0 ? "Текст объявления пуст" : mail.message), 1),
                            mail.date.split("-")[0] != "0000" ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("p", { class: "my-2" }, "Дата: " + toDisplayString(dateTimeToDate(mail.date)), 1),
                              createVNode("p", { class: "my-2" }, "Время: " + toDisplayString(dateTimeToTime(mail.date)), 1)
                            ])) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "my-2"
                            }, " Без даты ")),
                            createVNode(_component_BaseButtons, null, {
                              default: withCtx(() => [
                                createVNode(_component_BaseButton, {
                                  label: "Удалить",
                                  color: "warning",
                                  small: "",
                                  outline: "",
                                  onClick: ($event) => deleteById(mail.id)
                                }, null, 8, ["onClick"]),
                                createVNode(_component_BaseButton, {
                                  label: "Редактировать",
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
                      createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "Нет рассылок"),
                      createVNode(_component_BaseButton, {
                        color: "info",
                        label: "Создать рассылку",
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
                    title: "Запланированные рассылки",
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
                          }, "Заголовок: " + toDisplayString(mail.title), 1)) : createCommentVNode("", true),
                          createVNode("p", { class: "my-2" }, "Сообщение: " + toDisplayString(mail.length < 0 ? "Текст объявления пуст" : mail.message), 1),
                          mail.date.split("-")[0] != "0000" ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("p", { class: "my-2" }, "Дата: " + toDisplayString(dateTimeToDate(mail.date)), 1),
                            createVNode("p", { class: "my-2" }, "Время: " + toDisplayString(dateTimeToTime(mail.date)), 1)
                          ])) : (openBlock(), createBlock("div", {
                            key: 2,
                            class: "my-2"
                          }, " Без даты ")),
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseButton, {
                                label: "Удалить",
                                color: "warning",
                                small: "",
                                outline: "",
                                onClick: ($event) => deleteById(mail.id)
                              }, null, 8, ["onClick"]),
                              createVNode(_component_BaseButton, {
                                label: "Редактировать",
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
                    createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "Нет рассылок"),
                    createVNode(_component_BaseButton, {
                      color: "info",
                      label: "Создать рассылку",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=planned-Ba6K5ke3.js.map
