import { a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$2 } from "./SectionTitleLineWithButton-7kpWGLD1.js";
import { a as _sfc_main$3, _ as _sfc_main$4 } from "./CardBox-SmAHmX3l.js";
import { _ as _sfc_main$5 } from "./BaseButtons-BgEV_qrs.js";
import { computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { mdiStar } from "@mdi/js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const adverts = computed(() => mainStore.adverts);
    function checkPictureUrl(url) {
      return url.match(/\.(jpeg|jpg|gif|png)$/) != null ? true : false;
    }
    function dateTimeToDate(dateTime) {
      return dateTime.split(" ")[0];
    }
    const deleteById = async (id) => {
      const path = proxyBaseUrl + "remove-advertising";
      $fetch(path, {
        method: "POST",
        body: {
          token: mainStore.userToken,
          advertising_id: id
        }
      }).then((r) => {
        if (r.message === "ok") {
          mainStore.getAdvertsList();
        } else {
          alert("Ошибка: ", r);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLineWithButton = _sfc_main$2;
      const _component_BaseButton = _sfc_main$3;
      const _component_CardBox = _sfc_main$4;
      const _component_BaseButtons = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiStar),
                    title: "Управление рекламой",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "info",
                          label: "Добавить рекламу",
                          to: "advertising/new"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "Добавить рекламу",
                            to: "advertising/new"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (adverts.value.length > 0) {
                    _push3(`<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"${_scopeId2}><!--[-->`);
                    ssrRenderList(adverts.value, (advert) => {
                      _push3(ssrRenderComponent(_component_CardBox, {
                        key: advert.advertising_id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img${ssrRenderAttr("src", checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=Нет изображения")} class="h-64 w-full object-cover"${ssrRenderAttr("alt", advert.id)}${_scopeId3}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId3}>${ssrInterpolate(advert.title)}</h2><p${_scopeId3}>${ssrInterpolate(advert.text.length < 0 ? "Текст объявления пуст" : advert.text)}</p><p${_scopeId3}>Дата старта: ${ssrInterpolate(dateTimeToDate(advert.date_start))}</p><p${_scopeId3}>Дата окончания: ${ssrInterpolate(dateTimeToDate(advert.date_end))}</p><div class="flex flex-row justify-between my-5 items-center"${_scopeId3}><p${_scopeId3}>Миниатюра:</p><img${ssrRenderAttr("src", checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=Нет миниатюры")} class="rounded-md h-24 w-24 object-cover"${ssrRenderAttr("alt", advert.advertising_id)}${_scopeId3}></div>`);
                            _push4(ssrRenderComponent(_component_BaseButtons, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "Удалить",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(advert.advertising_id)
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "Редактировать",
                                    color: "info",
                                    small: "",
                                    outline: "",
                                    to: `/advertising/edit/${advert.advertising_id}`
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseButton, {
                                      label: "Удалить",
                                      color: "warning",
                                      small: "",
                                      outline: "",
                                      onClick: ($event) => deleteById(advert.advertising_id)
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_BaseButton, {
                                      label: "Редактировать",
                                      color: "info",
                                      small: "",
                                      outline: "",
                                      to: `/advertising/edit/${advert.advertising_id}`
                                    }, null, 8, ["to"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("img", {
                                src: checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=Нет изображения",
                                class: "h-64 w-full object-cover",
                                alt: advert.id
                              }, null, 8, ["src", "alt"]),
                              createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, toDisplayString(advert.title), 1),
                              createVNode("p", null, toDisplayString(advert.text.length < 0 ? "Текст объявления пуст" : advert.text), 1),
                              createVNode("p", null, "Дата старта: " + toDisplayString(dateTimeToDate(advert.date_start)), 1),
                              createVNode("p", null, "Дата окончания: " + toDisplayString(dateTimeToDate(advert.date_end)), 1),
                              createVNode("div", { class: "flex flex-row justify-between my-5 items-center" }, [
                                createVNode("p", null, "Миниатюра:"),
                                createVNode("img", {
                                  src: checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=Нет миниатюры",
                                  class: "rounded-md h-24 w-24 object-cover",
                                  alt: advert.advertising_id
                                }, null, 8, ["src", "alt"])
                              ]),
                              createVNode(_component_BaseButtons, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseButton, {
                                    label: "Удалить",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(advert.advertising_id)
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_BaseButton, {
                                    label: "Редактировать",
                                    color: "info",
                                    small: "",
                                    outline: "",
                                    to: `/advertising/edit/${advert.advertising_id}`
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
                    _push3(`<div class="flex flex-col h-192 items-center justify-center"${_scopeId2}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId2}>Нет объявлений</h2></div>`);
                  }
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: unref(mdiStar),
                      title: "Управление рекламой",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "info",
                          label: "Добавить рекламу",
                          to: "advertising/new"
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    adverts.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(adverts.value, (advert) => {
                        return openBlock(), createBlock(_component_CardBox, {
                          key: advert.advertising_id
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=Нет изображения",
                              class: "h-64 w-full object-cover",
                              alt: advert.id
                            }, null, 8, ["src", "alt"]),
                            createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, toDisplayString(advert.title), 1),
                            createVNode("p", null, toDisplayString(advert.text.length < 0 ? "Текст объявления пуст" : advert.text), 1),
                            createVNode("p", null, "Дата старта: " + toDisplayString(dateTimeToDate(advert.date_start)), 1),
                            createVNode("p", null, "Дата окончания: " + toDisplayString(dateTimeToDate(advert.date_end)), 1),
                            createVNode("div", { class: "flex flex-row justify-between my-5 items-center" }, [
                              createVNode("p", null, "Миниатюра:"),
                              createVNode("img", {
                                src: checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=Нет миниатюры",
                                class: "rounded-md h-24 w-24 object-cover",
                                alt: advert.advertising_id
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode(_component_BaseButtons, null, {
                              default: withCtx(() => [
                                createVNode(_component_BaseButton, {
                                  label: "Удалить",
                                  color: "warning",
                                  small: "",
                                  outline: "",
                                  onClick: ($event) => deleteById(advert.advertising_id)
                                }, null, 8, ["onClick"]),
                                createVNode(_component_BaseButton, {
                                  label: "Редактировать",
                                  color: "info",
                                  small: "",
                                  outline: "",
                                  to: `/advertising/edit/${advert.advertising_id}`
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
                      createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "Нет объявлений")
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
                  createVNode(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiStar),
                    title: "Управление рекламой",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, {
                        color: "info",
                        label: "Добавить рекламу",
                        to: "advertising/new"
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  adverts.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(adverts.value, (advert) => {
                      return openBlock(), createBlock(_component_CardBox, {
                        key: advert.advertising_id
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=Нет изображения",
                            class: "h-64 w-full object-cover",
                            alt: advert.id
                          }, null, 8, ["src", "alt"]),
                          createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, toDisplayString(advert.title), 1),
                          createVNode("p", null, toDisplayString(advert.text.length < 0 ? "Текст объявления пуст" : advert.text), 1),
                          createVNode("p", null, "Дата старта: " + toDisplayString(dateTimeToDate(advert.date_start)), 1),
                          createVNode("p", null, "Дата окончания: " + toDisplayString(dateTimeToDate(advert.date_end)), 1),
                          createVNode("div", { class: "flex flex-row justify-between my-5 items-center" }, [
                            createVNode("p", null, "Миниатюра:"),
                            createVNode("img", {
                              src: checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=Нет миниатюры",
                              class: "rounded-md h-24 w-24 object-cover",
                              alt: advert.advertising_id
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseButton, {
                                label: "Удалить",
                                color: "warning",
                                small: "",
                                outline: "",
                                onClick: ($event) => deleteById(advert.advertising_id)
                              }, null, 8, ["onClick"]),
                              createVNode(_component_BaseButton, {
                                label: "Редактировать",
                                color: "info",
                                small: "",
                                outline: "",
                                to: `/advertising/edit/${advert.advertising_id}`
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
                    createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "Нет объявлений")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/advertising/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-gE3A4ZKu.js.map
