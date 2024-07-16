import { _ as _sfc_main$6 } from "./CardBoxModal-BXsowXkc.js";
import { _ as _sfc_main$a, a as _sfc_main$b } from "./FormControl-CBzBHuLM.js";
import { a as _sfc_main$3, _ as _sfc_main$d } from "./CardBox-SmAHmX3l.js";
import { e as useStyleStore, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$c } from "./SectionTitleLineWithButton-7kpWGLD1.js";
import { _ as _sfc_main$7 } from "./colors-BYRMrYIa.js";
import { _ as _sfc_main$8 } from "./TableCheckboxCell-DxFE6wzt.js";
import { computed, ref, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { mdiClose, mdiAccountMultiplePlus } from "@mdi/js";
import { _ as _sfc_main$4 } from "./BaseLevel-0o1EWMay.js";
import { _ as _sfc_main$5 } from "./BaseButtons-BgEV_qrs.js";
import { _ as _sfc_main$9 } from "./SectionMain-oKKzVNTB.js";
import "./OverlayLayer-Ca6LWwyv.js";
import "./nuxt-link-B4HAH-BK.js";
import "ufo";
import "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "maska";
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
      const _component_CardBoxModal = _sfc_main$6;
      const _component_BaseIcon = _sfc_main$7;
      const _component_TableCheckboxCell = _sfc_main$8;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isModalDeletionActive.value,
        "onUpdate:modelValue": ($event) => isModalDeletionActive.value = $event,
        title: "Подтвердите удаление пользователя из группы",
        button: "danger",
        "has-cancel": "",
        onConfirm: ($event) => deleteSelectedUserFromGroup()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Действие необратимо</p>`);
          } else {
            return [
              createVNode("p", null, "Действие необратимо")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isModalDeletionUsersActive.value,
        "onUpdate:modelValue": ($event) => isModalDeletionUsersActive.value = $event,
        title: "Подтвердите удаление пользователей из группы",
        button: "danger",
        "has-cancel": "",
        onConfirm: ($event) => deleteSelectedUsersFromGroup()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Действие необратимо</p>`);
          } else {
            return [
              createVNode("p", null, "Действие необратимо")
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
        _push(ssrRenderComponent(_sfc_main$3, {
          label: "Удалить из группы",
          color: "danger",
          small: "",
          onClick: ($event) => isModalDeletionUsersActive.value = true
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table><thead><tr><th></th><th>Телефон</th><th>Удалить</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr>`);
        _push(ssrRenderComponent(_component_TableCheckboxCell, {
          onChecked: ($event) => checked($event, client)
        }, null, _parent));
        _push(`<td data-label="Телефон">${ssrInterpolate(client.phone)}</td><td data-label="Удалить">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          color: "danger",
          label: "Удалить",
          onClick: ($event) => {
            isModalDeletionActive.value = true;
            currentClientId.value = client.id;
          }
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$4, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(pagesList.value, (page) => {
                    _push3(ssrRenderComponent(_sfc_main$3, {
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
                      return openBlock(), createBlock(_sfc_main$3, {
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
              createVNode(_sfc_main$5, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(pagesList.value, (page) => {
                    return openBlock(), createBlock(_sfc_main$3, {
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
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalDeletingActive.value,
        "onUpdate:modelValue": ($event) => isModalDeletingActive.value = $event,
        title: "Подтвердите удаление группы",
        button: "danger",
        "button-label": "Удалить",
        "has-cancel": "",
        onConfirm: ($event) => deleteGroup()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Данное действие нельзя отменить</p>`);
          } else {
            return [
              createVNode("p", null, "Данное действие нельзя отменить")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
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
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalUsersActive.value,
        "onUpdate:modelValue": ($event) => isModalUsersActive.value = $event,
        title: "Пользователи",
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
      _push(`<th>Название</th><th>Рассылка</th><th>Объявление</th><th>Редактировать</th><th>Удалить</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr>`);
        if (__props.checkable) {
          _push(ssrRenderComponent(_sfc_main$8, {
            onChecked: ($event) => checked($event, client)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<td data-label="Имя">${ssrInterpolate(client.name.length > 0 ? client.name : "---")}</td><td data-label="Рассылка">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          color: "info",
          label: "Рассылка",
          to: "pushmailing?groupid=" + client.id
        }, null, _parent));
        _push(`</td><td data-label="Объявление">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          color: "success",
          label: "Объявление",
          to: "advertising/new?groupid=" + client.id
        }, null, _parent));
        _push(`</td><td data-label="Редактировать">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          color: "warning",
          label: "Редактировать",
          onClick: ($event) => {
            setCurrentGroup(client.id);
            isModalUsersActive.value = true;
          }
        }, null, _parent));
        _push(`</td><td data-label="Удалить">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          color: "danger",
          label: "Удалить",
          onClick: ($event) => {
            setCurrentGroup(client.id);
            isModalDeletingActive.value = true;
          }
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$4, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(pagesList.value, (page) => {
                    _push3(ssrRenderComponent(_sfc_main$3, {
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
                      return openBlock(), createBlock(_sfc_main$3, {
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
              createVNode(_sfc_main$5, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(pagesList.value, (page) => {
                    return openBlock(), createBlock(_sfc_main$3, {
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
          alert("Ошибка: ", r.message);
        }
      });
    };
    const handleSearchString = (value) => {
      mainStore.setSearchingGroupsQuery(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBoxModal = _sfc_main$6;
      const _component_FormField = _sfc_main$a;
      const _component_FormControl = _sfc_main$b;
      const _component_BaseButton = _sfc_main$3;
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLineWithButton = _sfc_main$c;
      const _component_CardBox = _sfc_main$d;
      const _component_TableSampleGroups = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isModalActive.value,
        "onUpdate:modelValue": ($event) => isModalActive.value = $event,
        title: "Добавить группу"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormField, {
              label: "Название",
              help: "Название для группы"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormControl, {
                    modelValue: groupName.value,
                    "onUpdate:modelValue": ($event) => groupName.value = $event,
                    placeholder: "Название",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormControl, {
                      modelValue: groupName.value,
                      "onUpdate:modelValue": ($event) => groupName.value = $event,
                      placeholder: "Название",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "info",
              label: "Создать группу",
              onClick: ($event) => addGroup()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormField, {
                label: "Название",
                help: "Название для группы"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormControl, {
                    modelValue: groupName.value,
                    "onUpdate:modelValue": ($event) => groupName.value = $event,
                    placeholder: "Название",
                    type: "text"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "info",
                label: "Создать группу",
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
            _push2(ssrRenderComponent(_sfc_main$9, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: "Группы",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "success",
                          label: "Добавить",
                          onClick: ($event) => isModalActive.value = true
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "Добавить",
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
                      title: "Группы клиентов",
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
                    _push3(`<div class="flex flex-col h-192 items-center justify-center"${_scopeId2}><h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"${_scopeId2}>Группы не найдены</h2></div>`);
                  }
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: unref(mdiAccountMultiplePlus),
                      title: "Группы",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "success",
                          label: "Добавить",
                          onClick: ($event) => isModalActive.value = true
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    !unref(isGroupsEmpty) ? (openBlock(), createBlock(_component_CardBox, {
                      key: 0,
                      icon: unref(mdiAccountMultiplePlus),
                      title: "Группы клиентов",
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
                      createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "Группы не найдены")
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, null, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiAccountMultiplePlus),
                    title: "Группы",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, {
                        color: "success",
                        label: "Добавить",
                        onClick: ($event) => isModalActive.value = true
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  !unref(isGroupsEmpty) ? (openBlock(), createBlock(_component_CardBox, {
                    key: 0,
                    icon: unref(mdiAccountMultiplePlus),
                    title: "Группы клиентов",
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
                    createVNode("h2", { class: "text-xl text-gray-700 dark:text-gray-300 my-2" }, "Группы не найдены")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=groups-DbjZ6xF7.js.map
