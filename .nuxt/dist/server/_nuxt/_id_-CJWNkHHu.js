import { b as useRoute, c as useRouter, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$3 } from "./SectionTitleLine-DzOtNnyA.js";
import { _ as _sfc_main$4, a as _sfc_main$6 } from "./FormControl-CBzBHuLM.js";
import { _ as _sfc_main$5 } from "./GroupsIdSelector-B3ZQHziW.js";
import { _ as _sfc_main$2, a as _sfc_main$7 } from "./CardBox-SmAHmX3l.js";
import { _ as _sfc_main$8 } from "./colors-BYRMrYIa.js";
import { ref, reactive, watch, withCtx, unref, openBlock, createBlock, createVNode, withDirectives, vModelCheckbox, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from "vue/server-renderer";
import { mdiChevronLeft, mdiSend } from "@mdi/js";
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
import "./nuxt-link-B4HAH-BK.js";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    const mainStore = useMainStore();
    const preSelectedGroups = ref([]);
    function boolToInt(bool) {
      return bool === true ? 1 : 0;
    }
    const displayMessage = ref("Введите текст");
    const displayTitle = ref("");
    const displaySubtitle = ref("");
    const currentDate = (/* @__PURE__ */ new Date()).toISOString();
    const groupsLoaded = ref(false);
    const form = reactive({
      title: displayTitle.value,
      subtitle: displaySubtitle.value,
      message: displayMessage.value,
      groups_id: [],
      to_all: 0,
      users_id: [],
      token: mainStore.userToken,
      date: currentDate,
      now: 1,
      date: "",
      id: 0
    });
    const sendNow = ref(true);
    const dateToSend = ref("");
    const selectedGroups = ref([]);
    watch(selectedGroups, () => {
      form.to_all = boolToInt(selectedGroups.value.length === 0);
      form.groups_id = selectedGroups.value;
    });
    watch(form.value, () => {
      console.log(form.date);
    });
    watch(sendNow, () => {
      form.now = boolToInt(sendNow.value);
      if (sendNow.value) {
        form.date = "";
      }
    });
    watch(dateToSend, () => {
      form.date = dateToSend.value;
    });
    watch(displayTitle, (newValue) => {
      form.title = newValue;
    });
    watch(displayMessage, (newValue) => {
      form.message = newValue;
    });
    const submit = async () => {
      if (form.message.length == 0) {
        alert("Введите текст");
        return;
      }
      if (form.now == 0 && form.date == "") {
        alert("Выберите дату рассылки или нажмите «Отправить сейчас»");
        return;
      }
      const path = proxyBaseUrl + "edit-message";
      await $fetch(path, {
        method: "POST",
        body: form
      }).then((r) => {
        const resp = r.message;
        if (resp === "ok") {
          router.back();
        } else {
          alert(resp);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLine = _sfc_main$3;
      const _component_FormField = _sfc_main$4;
      const _component_GroupsIdSelector = _sfc_main$5;
      const _component_FormControl = _sfc_main$6;
      const _component_BaseButton = _sfc_main$7;
      const _component_BaseIcon = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "Редактировать уведомление",
                    back: true,
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-3 gap-6"${_scopeId2}><div class="col-span-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, { form: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Группы",
                          help: "Выберите группы для рассылки"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (groupsLoaded.value) {
                                _push5(ssrRenderComponent(_component_GroupsIdSelector, {
                                  modelValue: selectedGroups.value,
                                  "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                  "pre-selected-groups": preSelectedGroups.value
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<div${_scopeId4}>Загрузка групп...</div>`);
                              }
                            } else {
                              return [
                                groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                                  key: 0,
                                  modelValue: selectedGroups.value,
                                  "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                  "pre-selected-groups": preSelectedGroups.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "Загрузка групп..."))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Заголовок (необязательно)",
                          help: "Заголовок уведомления"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                name: "title",
                                modelValue: displayTitle.value,
                                "onUpdate:modelValue": ($event) => displayTitle.value = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  name: "title",
                                  modelValue: displayTitle.value,
                                  "onUpdate:modelValue": ($event) => displayTitle.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Сообщение",
                          help: "Введите сообщение"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                type: "textarea",
                                name: "message",
                                modelValue: displayMessage.value,
                                "onUpdate:modelValue": ($event) => displayMessage.value = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  type: "textarea",
                                  name: "message",
                                  modelValue: displayMessage.value,
                                  "onUpdate:modelValue": ($event) => displayMessage.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex items-center my-8"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sendNow.value) ? ssrLooseContain(sendNow.value, null) : sendNow.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>Отправить сейчас</span></div>`);
                        if (!sendNow.value) {
                          _push4(ssrRenderComponent(_component_FormField, {
                            label: "Дата и время",
                            help: "В эту дату и время начнется рассылка"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_FormControl, {
                                  type: "datetime-local",
                                  name: "date",
                                  modelValue: dateToSend.value,
                                  "onUpdate:modelValue": ($event) => dateToSend.value = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_FormControl, {
                                    type: "datetime-local",
                                    name: "date",
                                    modelValue: dateToSend.value,
                                    "onUpdate:modelValue": ($event) => dateToSend.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="flex flex-row justify-center items-center w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "info",
                          label: "Отправить",
                          onClick: ($event) => submit(),
                          icon: unref(mdiSend)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_FormField, {
                            label: "Группы",
                            help: "Выберите группы для рассылки"
                          }, {
                            default: withCtx(() => [
                              groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                                key: 0,
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "Загрузка групп..."))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Заголовок (необязательно)",
                            help: "Заголовок уведомления"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                name: "title",
                                modelValue: displayTitle.value,
                                "onUpdate:modelValue": ($event) => displayTitle.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Сообщение",
                            help: "Введите сообщение"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                type: "textarea",
                                name: "message",
                                modelValue: displayMessage.value,
                                "onUpdate:modelValue": ($event) => displayMessage.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center my-8" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sendNow.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sendNow.value]
                            ]),
                            createVNode("span", null, "Отправить сейчас")
                          ]),
                          !sendNow.value ? (openBlock(), createBlock(_component_FormField, {
                            key: 0,
                            label: "Дата и время",
                            help: "В эту дату и время начнется рассылка"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                type: "datetime-local",
                                name: "date",
                                modelValue: dateToSend.value,
                                "onUpdate:modelValue": ($event) => dateToSend.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", { class: "flex flex-row justify-center items-center w-full" }, [
                            createVNode(_component_BaseButton, {
                              color: "info",
                              label: "Отправить",
                              onClick: ($event) => submit(),
                              icon: unref(mdiSend)
                            }, null, 8, ["onClick", "icon"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="w-80 h-160 border-4 border-slate-800 dark:border-slate-500 rounded-3xl flex flex-col items-center justify-center px-2"${_scopeId2}><div class="flex flex-col mx-4 rounded-lg dark:bg-slate-400 bg-slate-300 drop-shadow-md w-full"${_scopeId2}><div class="flex flex-row justify-between w-full rounded-t-lg px-2 py-1/2 dark:bg-slate-500"${_scopeId2}><div class="flex flex-row"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseIcon, { path: unref(mdiSend) }, null, _parent3, _scopeId2));
                  _push3(`<span class="font-light text-lg ml-2"${_scopeId2}>Телеос-1</span></div><span class="font-light text-display"${_scopeId2}>сейчас</span></div><div class="w-full flex flex-col px-2 py-2"${_scopeId2}>`);
                  if (displayTitle.value !== "") {
                    _push3(`<span class="font-bold text-display mb-1"${_scopeId2}>${ssrInterpolate(displayTitle.value)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (displaySubtitle.value !== "") {
                    _push3(`<span class="font-medium text-display my-1"${_scopeId2}>${ssrInterpolate(displaySubtitle.value)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span class="font-light text-display mt-1 text-ellipsis line-clamp-2"${_scopeId2}>${ssrInterpolate(displayMessage.value)}</span></div></div></div></div>`);
                } else {
                  return [
                    createVNode(_component_SectionTitleLine, {
                      icon: unref(mdiChevronLeft),
                      title: "Редактировать уведомление",
                      back: true,
                      main: ""
                    }, null, 8, ["icon"]),
                    createVNode("div", { class: "grid grid-cols-3 gap-6" }, [
                      createVNode("div", { class: "col-span-2" }, [
                        createVNode(_sfc_main$2, { form: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormField, {
                              label: "Группы",
                              help: "Выберите группы для рассылки"
                            }, {
                              default: withCtx(() => [
                                groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                                  key: 0,
                                  modelValue: selectedGroups.value,
                                  "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                  "pre-selected-groups": preSelectedGroups.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "Загрузка групп..."))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormField, {
                              label: "Заголовок (необязательно)",
                              help: "Заголовок уведомления"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  name: "title",
                                  modelValue: displayTitle.value,
                                  "onUpdate:modelValue": ($event) => displayTitle.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormField, {
                              label: "Сообщение",
                              help: "Введите сообщение"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  type: "textarea",
                                  name: "message",
                                  modelValue: displayMessage.value,
                                  "onUpdate:modelValue": ($event) => displayMessage.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center my-8" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                                "onUpdate:modelValue": ($event) => sendNow.value = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, sendNow.value]
                              ]),
                              createVNode("span", null, "Отправить сейчас")
                            ]),
                            !sendNow.value ? (openBlock(), createBlock(_component_FormField, {
                              key: 0,
                              label: "Дата и время",
                              help: "В эту дату и время начнется рассылка"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  type: "datetime-local",
                                  name: "date",
                                  modelValue: dateToSend.value,
                                  "onUpdate:modelValue": ($event) => dateToSend.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode("div", { class: "flex flex-row justify-center items-center w-full" }, [
                              createVNode(_component_BaseButton, {
                                color: "info",
                                label: "Отправить",
                                onClick: ($event) => submit(),
                                icon: unref(mdiSend)
                              }, null, 8, ["onClick", "icon"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "w-80 h-160 border-4 border-slate-800 dark:border-slate-500 rounded-3xl flex flex-col items-center justify-center px-2" }, [
                        createVNode("div", { class: "flex flex-col mx-4 rounded-lg dark:bg-slate-400 bg-slate-300 drop-shadow-md w-full" }, [
                          createVNode("div", { class: "flex flex-row justify-between w-full rounded-t-lg px-2 py-1/2 dark:bg-slate-500" }, [
                            createVNode("div", { class: "flex flex-row" }, [
                              createVNode(_component_BaseIcon, { path: unref(mdiSend) }, null, 8, ["path"]),
                              createVNode("span", { class: "font-light text-lg ml-2" }, "Телеос-1")
                            ]),
                            createVNode("span", { class: "font-light text-display" }, "сейчас")
                          ]),
                          createVNode("div", { class: "w-full flex flex-col px-2 py-2" }, [
                            displayTitle.value !== "" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "font-bold text-display mb-1"
                            }, toDisplayString(displayTitle.value), 1)) : createCommentVNode("", true),
                            displaySubtitle.value !== "" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "font-medium text-display my-1"
                            }, toDisplayString(displaySubtitle.value), 1)) : createCommentVNode("", true),
                            createVNode("span", { class: "font-light text-display mt-1 text-ellipsis line-clamp-2" }, toDisplayString(displayMessage.value), 1)
                          ])
                        ])
                      ])
                    ])
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
                    title: "Редактировать уведомление",
                    back: true,
                    main: ""
                  }, null, 8, ["icon"]),
                  createVNode("div", { class: "grid grid-cols-3 gap-6" }, [
                    createVNode("div", { class: "col-span-2" }, [
                      createVNode(_sfc_main$2, { form: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, {
                            label: "Группы",
                            help: "Выберите группы для рассылки"
                          }, {
                            default: withCtx(() => [
                              groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                                key: 0,
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "Загрузка групп..."))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Заголовок (необязательно)",
                            help: "Заголовок уведомления"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                name: "title",
                                modelValue: displayTitle.value,
                                "onUpdate:modelValue": ($event) => displayTitle.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Сообщение",
                            help: "Введите сообщение"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                type: "textarea",
                                name: "message",
                                modelValue: displayMessage.value,
                                "onUpdate:modelValue": ($event) => displayMessage.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center my-8" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sendNow.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sendNow.value]
                            ]),
                            createVNode("span", null, "Отправить сейчас")
                          ]),
                          !sendNow.value ? (openBlock(), createBlock(_component_FormField, {
                            key: 0,
                            label: "Дата и время",
                            help: "В эту дату и время начнется рассылка"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                type: "datetime-local",
                                name: "date",
                                modelValue: dateToSend.value,
                                "onUpdate:modelValue": ($event) => dateToSend.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", { class: "flex flex-row justify-center items-center w-full" }, [
                            createVNode(_component_BaseButton, {
                              color: "info",
                              label: "Отправить",
                              onClick: ($event) => submit(),
                              icon: unref(mdiSend)
                            }, null, 8, ["onClick", "icon"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "w-80 h-160 border-4 border-slate-800 dark:border-slate-500 rounded-3xl flex flex-col items-center justify-center px-2" }, [
                      createVNode("div", { class: "flex flex-col mx-4 rounded-lg dark:bg-slate-400 bg-slate-300 drop-shadow-md w-full" }, [
                        createVNode("div", { class: "flex flex-row justify-between w-full rounded-t-lg px-2 py-1/2 dark:bg-slate-500" }, [
                          createVNode("div", { class: "flex flex-row" }, [
                            createVNode(_component_BaseIcon, { path: unref(mdiSend) }, null, 8, ["path"]),
                            createVNode("span", { class: "font-light text-lg ml-2" }, "Телеос-1")
                          ]),
                          createVNode("span", { class: "font-light text-display" }, "сейчас")
                        ]),
                        createVNode("div", { class: "w-full flex flex-col px-2 py-2" }, [
                          displayTitle.value !== "" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "font-bold text-display mb-1"
                          }, toDisplayString(displayTitle.value), 1)) : createCommentVNode("", true),
                          displaySubtitle.value !== "" ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "font-medium text-display my-1"
                          }, toDisplayString(displaySubtitle.value), 1)) : createCommentVNode("", true),
                          createVNode("span", { class: "font-light text-display mt-1 text-ellipsis line-clamp-2" }, toDisplayString(displayMessage.value), 1)
                        ])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pushmailing/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CJWNkHHu.js.map
