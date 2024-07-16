import { b as useRoute, c as useRouter, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$3 } from "./SectionTitleLine-DzOtNnyA.js";
import { _ as _sfc_main$4, a as _sfc_main$6 } from "./FormControl-CBzBHuLM.js";
import { _ as _sfc_main$5 } from "./GroupsIdSelector-B3ZQHziW.js";
import { _ as _sfc_main$7 } from "./BaseButtons-BgEV_qrs.js";
import { _ as _sfc_main$2, a as _sfc_main$8 } from "./CardBox-SmAHmX3l.js";
import { ref, reactive, watch, withCtx, unref, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const preSelectedGroups = ref([]);
    const mainStore = useMainStore();
    const selectedGroups = ref([]);
    const groupsLoaded = ref(false);
    const form = reactive({
      action_url: "",
      token: mainStore.userToken,
      text: "",
      title: "",
      date_start: "",
      date_end: "",
      to_all: true,
      groups_id: [],
      advertising_id: parseInt(route.params.id)
    });
    watch(selectedGroups, () => {
      form.to_all = selectedGroups.value.length === 0;
      form.groups_id = selectedGroups.value;
    });
    const editAdvert = async () => {
      const path = proxyBaseUrl + "edit-advertising";
      $fetch(path, {
        method: "POST",
        body: form
      }).then(async (r) => {
        if (r.message === "ok") {
          await setVisibility(form.advertising_id);
          router.back();
          mainStore.getAdvertsList();
        } else {
          alert("Ошибка: ", r.picture);
        }
      });
    };
    const setVisibility = async (id) => {
      let path;
      const body = {
        token: form.token,
        advertising_id: id
      };
      if (form.to_all) {
        body.to_all = 1;
        body.users_id = [];
        path = proxyBaseUrl + "advertising-to-users";
      } else {
        body.to_all = 0;
        body.groups_id = form.groups_id;
        path = proxyBaseUrl + "advertising-to-groups";
      }
      await $fetch(path, {
        method: "POST",
        body
      }).then((r) => {
        console.log(r);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLine = _sfc_main$3;
      const _component_FormField = _sfc_main$4;
      const _component_GroupsIdSelector = _sfc_main$5;
      const _component_FormControl = _sfc_main$6;
      const _component_BaseButtons = _sfc_main$7;
      const _component_BaseButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "Редактировать объявление / " + unref(route).params.id,
                    back: true,
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 w-full gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Информация",
                    form: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, { label: "Группы" }, {
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
                        _push4(ssrRenderComponent(_component_FormField, { label: "Текст для предварительного просмотра (10-25 символов)" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.title,
                                "onUpdate:modelValue": ($event) => form.title = $event,
                                placeholder: "Текст",
                                type: "text"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.title,
                                  "onUpdate:modelValue": ($event) => form.title = $event,
                                  placeholder: "Текст",
                                  type: "text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "Текст для кнопки перехода (10-25 символов)" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.text,
                                "onUpdate:modelValue": ($event) => form.text = $event,
                                placeholder: "Текст",
                                type: "text"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.text,
                                  "onUpdate:modelValue": ($event) => form.text = $event,
                                  placeholder: "Текст",
                                  type: "text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "Ссылка для перехода" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.action_url,
                                "onUpdate:modelValue": ($event) => form.action_url = $event,
                                placeholder: "https://...",
                                type: "text"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.action_url,
                                  "onUpdate:modelValue": ($event) => form.action_url = $event,
                                  placeholder: "https://...",
                                  type: "text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "Дата, с которой будет видно объявление" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.date_start,
                                "onUpdate:modelValue": ($event) => form.date_start = $event,
                                placeholder: "Дата",
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.date_start,
                                  "onUpdate:modelValue": ($event) => form.date_start = $event,
                                  placeholder: "Дата",
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "Дата, в которую объявление будет скрыто" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.date_end,
                                "onUpdate:modelValue": ($event) => form.date_end = $event,
                                placeholder: "Дата",
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.date_end,
                                  "onUpdate:modelValue": ($event) => form.date_end = $event,
                                  placeholder: "Дата",
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormField, { label: "Группы" }, {
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
                          createVNode(_component_FormField, { label: "Текст для предварительного просмотра (10-25 символов)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.title,
                                "onUpdate:modelValue": ($event) => form.title = $event,
                                placeholder: "Текст",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Текст для кнопки перехода (10-25 символов)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.text,
                                "onUpdate:modelValue": ($event) => form.text = $event,
                                placeholder: "Текст",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Ссылка для перехода" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.action_url,
                                "onUpdate:modelValue": ($event) => form.action_url = $event,
                                placeholder: "https://...",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Дата, с которой будет видно объявление" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_start,
                                "onUpdate:modelValue": ($event) => form.date_start = $event,
                                placeholder: "Дата",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Дата, в которую объявление будет скрыто" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_end,
                                "onUpdate:modelValue": ($event) => form.date_end = $event,
                                placeholder: "Дата",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-row justify-start items-center m-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtons, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "info",
                          label: "Отмена",
                          to: "/advertising"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "success",
                          label: "Готово",
                          onClick: ($event) => editAdvert()
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "Отмена",
                            to: "/advertising"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "Готово",
                            onClick: ($event) => editAdvert()
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_SectionTitleLine, {
                      icon: unref(mdiChevronLeft),
                      title: "Редактировать объявление / " + unref(route).params.id,
                      back: true,
                      main: ""
                    }, null, 8, ["icon", "title"]),
                    createVNode("div", { class: "grid grid-cols-1 w-full gap-4" }, [
                      createVNode(_sfc_main$2, {
                        title: "Информация",
                        form: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, { label: "Группы" }, {
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
                          createVNode(_component_FormField, { label: "Текст для предварительного просмотра (10-25 символов)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.title,
                                "onUpdate:modelValue": ($event) => form.title = $event,
                                placeholder: "Текст",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Текст для кнопки перехода (10-25 символов)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.text,
                                "onUpdate:modelValue": ($event) => form.text = $event,
                                placeholder: "Текст",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Ссылка для перехода" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.action_url,
                                "onUpdate:modelValue": ($event) => form.action_url = $event,
                                placeholder: "https://...",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Дата, с которой будет видно объявление" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_start,
                                "onUpdate:modelValue": ($event) => form.date_start = $event,
                                placeholder: "Дата",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Дата, в которую объявление будет скрыто" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_end,
                                "onUpdate:modelValue": ($event) => form.date_end = $event,
                                placeholder: "Дата",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-row justify-start items-center m-2" }, [
                      createVNode(_component_BaseButtons, null, {
                        default: withCtx(() => [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "Отмена",
                            to: "/advertising"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "Готово",
                            onClick: ($event) => editAdvert()
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      })
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
                    title: "Редактировать объявление / " + unref(route).params.id,
                    back: true,
                    main: ""
                  }, null, 8, ["icon", "title"]),
                  createVNode("div", { class: "grid grid-cols-1 w-full gap-4" }, [
                    createVNode(_sfc_main$2, {
                      title: "Информация",
                      form: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormField, { label: "Группы" }, {
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
                        createVNode(_component_FormField, { label: "Текст для предварительного просмотра (10-25 символов)" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.title,
                              "onUpdate:modelValue": ($event) => form.title = $event,
                              placeholder: "Текст",
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "Текст для кнопки перехода (10-25 символов)" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.text,
                              "onUpdate:modelValue": ($event) => form.text = $event,
                              placeholder: "Текст",
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "Ссылка для перехода" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.action_url,
                              "onUpdate:modelValue": ($event) => form.action_url = $event,
                              placeholder: "https://...",
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "Дата, с которой будет видно объявление" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.date_start,
                              "onUpdate:modelValue": ($event) => form.date_start = $event,
                              placeholder: "Дата",
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "Дата, в которую объявление будет скрыто" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.date_end,
                              "onUpdate:modelValue": ($event) => form.date_end = $event,
                              placeholder: "Дата",
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex flex-row justify-start items-center m-2" }, [
                    createVNode(_component_BaseButtons, null, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "info",
                          label: "Отмена",
                          to: "/advertising"
                        }),
                        createVNode(_component_BaseButton, {
                          color: "success",
                          label: "Готово",
                          onClick: ($event) => editAdvert()
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/advertising/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CXSusPz2.js.map
