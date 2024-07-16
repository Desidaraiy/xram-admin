import { d as useCookie, t as tokenCookieName, e as useStyleStore, a as useMainStore, p as proxyBaseUrl, _ as __nuxt_component_0 } from "../server.mjs";
import { computed, ref, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./CardBoxModal-BXsowXkc.js";
import { _ as _sfc_main$5 } from "./TableCheckboxCell-DxFE6wzt.js";
import { _ as _sfc_main$6 } from "./BaseLevel-0o1EWMay.js";
import { _ as _sfc_main$3 } from "./BaseButtons-BgEV_qrs.js";
import { a as _sfc_main$4, _ as _sfc_main$9 } from "./CardBox-SmAHmX3l.js";
import { mdiChartTimelineVariant, mdiAccountMultiplePlus } from "@mdi/js";
import { _ as _sfc_main$7 } from "./SectionMain-oKKzVNTB.js";
import { _ as _sfc_main$8 } from "./SectionTitleLineWithButton-7kpWGLD1.js";
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
import "./OverlayLayer-Ca6LWwyv.js";
import "./nuxt-link-B4HAH-BK.js";
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
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: isModalMessagesActive.value,
        "onUpdate:modelValue": ($event) => isModalMessagesActive.value = $event,
        title: "Удаление администратора"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Данное действие необратимо.</p>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    color: "danger",
                    onClick: ($event) => deleteAdmin(),
                    label: "Удалить"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    color: "info",
                    outline: "",
                    onClick: ($event) => {
                      currentAdminId.value = 0;
                      isModalMessagesActive.value = false;
                    },
                    label: "Отмена"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      color: "danger",
                      onClick: ($event) => deleteAdmin(),
                      label: "Удалить"
                    }, null, 8, ["onClick"]),
                    createVNode(_sfc_main$4, {
                      color: "info",
                      outline: "",
                      onClick: ($event) => {
                        currentAdminId.value = 0;
                        isModalMessagesActive.value = false;
                      },
                      label: "Отмена"
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", null, "Данное действие необратимо."),
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, {
                    color: "danger",
                    onClick: ($event) => deleteAdmin(),
                    label: "Удалить"
                  }, null, 8, ["onClick"]),
                  createVNode(_sfc_main$4, {
                    color: "info",
                    outline: "",
                    onClick: ($event) => {
                      currentAdminId.value = 0;
                      isModalMessagesActive.value = false;
                    },
                    label: "Отмена"
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
      _push(`<th>Имя, Фамилия</th><th>Телефон</th><th>Редактировать</th><th>Удалить</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr>`);
        if (__props.checkable) {
          _push(ssrRenderComponent(_sfc_main$5, {
            onChecked: ($event) => checked($event, client)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<td data-label="Имя, Фамилия">${ssrInterpolate(client.fio.length > 0 ? client.fio : "---")}</td><td data-label="Телефон">${ssrInterpolate(client.phone.length > 0 ? client.phone : "---")}</td><td data-label="Редактировать">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          color: "info",
          label: "Редактировать",
          to: `/admins/edit/${client.id}`
        }, null, _parent));
        _push(`</td><td data-label="Удалить">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          color: "info",
          label: "Удалить",
          onClick: ($event) => {
            currentAdminId.value = client.id;
            isModalMessagesActive.value = true;
          }
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$6, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(pagesList.value, (page) => {
                    _push3(ssrRenderComponent(_sfc_main$4, {
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
                      return openBlock(), createBlock(_sfc_main$4, {
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
            _push2(`<small${_scopeId}>Страница ${ssrInterpolate(currentPageHuman.value)} из ${ssrInterpolate(numPages.value)}</small>`);
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(pagesList.value, (page) => {
                    return openBlock(), createBlock(_sfc_main$4, {
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
              createVNode("small", null, "Страница " + toDisplayString(currentPageHuman.value) + " из " + toDisplayString(numPages.value), 1)
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
            _push2(ssrRenderComponent(_sfc_main$7, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "Администраторы",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, {
                          color: "success",
                          label: "Добавить",
                          to: "/admins/new"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4, {
                            color: "success",
                            label: "Добавить",
                            to: "/admins/new"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: " ",
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
                    createVNode(_sfc_main$8, {
                      icon: unref(mdiChartTimelineVariant),
                      title: "Администраторы",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          color: "success",
                          label: "Добавить",
                          to: "/admins/new"
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    createVNode(_sfc_main$9, {
                      icon: unref(mdiAccountMultiplePlus),
                      title: " ",
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
              createVNode(_sfc_main$7, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "Администраторы",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4, {
                        color: "success",
                        label: "Добавить",
                        to: "/admins/new"
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(_sfc_main$9, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: " ",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DRPHaumE.js.map
