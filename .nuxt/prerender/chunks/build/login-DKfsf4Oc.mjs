import { _ as _sfc_main$5 } from './CardBoxModal-BXsowXkc.mjs';
import { d as useCookie, t as tokenCookieName, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from './server.mjs';
import { reactive, ref, watch, withCtx, createVNode, toDisplayString, unref, withModifiers, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/admin/work/teleos-admin/node_modules/vue-router/dist/vue-router.node.mjs';
import { mdiDoor, mdiAccount, mdiAsterisk } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$1 } from './SectionFullScreen-BkBF3oy_.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1 } from './CardBox-SmAHmX3l.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$4 } from './FormControl-CBzBHuLM.mjs';
import { _ as _sfc_main$3 } from './BaseButtons-BgEV_qrs.mjs';
import './colors-BYRMrYIa.mjs';
import './OverlayLayer-Ca6LWwyv.mjs';
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
import 'file:///Users/admin/work/teleos-admin/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/maska/dist/maska.js';
import './nuxt-link-B4HAH-BK.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      phone: "",
      password: ""
    });
    const etoken = useCookie(tokenCookieName, { sameSite: "None", secure: true });
    const errorDialogText = ref("\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C");
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
        errorDialogText.value = "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F";
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
          errorDialogText.value = "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C";
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBoxModal = _sfc_main$5;
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isErrorModalActive.value,
        "onUpdate:modelValue": ($event) => isErrorModalActive.value = $event,
        title: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430",
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
                    title: "\xAB\u0422\u0435\u043B\u0435\u043E\u0441-1\xBB \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430",
                    headerIcon: unref(mdiDoor),
                    onSubmit: submit
                  }, {
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1$1, {
                                type: "submit",
                                color: "success",
                                small: "",
                                disabled: isButtonDisabled.value,
                                label: isButtonDisabled.value ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0412\u043E\u0438\u0306\u0442\u0438"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1$1, {
                                  type: "submit",
                                  color: "success",
                                  small: "",
                                  disabled: isButtonDisabled.value,
                                  label: isButtonDisabled.value ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0412\u043E\u0438\u0306\u0442\u0438"
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
                              createVNode(_sfc_main$1$1, {
                                type: "submit",
                                color: "success",
                                small: "",
                                disabled: isButtonDisabled.value,
                                label: isButtonDisabled.value ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0412\u043E\u0438\u0306\u0442\u0438"
                              }, null, 8, ["disabled", "label"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$2$1, {
                          label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                          help: isPhoneValid.value ? "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 11 \u0446\u0438\u0444\u0440",
                          isValid: isPhoneValid.value
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                icon: unref(mdiAccount),
                                type: "tel",
                                name: "login",
                                autocomplete: "phone"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4, {
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
                        _push4(ssrRenderComponent(_sfc_main$2$1, {
                          label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                          help: isPasswordValid.value ? "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C",
                          isValid: isPasswordValid.value
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, {
                                modelValue: form.password,
                                "onUpdate:modelValue": ($event) => form.password = $event,
                                icon: unref(mdiAsterisk),
                                type: "password",
                                name: "password",
                                autocomplete: "current-password"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4, {
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
                          createVNode(_sfc_main$2$1, {
                            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                            help: isPhoneValid.value ? "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 11 \u0446\u0438\u0444\u0440",
                            isValid: isPhoneValid.value
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, {
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
                          createVNode(_sfc_main$2$1, {
                            label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                            help: isPasswordValid.value ? "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C",
                            isValid: isPasswordValid.value
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, {
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
                      title: "\xAB\u0422\u0435\u043B\u0435\u043E\u0441-1\xBB \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430",
                      headerIcon: unref(mdiDoor),
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      footer: withCtx(() => [
                        createVNode(_sfc_main$3, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1$1, {
                              type: "submit",
                              color: "success",
                              small: "",
                              disabled: isButtonDisabled.value,
                              label: isButtonDisabled.value ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0412\u043E\u0438\u0306\u0442\u0438"
                            }, null, 8, ["disabled", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_sfc_main$2$1, {
                          label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                          help: isPhoneValid.value ? "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 11 \u0446\u0438\u0444\u0440",
                          isValid: isPhoneValid.value
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4, {
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
                        createVNode(_sfc_main$2$1, {
                          label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                          help: isPasswordValid.value ? "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C",
                          isValid: isPasswordValid.value
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4, {
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
                    title: "\xAB\u0422\u0435\u043B\u0435\u043E\u0441-1\xBB \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430",
                    headerIcon: unref(mdiDoor),
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    footer: withCtx(() => [
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1$1, {
                            type: "submit",
                            color: "success",
                            small: "",
                            disabled: isButtonDisabled.value,
                            label: isButtonDisabled.value ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0412\u043E\u0438\u0306\u0442\u0438"
                          }, null, 8, ["disabled", "label"])
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_sfc_main$2$1, {
                        label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                        help: isPhoneValid.value ? "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 11 \u0446\u0438\u0444\u0440",
                        isValid: isPhoneValid.value
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4, {
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
                      createVNode(_sfc_main$2$1, {
                        label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                        help: isPasswordValid.value ? "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" : "\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C",
                        isValid: isPasswordValid.value
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4, {
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

export { _sfc_main as default };
//# sourceMappingURL=login-DKfsf4Oc.mjs.map
