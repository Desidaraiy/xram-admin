import { _ as _sfc_main$4 } from './CardBoxModal-BXsowXkc.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$5 } from './FormControl-CBzBHuLM.mjs';
import { a as _sfc_main$1$1, _ as _sfc_main$7 } from './CardBox-SmAHmX3l.mjs';
import { a as useMainStore, _ as __nuxt_component_0, e as useStyleStore, p as proxyBaseUrl } from './server.mjs';
import { _ as _sfc_main$6 } from './SectionTitleLineWithButton-7kpWGLD1.mjs';
import { _ as _sfc_main$b } from './colors-BYRMrYIa.mjs';
import { _ as _sfc_main$8 } from './TableCheckboxCell-DxFE6wzt.mjs';
import { ref, computed, withCtx, createVNode, unref, openBlock, createBlock, useSSRContext, createTextVNode, Fragment, renderList, toDisplayString } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiAccountMultiplePlus, mdiClose } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$9 } from './BaseLevel-0o1EWMay.mjs';
import { _ as _sfc_main$a } from './BaseButtons-BgEV_qrs.mjs';
import { _ as _sfc_main$3 } from './SectionMain-oKKzVNTB.mjs';
import './OverlayLayer-Ca6LWwyv.mjs';
import './nuxt-link-B4HAH-BK.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/ufo/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/h3/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/devalue/index.js';
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
import 'file:///Users/admin/work/teleos-admin/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/maska/dist/maska.js';

const _sfc_main$2 = {
  __name: "TableGroupsClients",
  __ssrInlineRender: true,
  props: {
    checkable: Boolean
  },
  setup(__props) {
    const styleStore = useStyleStore();
    const mainStore = useMainStore();
    const items = computed(() => mainStore.currentGroupClients.length ? mainStore.currentGroupClients : []);
    const perPage = ref(10);
    const currentPage = ref(0);
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
    const checkedRows = ref([]);
    const isModalDeletionActive = ref(false);
    const isModalDeletionUsersActive = ref(false);
    const currentClientId = ref(0);
    const currentGroup = computed(() => mainStore.currentGroup);
    const deleteSelectedUserFromGroup = async () => {
      await mainStore.deleteClientFromGroup([currentClientId.value], currentGroup.value.id);
      isModalDeletionActive.value = false;
      mainStore.setCurrentGroup(mainStore.currentGroup.id);
    };
    const deleteSelectedUsersFromGroup = async () => {
      const usersIdArr = checkedRows.value.map((user) => user.id);
      await mainStore.deleteClientFromGroup(usersIdArr, currentGroup.value.id);
      isModalDeletionUsersActive.value = false;
      mainStore.setCurrentGroup(mainStore.currentGroup.id);
      checkedRows.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBoxModal = _sfc_main$4;
      const _component_BaseIcon = _sfc_main$b;
      const _component_TableCheckboxCell = _sfc_main$8;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isModalDeletionActive.value,
        "onUpdate:modelValue": ($event) => isModalDeletionActive.value = $event,
        title: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B",
        button: "danger",
        "has-cancel": "",
        onConfirm: ($event) => deleteSelectedUserFromGroup()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E</p>`);
          } else {
            return [
              createVNode("p", null, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isModalDeletionUsersActive.value,
        "onUpdate:modelValue": ($event) => isModalDeletionUsersActive.value = $event,
        title: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B",
        button: "danger",
        "has-cancel": "",
        onConfirm: ($event) => deleteSelectedUsersFromGroup()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E</p>`);
          } else {
            return [
              createVNode("p", null, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (checkedRows.value.length) {
        _push(`<div class="p-3 bg-gray-100/50 dark:bg-slate-800 flex flex-row justify-between items-center"><div class="flex flex-row justify-start items-center overflow-x-auto"><!--[-->`);
        ssrRenderList(checkedRows.value, (checkedRow) => {
          _push(`<div class="flex flex-row justify-start items-center bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-sm mr-2"><span class="text-sm">${ssrInterpolate(checkedRow.phone)}</span><div class="flex flex-col items-center justify-center p-1 text-slate-800 dark:text-slate-200">`);
          _push(ssrRenderComponent(_component_BaseIcon, {
            path: unref(mdiClose),
            size: "14",
            onClick: ($event) => checked(false, checkedRow)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B",
          color: "danger",
          small: "",
          onClick: ($event) => isModalDeletionUsersActive.value = true
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table><thead><tr><th></th><th>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</th><th>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr>`);
        _push(ssrRenderComponent(_component_TableCheckboxCell, {
          onChecked: ($event) => checked($event, client)
        }, null, _parent));
        _push(`<td data-label="\u0422\u0435\u043B\u0435\u0444\u043E\u043D">${ssrInterpolate(client.phone)}</td><td data-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C">`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          color: "danger",
          label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
          onClick: ($event) => {
            isModalDeletionActive.value = true;
            currentClientId.value = client.id;
          }
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$9, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, null, {
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
              createVNode(_sfc_main$a, null, {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableGroupsClients.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TableSampleGroups",
  __ssrInlineRender: true,
  props: {
    checkable: Boolean
  },
  setup(__props) {
    const styleStore = useStyleStore();
    const mainStore = useMainStore();
    const items = computed(() => mainStore.isSearchingGroups ? mainStore.groupsFound : mainStore.groups);
    ref(false);
    const isModalDangerActive = ref(false);
    ref(false);
    const isModalDeletingActive = ref(false);
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
    const isModalUsersActive = ref(false);
    const checked = (isChecked, client) => {
      if (isChecked) {
        checkedRows.value.push(client);
      } else {
        checkedRows.value = remove(checkedRows.value, (row) => row.id === client.id);
      }
    };
    const setCurrentGroup = async (id) => {
      mainStore.setCurrentGroup(id);
    };
    const deleteGroup = async () => {
      mainStore.deleteCurrentGroup();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TableGroupsClients = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: isModalDeletingActive.value,
        "onUpdate:modelValue": ($event) => isModalDeletingActive.value = $event,
        title: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B",
        button: "danger",
        "button-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        "has-cancel": "",
        onConfirm: ($event) => deleteGroup()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>\u0414\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</p>`);
          } else {
            return [
              createVNode("p", null, "\u0414\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: isModalDangerActive.value,
        "onUpdate:modelValue": ($event) => isModalDangerActive.value = $event,
        "large-title": "Please confirm",
        button: "danger",
        "has-cancel": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Lorem ipsum dolor sit amet <b${_scopeId}>adipiscing elit</b></p><p${_scopeId}>This is sample modal</p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode("Lorem ipsum dolor sit amet "),
                createVNode("b", null, "adipiscing elit")
              ]),
              createVNode("p", null, "This is sample modal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: isModalUsersActive.value,
        "onUpdate:modelValue": ($event) => isModalUsersActive.value = $event,
        title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
        checkable: true,
        "has-table": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableGroupsClients, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableGroupsClients)
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
      _push(`<th>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</th><th>\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430</th><th>\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435</th><th>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</th><th>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr>`);
        if (__props.checkable) {
          _push(ssrRenderComponent(_sfc_main$8, {
            onChecked: ($event) => checked($event, client)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<td data-label="\u0418\u043C\u044F">${ssrInterpolate(client.name.length > 0 ? client.name : "---")}</td><td data-label="\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430">`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          color: "info",
          label: "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430",
          to: "pushmailing?groupid=" + client.id
        }, null, _parent));
        _push(`</td><td data-label="\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435">`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          color: "success",
          label: "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
          to: "advertising/new?groupid=" + client.id
        }, null, _parent));
        _push(`</td><td data-label="\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C">`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          color: "warning",
          label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
          onClick: ($event) => {
            setCurrentGroup(client.id);
            isModalUsersActive.value = true;
          }
        }, null, _parent));
        _push(`</td><td data-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C">`);
        _push(ssrRenderComponent(_sfc_main$1$1, {
          color: "danger",
          label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
          onClick: ($event) => {
            setCurrentGroup(client.id);
            isModalDeletingActive.value = true;
          }
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$9, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, null, {
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
              createVNode(_sfc_main$a, null, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableSampleGroups.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "groups",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const isModalActive = ref(false);
    const groupName = ref("");
    const isGroupsEmpty = computed(() => mainStore.groups.length === 0);
    const addGroup = async () => {
      const path = proxyBaseUrl + "group";
      await $fetch(path, {
        method: "POST",
        body: { token: mainStore.userToken, group_name: groupName.value, action: "add", group_state: 1 }
      }).then((r) => {
        if (r.message === "ok") {
          isModalActive.value = false;
          groupName.value = "";
          mainStore.getGroupsList();
        } else {
          alert("\u041E\u0448\u0438\u0431\u043A\u0430: ", r.message);
        }
      });
    };
    const handleSearchString = (value) => {
      mainStore.setSearchingGroupsQuery(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBoxModal = _sfc_main$4;
      const _component_FormField = _sfc_main$2$1;
      const _component_FormControl = _sfc_main$5;
      const _component_BaseButton = _sfc_main$1$1;
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLineWithButton = _sfc_main$6;
      const _component_CardBox = _sfc_main$7;
      const _component_TableSampleGroups = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isModalActive.value,
        "onUpdate:modelValue": ($event) => isModalActive.value = $event,
        title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormField, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              help: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormControl, {
                    modelValue: groupName.value,
                    "onUpdate:modelValue": ($event) => groupName.value = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormControl, {
                      modelValue: groupName.value,
                      "onUpdate:modelValue": ($event) => groupName.value = $event,
                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "info",
              label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443",
              onClick: ($event) => addGroup()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormField, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                help: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormControl, {
                    modelValue: groupName.value,
                    "onUpdate:modelValue": ($event) => groupName.value = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                    type: "text"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "info",
                label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443",
                onClick: ($event) => addGroup()
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: "\u0413\u0440\u0443\u043F\u043F\u044B",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "success",
                          label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                          onClick: ($event) => isModalActive.value = true
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                            onClick: ($event) => isModalActive.value = true
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (!unref(isGroupsEmpty)) {
                    _push3(ssrRenderComponent(_component_CardBox, {
                      icon: unref(mdiAccountMultiplePlus),
                      title: "\u0413\u0440\u0443\u043F\u043F\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
                      "has-table": "",
                      "has-searchbar": "",
                      onSearchString: handleSearchString
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableSampleGroups, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableSampleGroups)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="flex flex-col h-192 items-center justify-center"${_scopeId2}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId2}>\u0413\u0440\u0443\u043F\u043F\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B</h2></div>`);
                  }
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: unref(mdiAccountMultiplePlus),
                      title: "\u0413\u0440\u0443\u043F\u043F\u044B",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "success",
                          label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                          onClick: ($event) => isModalActive.value = true
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    !unref(isGroupsEmpty) ? (openBlock(), createBlock(_component_CardBox, {
                      key: 0,
                      icon: unref(mdiAccountMultiplePlus),
                      title: "\u0413\u0440\u0443\u043F\u043F\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
                      "has-table": "",
                      "has-searchbar": "",
                      onSearchString: handleSearchString
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TableSampleGroups)
                      ]),
                      _: 1
                    }, 8, ["icon"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col h-192 items-center justify-center"
                    }, [
                      createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B")
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: "\u0413\u0440\u0443\u043F\u043F\u044B",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, {
                        color: "success",
                        label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
                        onClick: ($event) => isModalActive.value = true
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  !unref(isGroupsEmpty) ? (openBlock(), createBlock(_component_CardBox, {
                    key: 0,
                    icon: unref(mdiAccountMultiplePlus),
                    title: "\u0413\u0440\u0443\u043F\u043F\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
                    "has-table": "",
                    "has-searchbar": "",
                    onSearchString: handleSearchString
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_TableSampleGroups)
                    ]),
                    _: 1
                  }, 8, ["icon"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col h-192 items-center justify-center"
                  }, [
                    createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/groups.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=groups-DbjZ6xF7.mjs.map
