import { a as useMainStore, _ as __nuxt_component_0, d as useCookie, t as tokenCookieName, e as useStyleStore, p as proxyBaseUrl } from './server.mjs';
import { withCtx, unref, createVNode, useSSRContext, computed, ref, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$5 } from './CardBoxModal-BXsowXkc.mjs';
import { _ as _sfc_main$7 } from './TableCheckboxCell-DxFE6wzt.mjs';
import { _ as _sfc_main$8 } from './BaseLevel-0o1EWMay.mjs';
import { _ as _sfc_main$6 } from './BaseButtons-BgEV_qrs.mjs';
import { a as _sfc_main$1$1, _ as _sfc_main$4 } from './CardBox-SmAHmX3l.mjs';
import { mdiChartTimelineVariant, mdiAccountMultiplePlus } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$2 } from './SectionMain-oKKzVNTB.mjs';
import { _ as _sfc_main$3 } from './SectionTitleLineWithButton-7kpWGLD1.mjs';
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
import './OverlayLayer-Ca6LWwyv.mjs';
import './nuxt-link-B4HAH-BK.mjs';

const _sfc_main$1 = {
  __name: "TableSampleAdmins",
  __ssrInlineRender: true,
  props: {
    checkable: Boolean
  },
  setup(__props) {
    const etoken = useCookie(tokenCookieName, { sameSite: "None", secure: true });
    const styleStore = useStyleStore();
    const mainStore = useMainStore();
    const items = computed(() => mainStore.isSearchingAdmins ? mainStore.adminsFound : mainStore.admins);
    const currentAdminId = ref(0);
    ref(false);
    ref(false);
    const isModalMessagesActive = ref(false);
    const perPage = ref(10);
    const currentPage = ref(0);
    const checkedRows = ref([]);
    const itemsPaginated = computed(
      () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    );
    const numPages = computed(() => Math.ceil(items.value.length / perPage.value));
    const currentPageHuman = computed(() => currentPage.value + 1);
    const pagesList = computed(() => {
      const pagesList2 = [];
      for (let i = 0; i < numPages.value; i++) {
        pagesList2.push(i);
      }
      return pagesList2;
    });
    const remove = (arr, cb) => {
      const newArr = [];
      arr.forEach((item) => {
        if (!cb(item)) {
          newArr.push(item);
        }
      });
      return newArr;
    };
    const checked = (isChecked, client) => {
      if (isChecked) {
        checkedRows.value.push(client);
      } else {
        checkedRows.value = remove(checkedRows.value, (row) => row.id === client.id);
      }
    };
    const deleteAdmin = async () => {
      const path = proxyBaseUrl + "remove-admin";
      await $fetch(path, {
        method: "POST",
        body: {
          id: currentAdminId.value,
          token: etoken.value
        }
      }).then((r) => {
        if (r.message === "ok") {
          isModalMessagesActive.value = false;
          mainStore.getAdminsList();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: isModalMessagesActive.value,
        "onUpdate:modelValue": ($event) => isModalMessagesActive.value = $event,
        title: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>\u0414\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E.</p>`);
            _push2(ssrRenderComponent(_sfc_main$6, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1$1, {
                    color: "danger",
                    onClick: ($event) => deleteAdmin(),
                    label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1$1, {
                    color: "info",
                    outline: "",
                    onClick: ($event) => {
                      currentAdminId.value = 0;
                      isModalMessagesActive.value = false;
                    },
                    label: "\u041E\u0442\u043C\u0435\u043D\u0430"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1$1, {
                      color: "danger",
                      onClick: ($event) => deleteAdmin(),
                      label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
                    }, null, 8, ["onClick"]),
                    createVNode(_sfc_main$1$1, {
                      color: "info",
                      outline: "",
                      onClick: ($event) => {
                        currentAdminId.value = 0;
                        isModalMessagesActive.value = false;
                      },
                      label: "\u041E\u0442\u043C\u0435\u043D\u0430"
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", null, "\u0414\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E."),
              createVNode(_sfc_main$6, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1$1, {
                    color: "danger",
                    onClick: ($event) => deleteAdmin(),
                    label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
                  }, null, 8, ["onClick"]),
                  createVNode(_sfc_main$1$1, {
                    color: "info",
                    outline: "",
                    onClick: ($event) => {
                      currentAdminId.value = 0;
                      isModalMessagesActive.value = false;
                    },
                    label: "\u041E\u0442\u043C\u0435\u043D\u0430"
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (checkedRows.value.length) {
        _push(`<div class="p-3 bg-gray-100/50 dark:bg-slate-800"><!--[-->`);
        ssrRenderList(checkedRows.value, (checkedRow) => {
          _push(`<span class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">${ssrInterpolate(checkedRow.name)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table><thead><tr>`);
      if (__props.checkable) {
        _push(`<th></th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<th>\u0418\u043C\u044F, \u0424\u0430\u043C\u0438\u043B\u0438\u044F</th><th>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</th><th>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</th><th>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr>`);
        if (__props.checkable) {
          _push(ssrRenderComponent(_sfc_main$7, {
            onChecked: ($event) => checked($event, client)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<td data-label="\u0418\u043C\u044F, \u0424\u0430\u043C\u0438\u043B\u0438\u044F">${ssrInterpolate(client.fio.length > 0 ? client.fio : "---")}</td><td data-label="\u0422\u0435\u043B\u0435\u0444\u043E\u043D">${ssrInterpolate(client.phone.length > 0 ? client.phone : "---")}</td><td data-label="\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C">`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          color: "info",
          label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
          to: `/admins/edit/${client.id}`
        }, null, _parent));
        _push(`</td><td data-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C">`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          color: "info",
          label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
          onClick: ($event) => {
            currentAdminId.value = client.id;
            isModalMessagesActive.value = true;
          }
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$8, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(pagesList.value, (page) => {
                    _push3(ssrRenderComponent(_sfc_main$1$1, {
                      key: page,
                      active: page === currentPage.value,
                      label: page + 1,
                      small: "",
                      outline: unref(styleStore).darkMode,
                      onClick: ($event) => currentPage.value = page
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(pagesList.value, (page) => {
                      return openBlock(), createBlock(_sfc_main$1$1, {
                        key: page,
                        active: page === currentPage.value,
                        label: page + 1,
                        small: "",
                        outline: unref(styleStore).darkMode,
                        onClick: ($event) => currentPage.value = page
                      }, null, 8, ["active", "label", "outline", "onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<small${_scopeId}>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${ssrInterpolate(currentPageHuman.value)} \u0438\u0437 ${ssrInterpolate(numPages.value)}</small>`);
          } else {
            return [
              createVNode(_sfc_main$6, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(pagesList.value, (page) => {
                    return openBlock(), createBlock(_sfc_main$1$1, {
                      key: page,
                      active: page === currentPage.value,
                      label: page + 1,
                      small: "",
                      outline: unref(styleStore).darkMode,
                      onClick: ($event) => currentPage.value = page
                    }, null, 8, ["active", "label", "outline", "onClick"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode("small", null, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 " + toDisplayString(currentPageHuman.value) + " \u0438\u0437 " + toDisplayString(numPages.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableSampleAdmins.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const handleSearchString = (value) => {
      mainStore.setSearchingAdminsQuery(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_TableSampleAdmins = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1$1, {
                          color: "success",
                          label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                          to: "/admins/new"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1$1, {
                            color: "success",
                            label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                            to: "/admins/new"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: "\xA0",
                    "has-table": "",
                    "has-searchbar": "",
                    onSearchString: handleSearchString
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableSampleAdmins, { checkable: false }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableSampleAdmins, { checkable: false })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiChartTimelineVariant),
                      title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1$1, {
                          color: "success",
                          label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                          to: "/admins/new"
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    createVNode(_sfc_main$4, {
                      icon: unref(mdiAccountMultiplePlus),
                      title: "\xA0",
                      "has-table": "",
                      "has-searchbar": "",
                      onSearchString: handleSearchString
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TableSampleAdmins, { checkable: false })
                      ]),
                      _: 1
                    }, 8, ["icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1$1, {
                        color: "success",
                        label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                        to: "/admins/new"
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(_sfc_main$4, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: "\xA0",
                    "has-table": "",
                    "has-searchbar": "",
                    onSearchString: handleSearchString
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_TableSampleAdmins, { checkable: false })
                    ]),
                    _: 1
                  }, 8, ["icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admins/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DRPHaumE.mjs.map
