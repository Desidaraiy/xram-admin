import { a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from './server.mjs';
import { _ as _sfc_main$2 } from './SectionTitleLineWithButton-7kpWGLD1.mjs';
import { a as _sfc_main$1$1, _ as _sfc_main$3 } from './CardBox-SmAHmX3l.mjs';
import { _ as _sfc_main$4 } from './BaseButtons-BgEV_qrs.mjs';
import { computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiStar } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
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
          alert("\u041E\u0448\u0438\u0431\u043A\u0430: ", r);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLineWithButton = _sfc_main$2;
      const _component_BaseButton = _sfc_main$1$1;
      const _component_CardBox = _sfc_main$3;
      const _component_BaseButtons = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiStar),
                    title: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0439",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "info",
                          label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443",
                          to: "advertising/new"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443",
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
                            _push4(`<img${ssrRenderAttr("src", checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")} class="h-64 w-full object-cover"${ssrRenderAttr("alt", advert.id)}${_scopeId3}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId3}>${ssrInterpolate(advert.title)}</h2><p${_scopeId3}>${ssrInterpolate(advert.text.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : advert.text)}</p><p${_scopeId3}>\u0414\u0430\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u0430: ${ssrInterpolate(dateTimeToDate(advert.date_start))}</p><p${_scopeId3}>\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F: ${ssrInterpolate(dateTimeToDate(advert.date_end))}</p><div class="flex flex-row justify-between my-5 items-center"${_scopeId3}><p${_scopeId3}>\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u0430:</p><img${ssrRenderAttr("src", checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=\u041D\u0435\u0442 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u044B")} class="rounded-md h-24 w-24 object-cover"${ssrRenderAttr("alt", advert.advertising_id)}${_scopeId3}></div>`);
                            _push4(ssrRenderComponent(_component_BaseButtons, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(advert.advertising_id)
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_BaseButton, {
                                    label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                                    color: "info",
                                    small: "",
                                    outline: "",
                                    to: `/advertising/edit/${advert.advertising_id}`
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseButton, {
                                      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                      color: "warning",
                                      small: "",
                                      outline: "",
                                      onClick: ($event) => deleteById(advert.advertising_id)
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_BaseButton, {
                                      label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
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
                                src: checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                                class: "h-64 w-full object-cover",
                                alt: advert.id
                              }, null, 8, ["src", "alt"]),
                              createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, toDisplayString(advert.title), 1),
                              createVNode("p", null, toDisplayString(advert.text.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : advert.text), 1),
                              createVNode("p", null, "\u0414\u0430\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u0430: " + toDisplayString(dateTimeToDate(advert.date_start)), 1),
                              createVNode("p", null, "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F: " + toDisplayString(dateTimeToDate(advert.date_end)), 1),
                              createVNode("div", { class: "flex flex-row justify-between my-5 items-center" }, [
                                createVNode("p", null, "\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u0430:"),
                                createVNode("img", {
                                  src: checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=\u041D\u0435\u0442 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u044B",
                                  class: "rounded-md h-24 w-24 object-cover",
                                  alt: advert.advertising_id
                                }, null, 8, ["src", "alt"])
                              ]),
                              createVNode(_component_BaseButtons, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseButton, {
                                    label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                    color: "warning",
                                    small: "",
                                    outline: "",
                                    onClick: ($event) => deleteById(advert.advertising_id)
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_BaseButton, {
                                    label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
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
                    _push3(`<div class="flex flex-col h-192 items-center justify-center"${_scopeId2}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId2}>\u041D\u0435\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439</h2></div>`);
                  }
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: unref(mdiStar),
                      title: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0439",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "info",
                          label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443",
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
                              src: checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                              class: "h-64 w-full object-cover",
                              alt: advert.id
                            }, null, 8, ["src", "alt"]),
                            createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, toDisplayString(advert.title), 1),
                            createVNode("p", null, toDisplayString(advert.text.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : advert.text), 1),
                            createVNode("p", null, "\u0414\u0430\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u0430: " + toDisplayString(dateTimeToDate(advert.date_start)), 1),
                            createVNode("p", null, "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F: " + toDisplayString(dateTimeToDate(advert.date_end)), 1),
                            createVNode("div", { class: "flex flex-row justify-between my-5 items-center" }, [
                              createVNode("p", null, "\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u0430:"),
                              createVNode("img", {
                                src: checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=\u041D\u0435\u0442 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u044B",
                                class: "rounded-md h-24 w-24 object-cover",
                                alt: advert.advertising_id
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode(_component_BaseButtons, null, {
                              default: withCtx(() => [
                                createVNode(_component_BaseButton, {
                                  label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                  color: "warning",
                                  small: "",
                                  outline: "",
                                  onClick: ($event) => deleteById(advert.advertising_id)
                                }, null, 8, ["onClick"]),
                                createVNode(_component_BaseButton, {
                                  label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
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
                      createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "\u041D\u0435\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439")
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
                    title: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0439",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, {
                        color: "info",
                        label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443",
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
                            src: checkPictureUrl(advert.picture) ? advert.picture : "https://via.placeholder.com/1080x1920?text=\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                            class: "h-64 w-full object-cover",
                            alt: advert.id
                          }, null, 8, ["src", "alt"]),
                          createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, toDisplayString(advert.title), 1),
                          createVNode("p", null, toDisplayString(advert.text.length < 0 ? "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0443\u0441\u0442" : advert.text), 1),
                          createVNode("p", null, "\u0414\u0430\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u0430: " + toDisplayString(dateTimeToDate(advert.date_start)), 1),
                          createVNode("p", null, "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F: " + toDisplayString(dateTimeToDate(advert.date_end)), 1),
                          createVNode("div", { class: "flex flex-row justify-between my-5 items-center" }, [
                            createVNode("p", null, "\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u0430:"),
                            createVNode("img", {
                              src: checkPictureUrl(advert.preview) ? advert.preview : "https://via.placeholder.com/500x500?text=\u041D\u0435\u0442 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u044B",
                              class: "rounded-md h-24 w-24 object-cover",
                              alt: advert.advertising_id
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseButton, {
                                label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                color: "warning",
                                small: "",
                                outline: "",
                                onClick: ($event) => deleteById(advert.advertising_id)
                              }, null, 8, ["onClick"]),
                              createVNode(_component_BaseButton, {
                                label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
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
                    createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "\u041D\u0435\u0442 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439")
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

export { _sfc_main as default };
//# sourceMappingURL=index-gE3A4ZKu.mjs.map
