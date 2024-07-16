import { _ as _sfc_main$3 } from "./CardBoxModal-BXsowXkc.js";
import { a as useMainStore, b as useRoute, c as useRouter, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$4 } from "./SectionTitleLine-DzOtNnyA.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./FormControl-CBzBHuLM.js";
import { _ as _sfc_main$7 } from "./BaseButtons-BgEV_qrs.js";
import { _ as _sfc_main$2, a as _sfc_main$8 } from "./CardBox-SmAHmX3l.js";
import { reactive, ref, withCtx, createVNode, toDisplayString, unref, withDirectives, vModelCheckbox, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { mdiChevronLeft } from "@mdi/js";
import { _ as _sfc_main$1 } from "./SectionMain-oKKzVNTB.js";
import "./colors-BYRMrYIa.js";
import "./OverlayLayer-Ca6LWwyv.js";
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
    const mainStore = useMainStore();
    useRoute();
    const router = useRouter();
    const form = reactive({
      fio: "",
      email: "",
      phone: "",
      password: ""
    });
    const sections = reactive({
      sectionsData: {
        stats: {
          id: 2,
          value: true
        },
        clients: {
          id: 3,
          value: false
        },
        mailing: {
          id: 4,
          value: false
        },
        admins: {
          id: 1,
          value: false
        },
        advertising: {
          id: 5,
          value: false
        },
        groups: {
          id: 7,
          value: false
        }
      }
    });
    const sectionsToArray = (sections2) => {
      return Object.values(sections2).filter((section) => section.value).map((section) => section.id);
    };
    const isErrorModalActive = ref(false);
    const errorText = ref("");
    const submit = async () => {
      if (form.name == "" || form.email == "" || form.password == "") {
        isErrorModalActive.value = true;
        errorText.value = "Заполните все обязательные поля";
        return;
      }
      const data = {
        token: mainStore.userToken,
        id: mainStore.currentAdmin.id,
        fio: form.fio,
        email: form.email,
        phone: form.phone,
        password: form.password,
        type: "operator",
        active: "1"
      };
      const path = proxyBaseUrl + "edit-admin";
      $fetch(path, {
        method: "POST",
        body: data
      }).then((r) => {
        const resp = r.message;
        if (resp === "ok") {
          setNewPriveleges().then(() => {
            router.push("/admins");
          });
        } else {
          alert(resp);
        }
      });
    };
    const setNewPriveleges = async () => {
      const selectedSections = sectionsToArray(sections.sectionsData);
      const path = proxyBaseUrl + "set-privilege";
      const data = {
        token: mainStore.userToken,
        admin_id: mainStore.currentAdmin.id,
        sections: selectedSections
      };
      console.log("setting priveleges: ", data);
      $fetch(path, {
        method: "POST",
        body: data
      }).then((r) => {
        const resp = r.message;
        if (resp != "ok") {
          return;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBoxModal = _sfc_main$3;
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLine = _sfc_main$4;
      const _component_FormField = _sfc_main$5;
      const _component_FormControl = _sfc_main$6;
      const _component_BaseButtons = _sfc_main$7;
      const _component_BaseButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isErrorModalActive.value,
        "onUpdate:modelValue": ($event) => isErrorModalActive.value = $event,
        title: "Ошибка"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(errorText.value)}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(errorText.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "Редактирование администратора",
                    back: true,
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Информация",
                    form: "",
                    onSubmit: submit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Имя",
                          help: "Обязательно"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.fio,
                                "onUpdate:modelValue": ($event) => form.fio = $event,
                                name: "name",
                                autocomplete: "name"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.fio,
                                  "onUpdate:modelValue": ($event) => form.fio = $event,
                                  name: "name",
                                  autocomplete: "name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "E-mail",
                          help: "Обязательно"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.email,
                                "onUpdate:modelValue": ($event) => form.email = $event,
                                name: "email",
                                autocomplete: "email"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.email,
                                  "onUpdate:modelValue": ($event) => form.email = $event,
                                  name: "email",
                                  autocomplete: "email"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Телефон",
                          help: "Обязательно"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                name: "phone",
                                intonly: true,
                                autocomplete: "phone"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.phone,
                                  "onUpdate:modelValue": ($event) => form.phone = $event,
                                  name: "phone",
                                  intonly: true,
                                  autocomplete: "phone"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Пароль",
                          help: "Обязательно"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.password,
                                "onUpdate:modelValue": ($event) => form.password = $event,
                                name: "password",
                                type: "password",
                                autocomplete: "password"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.password,
                                  "onUpdate:modelValue": ($event) => form.password = $event,
                                  name: "password",
                                  type: "password",
                                  autocomplete: "password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="flex justify-center text-center text-base"${_scopeId3}> Приглашение будет отправлено на электронную почту </span>`);
                      } else {
                        return [
                          createVNode(_component_FormField, {
                            label: "Имя",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.fio,
                                "onUpdate:modelValue": ($event) => form.fio = $event,
                                name: "name",
                                autocomplete: "name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "E-mail",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.email,
                                "onUpdate:modelValue": ($event) => form.email = $event,
                                name: "email",
                                autocomplete: "email"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Телефон",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                name: "phone",
                                intonly: true,
                                autocomplete: "phone"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Пароль",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.password,
                                "onUpdate:modelValue": ($event) => form.password = $event,
                                name: "password",
                                type: "password",
                                autocomplete: "password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "flex justify-center text-center text-base" }, " Приглашение будет отправлено на электронную почту ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Доступные разделы" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.admins.value) ? ssrLooseContain(sections.sectionsData.admins.value, null) : sections.sectionsData.admins.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>Администраторы</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.clients.value) ? ssrLooseContain(sections.sectionsData.clients.value, null) : sections.sectionsData.clients.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>Клиенты</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.groups.value) ? ssrLooseContain(sections.sectionsData.groups.value, null) : sections.sectionsData.groups.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>Группы</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.mailing.value) ? ssrLooseContain(sections.sectionsData.mailing.value, null) : sections.sectionsData.mailing.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>Рассылка</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.advertising.value) ? ssrLooseContain(sections.sectionsData.advertising.value, null) : sections.sectionsData.advertising.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>Реклама</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.admins.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.admins.value]
                            ]),
                            createVNode("span", null, "Администраторы")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.clients.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.clients.value]
                            ]),
                            createVNode("span", null, "Клиенты")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.groups.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.groups.value]
                            ]),
                            createVNode("span", null, "Группы")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.mailing.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.mailing.value]
                            ]),
                            createVNode("span", null, "Рассылка")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.advertising.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.advertising.value]
                            ]),
                            createVNode("span", null, "Реклама")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-row justify-end items-center m-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtons, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "info",
                          label: "Отмена",
                          to: "/admins"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "success",
                          label: "Сохранить",
                          onClick: ($event) => submit()
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "Отмена",
                            to: "/admins"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "Сохранить",
                            onClick: ($event) => submit()
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
                      title: "Редактирование администратора",
                      back: true,
                      main: ""
                    }, null, 8, ["icon"]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_sfc_main$2, {
                        title: "Информация",
                        form: "",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, {
                            label: "Имя",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.fio,
                                "onUpdate:modelValue": ($event) => form.fio = $event,
                                name: "name",
                                autocomplete: "name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "E-mail",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.email,
                                "onUpdate:modelValue": ($event) => form.email = $event,
                                name: "email",
                                autocomplete: "email"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Телефон",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                name: "phone",
                                intonly: true,
                                autocomplete: "phone"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Пароль",
                            help: "Обязательно"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.password,
                                "onUpdate:modelValue": ($event) => form.password = $event,
                                name: "password",
                                type: "password",
                                autocomplete: "password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "flex justify-center text-center text-base" }, " Приглашение будет отправлено на электронную почту ")
                        ]),
                        _: 1
                      }, 8, ["onSubmit"]),
                      createVNode(_sfc_main$2, { title: "Доступные разделы" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.admins.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.admins.value]
                            ]),
                            createVNode("span", null, "Администраторы")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.clients.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.clients.value]
                            ]),
                            createVNode("span", null, "Клиенты")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.groups.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.groups.value]
                            ]),
                            createVNode("span", null, "Группы")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.mailing.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.mailing.value]
                            ]),
                            createVNode("span", null, "Рассылка")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.advertising.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.advertising.value]
                            ]),
                            createVNode("span", null, "Реклама")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex flex-row justify-end items-center m-2" }, [
                      createVNode(_component_BaseButtons, null, {
                        default: withCtx(() => [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "Отмена",
                            to: "/admins"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "Сохранить",
                            onClick: ($event) => submit()
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
                    title: "Редактирование администратора",
                    back: true,
                    main: ""
                  }, null, 8, ["icon"]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                    createVNode(_sfc_main$2, {
                      title: "Информация",
                      form: "",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormField, {
                          label: "Имя",
                          help: "Обязательно"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.fio,
                              "onUpdate:modelValue": ($event) => form.fio = $event,
                              name: "name",
                              autocomplete: "name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "E-mail",
                          help: "Обязательно"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.email,
                              "onUpdate:modelValue": ($event) => form.email = $event,
                              name: "email",
                              autocomplete: "email"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "Телефон",
                          help: "Обязательно"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.phone,
                              "onUpdate:modelValue": ($event) => form.phone = $event,
                              name: "phone",
                              intonly: true,
                              autocomplete: "phone"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "Пароль",
                          help: "Обязательно"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.password,
                              "onUpdate:modelValue": ($event) => form.password = $event,
                              name: "password",
                              type: "password",
                              autocomplete: "password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "flex justify-center text-center text-base" }, " Приглашение будет отправлено на электронную почту ")
                      ]),
                      _: 1
                    }, 8, ["onSubmit"]),
                    createVNode(_sfc_main$2, { title: "Доступные разделы" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.admins.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.admins.value]
                          ]),
                          createVNode("span", null, "Администраторы")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.clients.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.clients.value]
                          ]),
                          createVNode("span", null, "Клиенты")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.groups.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.groups.value]
                          ]),
                          createVNode("span", null, "Группы")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.mailing.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.mailing.value]
                          ]),
                          createVNode("span", null, "Рассылка")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.advertising.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.advertising.value]
                          ]),
                          createVNode("span", null, "Реклама")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex flex-row justify-end items-center m-2" }, [
                    createVNode(_component_BaseButtons, null, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "info",
                          label: "Отмена",
                          to: "/admins"
                        }),
                        createVNode(_component_BaseButton, {
                          color: "success",
                          label: "Сохранить",
                          onClick: ($event) => submit()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admins/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-ChVppqWe.js.map
