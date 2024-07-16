import { _ as _sfc_main$7 } from "./CardBoxModal-BXsowXkc.js";
import { d as useCookie, a as useMainStore, t as tokenCookieName, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { reactive, ref, watch, withCtx, createVNode, toDisplayString, unref, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { mdiDoor, mdiAccount, mdiAsterisk } from "@mdi/js";
import { _ as _sfc_main$1 } from "./SectionFullScreen-BkBF3oy_.js";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./CardBox-SmAHmX3l.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./FormControl-CBzBHuLM.js";
import { _ as _sfc_main$3 } from "./BaseButtons-BgEV_qrs.js";
import "./colors-BYRMrYIa.js";
import "./OverlayLayer-Ca6LWwyv.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      phone: "",
      password: ""
    });
    const etoken = useCookie(tokenCookieName, { sameSite: "None", secure: true });
    const errorDialogText = ref("Проверьте телефон и пароль");
    useMainStore();
    const router = useRouter();
    const isButtonDisabled = ref(false);
    const isErrorModalActive = ref(false);
    const isPhoneValid = ref(true);
    const isPasswordValid = ref(true);
    const validationRules = {
      phone: (value) => value.length === 11,
      password: (value) => value.length >= 1
    };
    watch(form, (newVal, oldVal) => {
      isPhoneValid.value = validationRules.phone(newVal.phone);
      isPasswordValid.value = validationRules.password(newVal.password);
    }, { deep: true });
    const submit = async () => {
      if (form.phone == "" || form.password == "") {
        isErrorModalActive.value = true;
        errorDialogText.value = "Заполните все обязательные поля";
        return;
      }
      isButtonDisabled.value = true;
      const path = proxyBaseUrl + "login";
      await $fetch(path, {
        method: "POST",
        body: form
      }).then((r) => {
        const resp = r.message;
        isButtonDisabled.value = false;
        if (resp === "ok") {
          const { message, token } = r;
          etoken.value = token;
          router.push("/");
        } else {
          isErrorModalActive.value = true;
          errorDialogText.value = "Проверьте телефон и пароль";
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBoxModal = _sfc_main$7;
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isErrorModalActive.value,
        "onUpdate:modelValue": ($event) => isErrorModalActive.value = $event,
        title: "Ошибка входа",
        buttonLabel: "OK"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(errorDialogText.value)}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(errorDialogText.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { bg: "greenIndigo" }, {
              default: withCtx(({ cardClass }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    class: [cardClass, "max-h-screen overflow-y-auto"],
                    form: "",
                    title: "«Телеос-1» кабинет администратора",
                    headerIcon: unref(mdiDoor),
                    onSubmit: submit
                  }, {
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, {
                                type: "submit",
                                color: "success",
                                small: "",
                                disabled: isButtonDisabled.value,
                                label: isButtonDisabled.value ? "Загрузка..." : "Войти"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4, {
                                  type: "submit",
                                  color: "success",
                                  small: "",
                                  disabled: isButtonDisabled.value,
                                  label: isButtonDisabled.value ? "Загрузка..." : "Войти"
                                }, null, 8, ["disabled", "label"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$3, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, {
                                type: "submit",
                                color: "success",
                                small: "",
                                disabled: isButtonDisabled.value,
                                label: isButtonDisabled.value ? "Загрузка..." : "Войти"
                              }, null, 8, ["disabled", "label"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Телефон",
                          help: isPhoneValid.value ? "Телефон для входа" : "Телефон должен содержать 11 цифр",
                          isValid: isPhoneValid.value
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                icon: unref(mdiAccount),
                                type: "tel",
                                name: "login",
                                autocomplete: "phone"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: form.phone,
                                  "onUpdate:modelValue": ($event) => form.phone = $event,
                                  icon: unref(mdiAccount),
                                  type: "tel",
                                  name: "login",
                                  autocomplete: "phone"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Пароль",
                          help: isPasswordValid.value ? "Пароль для входа" : "Пароль не может быть пустым",
                          isValid: isPasswordValid.value
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: form.password,
                                "onUpdate:modelValue": ($event) => form.password = $event,
                                icon: unref(mdiAsterisk),
                                type: "password",
                                name: "password",
                                autocomplete: "current-password"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: form.password,
                                  "onUpdate:modelValue": ($event) => form.password = $event,
                                  icon: unref(mdiAsterisk),
                                  type: "password",
                                  name: "password",
                                  autocomplete: "current-password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5, {
                            label: "Телефон",
                            help: isPhoneValid.value ? "Телефон для входа" : "Телефон должен содержать 11 цифр",
                            isValid: isPhoneValid.value
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                icon: unref(mdiAccount),
                                type: "tel",
                                name: "login",
                                autocomplete: "phone"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }, 8, ["help", "isValid"]),
                          createVNode(_sfc_main$5, {
                            label: "Пароль",
                            help: isPasswordValid.value ? "Пароль для входа" : "Пароль не может быть пустым",
                            isValid: isPasswordValid.value
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: form.password,
                                "onUpdate:modelValue": ($event) => form.password = $event,
                                icon: unref(mdiAsterisk),
                                type: "password",
                                name: "password",
                                autocomplete: "current-password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }, 8, ["help", "isValid"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      class: [cardClass, "max-h-screen overflow-y-auto"],
                      form: "",
                      title: "«Телеос-1» кабинет администратора",
                      headerIcon: unref(mdiDoor),
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      footer: withCtx(() => [
                        createVNode(_sfc_main$3, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4, {
                              type: "submit",
                              color: "success",
                              small: "",
                              disabled: isButtonDisabled.value,
                              label: isButtonDisabled.value ? "Загрузка..." : "Войти"
                            }, null, 8, ["disabled", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          label: "Телефон",
                          help: isPhoneValid.value ? "Телефон для входа" : "Телефон должен содержать 11 цифр",
                          isValid: isPhoneValid.value
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: form.phone,
                              "onUpdate:modelValue": ($event) => form.phone = $event,
                              icon: unref(mdiAccount),
                              type: "tel",
                              name: "login",
                              autocomplete: "phone"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }, 8, ["help", "isValid"]),
                        createVNode(_sfc_main$5, {
                          label: "Пароль",
                          help: isPasswordValid.value ? "Пароль для входа" : "Пароль не может быть пустым",
                          isValid: isPasswordValid.value
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: form.password,
                              "onUpdate:modelValue": ($event) => form.password = $event,
                              icon: unref(mdiAsterisk),
                              type: "password",
                              name: "password",
                              autocomplete: "current-password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }, 8, ["help", "isValid"])
                      ]),
                      _: 2
                    }, 1032, ["class", "headerIcon", "onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { bg: "greenIndigo" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$2, {
                    class: [cardClass, "max-h-screen overflow-y-auto"],
                    form: "",
                    title: "«Телеос-1» кабинет администратора",
                    headerIcon: unref(mdiDoor),
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    footer: withCtx(() => [
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4, {
                            type: "submit",
                            color: "success",
                            small: "",
                            disabled: isButtonDisabled.value,
                            label: isButtonDisabled.value ? "Загрузка..." : "Войти"
                          }, null, 8, ["disabled", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_sfc_main$5, {
                        label: "Телефон",
                        help: isPhoneValid.value ? "Телефон для входа" : "Телефон должен содержать 11 цифр",
                        isValid: isPhoneValid.value
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: form.phone,
                            "onUpdate:modelValue": ($event) => form.phone = $event,
                            icon: unref(mdiAccount),
                            type: "tel",
                            name: "login",
                            autocomplete: "phone"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }, 8, ["help", "isValid"]),
                      createVNode(_sfc_main$5, {
                        label: "Пароль",
                        help: isPasswordValid.value ? "Пароль для входа" : "Пароль не может быть пустым",
                        isValid: isPasswordValid.value
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: form.password,
                            "onUpdate:modelValue": ($event) => form.password = $event,
                            icon: unref(mdiAsterisk),
                            type: "password",
                            name: "password",
                            autocomplete: "current-password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }, 8, ["help", "isValid"])
                    ]),
                    _: 2
                  }, 1032, ["class", "headerIcon", "onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-DKfsf4Oc.js.map
