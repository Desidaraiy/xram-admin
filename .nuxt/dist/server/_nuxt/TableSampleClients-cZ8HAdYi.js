import { _ as _sfc_main$8 } from "./colors-BYRMrYIa.js";
import { _ as _sfc_main$5, a as _sfc_main$9 } from "./FormControl-CBzBHuLM.js";
import { watch, computed, ref, reactive, withCtx, withDirectives, createVNode, vModelText, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { e as useStyleStore, a as useMainStore, d as useCookie, t as tokenCookieName, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$3 } from "./BaseLevel-0o1EWMay.js";
import { _ as _sfc_main$4 } from "./BaseButtons-BgEV_qrs.js";
import { a as _sfc_main$2 } from "./CardBox-SmAHmX3l.js";
import { mdiCellphone, mdiClose } from "@mdi/js";
import { _ as _sfc_main$6 } from "./CardBoxModal-BXsowXkc.js";
import { _ as _sfc_main$7 } from "./TableCheckboxCell-DxFE6wzt.js";
const _sfc_main$1 = {
  __name: "TableMessages",
  __ssrInlineRender: true,
  props: {
    checkable: Boolean,
    isActive: Boolean
  },
  emits: ["reset-dates"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    watch(() => props.isActive, (newValue) => {
      if (newValue) {
        resetDates();
        mainStore.isSearchingMessages = false;
      }
    });
    const emit = __emit;
    const styleStore = useStyleStore();
    const mainStore = useMainStore();
    const items = computed(() => mainStore.isSearchingMessages ? mainStore.foundMessages : mainStore.messages);
    const perPage = ref(30);
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
    const searchDates = reactive({
      startDate: "",
      endDate: ""
    });
    const resetDates = () => {
      searchDates.startDate = "";
      searchDates.endDate = "";
      emit("reset-dates");
    };
    watch(searchDates, () => {
      if (searchDates.startDate != "" || searchDates.endDate != "") {
        mainStore.getMessagesList(searchDates);
      } else {
        mainStore.isSearchingMessages = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormField = _sfc_main$5;
      _push(`<!--[--><div class="flex flex-row mx-auto py-4 justify-around items-start"><span class="flex flex-col items-center my-auto">Выберите даты</span>`);
      _push(ssrRenderComponent(_component_FormField, { label: "Дата, От" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="date"${ssrRenderAttr("value", searchDates.startDate)} class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800"${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "date",
                "onUpdate:modelValue": ($event) => searchDates.startDate = $event,
                class: "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, searchDates.startDate]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, { label: "Дата, До" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="date"${ssrRenderAttr("value", searchDates.endDate)} class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800"${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "date",
                "onUpdate:modelValue": ($event) => searchDates.endDate = $event,
                class: "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, searchDates.endDate]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-row mx-auto py-4 px justify-start items-start">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        label: "Сбросить период",
        color: "info",
        small: "",
        onClick: resetDates
      }, null, _parent));
      _push(`</div><table><thead><tr><th>Сообщение</th><th>Дата</th><th>Объект</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr><td data-label="Сообщение">${ssrInterpolate(client.message)}</td><td data-label="Дата">${ssrInterpolate(client.date)}</td><td data-label="Объект">${ssrInterpolate(client.object != void 0 && client.object.length != 0 ? client.object : "---")}</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(pagesList.value, (page) => {
                    _push3(ssrRenderComponent(_sfc_main$2, {
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
                      return openBlock(), createBlock(_sfc_main$2, {
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
              createVNode(_sfc_main$4, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(pagesList.value, (page) => {
                    return openBlock(), createBlock(_sfc_main$2, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableMessages.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "TableSampleClients",
  __ssrInlineRender: true,
  props: {
    checkable: Boolean
  },
  setup(__props) {
    const etoken = useCookie(tokenCookieName, { sameSite: "None", secure: true });
    const styleStore = useStyleStore();
    const mainStore = useMainStore();
    const items = computed(
      () => mainStore.isSearchingClients ? mainStore.clientsFound : mainStore.clients
    );
    const perPage = ref(10);
    const currentPage = ref(0);
    const checkedRows = ref([]);
    const itemsPaginated = computed(
      () => items.value.slice(
        perPage.value * currentPage.value,
        perPage.value * (currentPage.value + 1)
      )
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
        checkedRows.value = remove(
          checkedRows.value,
          (row) => row.id === client.id
        );
      }
    };
    const isDevicesModalActive = ref(false);
    const isModalPhoneActive = ref(false);
    const userDevices = ref([]);
    const groups = computed(() => mainStore.groups);
    const selectedGroupId = ref(0);
    const addUsersToGroup = async () => {
      const path = proxyBaseUrl + "add-user-to-group";
      const usersIdArr = checkedRows.value.map((user) => user.id);
      await $fetch(path, {
        method: "POST",
        body: {
          group_id: selectedGroupId.value.value,
          user_id: usersIdArr,
          token: etoken.value
        }
      }).then((r) => {
        if (r.message === "ok") {
          isAddingToGroupModalActive.value = false;
          checkedRows.value = [];
          mainStore.getGroupsList();
        }
      });
    };
    const isModalPincodeActive = ref(false);
    const tempPinCode = ref("Нажмите кнопку ниже");
    watch(isModalPincodeActive, () => {
      if (isDevicesModalActive.value == false) {
        tempPinCode.value = "Нажмите кнопку ниже";
      }
    });
    const getPinCode = async () => {
      const path2 = proxyBaseUrl + "set-user-pin";
      await $fetch(path2, {
        method: "POST",
        body: {
          user_id: currentClientId.value,
          password: tempPinCode.value,
          token: etoken.value
        }
      }).then((r) => {
        if (r.message === "ok") {
          isModalPincodeActive.value = false;
          tempPinCode.value = "";
        }
      });
    };
    const isModalMessageActive = ref(false);
    const isModalSuccessActive = ref(false);
    const isModalErrorActive = ref(false);
    const isAddingToGroupModalActive = ref(false);
    const messageToUser = ref("");
    const currentClientPhone = ref("");
    const currentClientId = ref(0);
    const sendMessage = async () => {
      const path = proxyBaseUrl + "send-push";
      await $fetch(path, {
        method: "POST",
        body: {
          phone: currentClientPhone.value,
          text: messageToUser.value,
          token: etoken.value
        }
      }).then((r) => {
        messageToUser.value = "";
        if (r.message === "ok") {
          isModalMessageActive.value = false;
          isModalSuccessActive.value = true;
        } else {
          isModalErrorActive.value = true;
        }
      });
    };
    const isModalMessagesActive = ref(false);
    const setUserPhone = async () => {
      const path = proxyBaseUrl + "update-user-phone";
      await $fetch(path, {
        method: "POST",
        body: {
          user_id: currentClientId.value,
          token: etoken.value,
          phone: currentClientPhone.value
        }
      }).then((r) => {
        if (r.message === "ok") {
          mainStore.getClientsList();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIcon = _sfc_main$8;
      const _component_FormField = _sfc_main$5;
      const _component_FormControl = _sfc_main$9;
      const _component_TableMessages = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalSuccessActive.value,
        "onUpdate:modelValue": ($event) => isModalSuccessActive.value = $event,
        title: "Операция завершена"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="my-2"${_scopeId}>Операция завершена успешно</h2>`);
          } else {
            return [
              createVNode("h2", { class: "my-2" }, "Операция завершена успешно")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalErrorActive.value,
        "onUpdate:modelValue": ($event) => isModalErrorActive.value = $event,
        title: "Операция завершена"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="my-2"${_scopeId}>Возникла ошибка, попробуйте позже.</h2>`);
          } else {
            return [
              createVNode("h2", { class: "my-2" }, "Возникла ошибка, попробуйте позже.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isDevicesModalActive.value,
        "onUpdate:modelValue": ($event) => isDevicesModalActive.value = $event,
        title: "Устройства пользователя"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><!--[-->`);
            ssrRenderList(userDevices.value, (device) => {
              _push2(`<div class="flex flex-col rounded-lg p-2 m-2 drop-shadow-lg bg-slate-200 dark:bg-slate-500"${_scopeId}><div class="flex flex-row items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseIcon, {
                path: unref(mdiCellphone),
                size: 50,
                h: "h-16",
                w: "w-16"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex flex-col"${_scopeId}><p class="text-gray-500 dark:text-slate-800 font-bold m-1"${_scopeId}>${ssrInterpolate(device.phone_type)}</p><p class="text-gray-500 dark:text-slate-800 font-bold m-1"${_scopeId}> ПО: ${ssrInterpolate(device.phone_os)}, версия Сэйв.info: ${ssrInterpolate(device.app_version)}</p></div></div><div class="flex flex-col"${_scopeId}><p class="text-gray-500 dark:text-slate-800 m-1"${_scopeId}> Зарегистрирован ${ssrInterpolate(device.register_date)}</p><p class="text-gray-500 dark:text-slate-800 m-1"${_scopeId}> Был в сети ${ssrInterpolate(device.last_online)}</p></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(userDevices.value, (device) => {
                  return openBlock(), createBlock("div", { class: "flex flex-col rounded-lg p-2 m-2 drop-shadow-lg bg-slate-200 dark:bg-slate-500" }, [
                    createVNode("div", { class: "flex flex-row items-center" }, [
                      createVNode(_component_BaseIcon, {
                        path: unref(mdiCellphone),
                        size: 50,
                        h: "h-16",
                        w: "w-16"
                      }, null, 8, ["path"]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("p", { class: "text-gray-500 dark:text-slate-800 font-bold m-1" }, toDisplayString(device.phone_type), 1),
                        createVNode("p", { class: "text-gray-500 dark:text-slate-800 font-bold m-1" }, " ПО: " + toDisplayString(device.phone_os) + ", версия Сэйв.info: " + toDisplayString(device.app_version), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("p", { class: "text-gray-500 dark:text-slate-800 m-1" }, " Зарегистрирован " + toDisplayString(device.register_date), 1),
                      createVNode("p", { class: "text-gray-500 dark:text-slate-800 m-1" }, " Был в сети " + toDisplayString(device.last_online), 1)
                    ])
                  ]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalPincodeActive.value,
        "onUpdate:modelValue": ($event) => isModalPincodeActive.value = $event,
        title: "Сброс пин-кода пользователя"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormField, { label: "Новый пинкод" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormControl, {
                    modelValue: tempPinCode.value,
                    "onUpdate:modelValue": ($event) => tempPinCode.value = $event,
                    placeholder: "4 цифры",
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormControl, {
                      modelValue: tempPinCode.value,
                      "onUpdate:modelValue": ($event) => tempPinCode.value = $event,
                      placeholder: "4 цифры",
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              color: "info",
              label: "Сменить пин-код",
              onClick: ($event) => getPinCode()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormField, { label: "Новый пинкод" }, {
                default: withCtx(() => [
                  createVNode(_component_FormControl, {
                    modelValue: tempPinCode.value,
                    "onUpdate:modelValue": ($event) => tempPinCode.value = $event,
                    placeholder: "4 цифры",
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                color: "info",
                label: "Сменить пин-код",
                onClick: ($event) => getPinCode()
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalMessageActive.value,
        "onUpdate:modelValue": ($event) => isModalMessageActive.value = $event,
        title: "Отправить сообщение пользователю"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormField, {
              label: "Сообщение",
              help: "Сообщение для пользователя"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormControl, {
                    modelValue: messageToUser.value,
                    "onUpdate:modelValue": ($event) => messageToUser.value = $event,
                    placeholder: "Сообщение",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormControl, {
                      modelValue: messageToUser.value,
                      "onUpdate:modelValue": ($event) => messageToUser.value = $event,
                      placeholder: "Сообщение",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              color: "info",
              label: "Отправить",
              onClick: ($event) => sendMessage()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormField, {
                label: "Сообщение",
                help: "Сообщение для пользователя"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormControl, {
                    modelValue: messageToUser.value,
                    "onUpdate:modelValue": ($event) => messageToUser.value = $event,
                    placeholder: "Сообщение",
                    type: "text"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                color: "info",
                label: "Отправить",
                onClick: ($event) => sendMessage()
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalPhoneActive.value,
        "onUpdate:modelValue": ($event) => isModalPhoneActive.value = $event,
        title: "Редактировать номер телефона пользователя"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormField, { label: "Номер телефона" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormControl, {
                    modelValue: currentClientPhone.value,
                    "onUpdate:modelValue": ($event) => currentClientPhone.value = $event,
                    placeholder: "Номер",
                    type: "number",
                    masked: true,
                    mask: "7##########"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormControl, {
                      modelValue: currentClientPhone.value,
                      "onUpdate:modelValue": ($event) => currentClientPhone.value = $event,
                      placeholder: "Номер",
                      type: "number",
                      masked: true,
                      mask: "7##########"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              color: "info",
              label: "Отправить",
              onClick: ($event) => setUserPhone()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormField, { label: "Номер телефона" }, {
                default: withCtx(() => [
                  createVNode(_component_FormControl, {
                    modelValue: currentClientPhone.value,
                    "onUpdate:modelValue": ($event) => currentClientPhone.value = $event,
                    placeholder: "Номер",
                    type: "number",
                    masked: true,
                    mask: "7##########"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                color: "info",
                label: "Отправить",
                onClick: ($event) => setUserPhone()
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isAddingToGroupModalActive.value,
        "onUpdate:modelValue": ($event) => isAddingToGroupModalActive.value = $event,
        title: "Добавить пользователей в группу"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormField, {
              label: "Группа",
              help: "Выберите группу"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormControl, {
                    modelValue: selectedGroupId.value,
                    "onUpdate:modelValue": ($event) => selectedGroupId.value = $event,
                    type: "select",
                    options: groups.value.map((group) => ({ value: group.id, label: group.name }))
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormControl, {
                      modelValue: selectedGroupId.value,
                      "onUpdate:modelValue": ($event) => selectedGroupId.value = $event,
                      type: "select",
                      options: groups.value.map((group) => ({ value: group.id, label: group.name }))
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              color: "info",
              label: "Отправить",
              onClick: ($event) => addUsersToGroup()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormField, {
                label: "Группа",
                help: "Выберите группу"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormControl, {
                    modelValue: selectedGroupId.value,
                    "onUpdate:modelValue": ($event) => selectedGroupId.value = $event,
                    type: "select",
                    options: groups.value.map((group) => ({ value: group.id, label: group.name }))
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                color: "info",
                label: "Отправить",
                onClick: ($event) => addUsersToGroup()
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: isModalMessagesActive.value,
        "onUpdate:modelValue": ($event) => isModalMessagesActive.value = $event,
        title: "Сообщения пользователя",
        "has-table": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableMessages, { "is-active": isModalMessagesActive.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableMessages, { "is-active": isModalMessagesActive.value }, null, 8, ["is-active"])
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
        _push(ssrRenderComponent(_sfc_main$2, {
          label: "Добавить в группу",
          color: "info",
          small: "",
          onClick: ($event) => isAddingToGroupModalActive.value = true
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table><thead><tr>`);
      if (__props.checkable) {
        _push(`<th></th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<th>Номер договора</th><th>Адрес договора</th><th>Город</th><th>Отправить уведомление</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(itemsPaginated.value, (client) => {
        _push(`<tr>`);
        if (__props.checkable) {
          _push(ssrRenderComponent(_sfc_main$7, {
            onChecked: ($event) => checked($event, client)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<td class="border-b-0 lg:w-6 before:hidden" data-label="Договор">${ssrInterpolate(client.phone)}</td><td class="border-b-0 lg:w-6 before:hidden" data-label="Адрес">${ssrInterpolate(client.address)}</td><td class="border-b-0 lg:w-6 before:hidden" data-label="Город">${ssrInterpolate(client.city)}</td><td data-label="Уведомление">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          color: "success",
          label: "Отправить",
          onClick: ($event) => {
            currentClientPhone.value = client.phone;
            isModalMessageActive.value = true;
          }
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">`);
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(pagesList.value, (page) => {
                    _push3(ssrRenderComponent(_sfc_main$2, {
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
                      return openBlock(), createBlock(_sfc_main$2, {
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
              createVNode(_sfc_main$4, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(pagesList.value, (page) => {
                    return openBlock(), createBlock(_sfc_main$2, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableSampleClients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TableSampleClients-cZ8HAdYi.js.map
