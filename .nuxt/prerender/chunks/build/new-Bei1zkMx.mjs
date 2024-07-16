import { _ as _sfc_main$3 } from './CardBoxModal-BXsowXkc.mjs';
import { c as useRouter, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from './server.mjs';
import { _ as _sfc_main$4 } from './SectionTitleLine-DzOtNnyA.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$5 } from './FormControl-CBzBHuLM.mjs';
import { _ as _sfc_main$6 } from './BaseButtons-BgEV_qrs.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1 } from './CardBox-SmAHmX3l.mjs';
import { reactive, ref, withCtx, createVNode, toDisplayString, unref, withDirectives, vModelCheckbox, withModifiers, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiChevronLeft } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$1 } from './SectionMain-oKKzVNTB.mjs';
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
import 'file:///Users/admin/work/teleos-admin/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/admin/work/teleos-admin/node_modules/maska/dist/maska.js';
import './nuxt-link-B4HAH-BK.mjs';

const _sfc_main = {
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const mainStore = useMainStore();
    const form = reactive({
      fio: "",
      email: "",
      phone: "",
      password: ""
    });
    const approve = reactive({
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
        chats: {
          id: 6,
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
    ref(0);
    const isErrorModalActive = ref(false);
    const errorText = ref("");
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    function validatePhone(phone) {
      const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      return re.test(String(phone).toLowerCase());
    }
    const submit = () => {
      if (form.name == "" || form.email == "" || form.password == "") {
        isErrorModalActive.value = true;
        errorText.value = "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F";
        return;
      }
      if (form.password != approve.password) {
        isErrorModalActive.value = true;
        errorText.value = "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442";
        return;
      }
      if (!validateEmail(form.email)) {
        isErrorModalActive.value = true;
        errorText.value = "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0438\u0306 email";
        return;
      }
      if (!validatePhone(form.phone)) {
        isErrorModalActive.value = true;
        errorText.value = "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0438\u0306 \u0442\u0435\u043B\u0435\u0444\u043E\u043D";
        return;
      }
      const data = {
        token: mainStore.userToken,
        fio: form.fio,
        email: form.email,
        phone: form.phone,
        password: form.password,
        type: "operator",
        active: "1"
      };
      const path = proxyBaseUrl + "add-admin";
      $fetch(path, {
        method: "POST",
        body: data
      }).then((r) => {
        const resp = r.message;
        if (resp != "ok") {
          return;
        }
        setPrivelegesToAdmin(r.admin[0].id).then(() => {
          router.push("/admins");
        });
      });
    };
    const setPrivelegesToAdmin = async (id) => {
      const selectedSections = sectionsToArray(sections.sectionsData);
      const path = proxyBaseUrl + "set-privilege";
      const data = {
        token: mainStore.userToken,
        admin_id: id,
        sections: selectedSections
      };
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
      const _component_FormField = _sfc_main$2$1;
      const _component_FormControl = _sfc_main$5;
      const _component_BaseButtons = _sfc_main$6;
      const _component_BaseButton = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CardBoxModal, {
        modelValue: isErrorModalActive.value,
        "onUpdate:modelValue": ($event) => isErrorModalActive.value = $event,
        title: "\u041E\u0448\u0438\u0431\u043A\u0430"
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
                    title: "\u041D\u043E\u0432\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",
                    back: true,
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                    form: "",
                    onSubmit: submit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "\u0418\u043C\u044F",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                          label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                name: "phone",
                                autocomplete: "phone"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.phone,
                                  "onUpdate:modelValue": ($event) => form.phone = $event,
                                  name: "phone",
                                  autocomplete: "phone"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: approve.password,
                                "onUpdate:modelValue": ($event) => approve.password = $event,
                                name: "password",
                                type: "password",
                                autocomplete: "password"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: approve.password,
                                  "onUpdate:modelValue": ($event) => approve.password = $event,
                                  name: "password",
                                  type: "password",
                                  autocomplete: "password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="flex justify-center text-center text-base"${_scopeId3}> \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 </span>`);
                      } else {
                        return [
                          createVNode(_component_FormField, {
                            label: "\u0418\u043C\u044F",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                name: "phone",
                                autocomplete: "phone"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                          createVNode(_component_FormField, {
                            label: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: approve.password,
                                "onUpdate:modelValue": ($event) => approve.password = $event,
                                name: "password",
                                type: "password",
                                autocomplete: "password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "flex justify-center text-center text-base" }, " \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.admins.value) ? ssrLooseContain(sections.sectionsData.admins.value, null) : sections.sectionsData.admins.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.chats.value) ? ssrLooseContain(sections.sectionsData.chats.value, null) : sections.sectionsData.chats.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>\u0427\u0430\u0442\u044B</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.clients.value) ? ssrLooseContain(sections.sectionsData.clients.value, null) : sections.sectionsData.clients.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>\u041A\u043B\u0438\u0435\u043D\u0442\u044B</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.groups.value) ? ssrLooseContain(sections.sectionsData.groups.value, null) : sections.sectionsData.groups.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>\u0413\u0440\u0443\u043F\u043F\u044B</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.mailing.value) ? ssrLooseContain(sections.sectionsData.mailing.value, null) : sections.sectionsData.mailing.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430</span></div><div class="flex items-center my-2"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sections.sectionsData.advertising.value) ? ssrLooseContain(sections.sectionsData.advertising.value, null) : sections.sectionsData.advertising.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>\u0420\u0435\u043A\u043B\u0430\u043C\u0430</span></div>`);
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
                            createVNode("span", null, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.chats.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.chats.value]
                            ]),
                            createVNode("span", null, "\u0427\u0430\u0442\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.clients.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.clients.value]
                            ]),
                            createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.groups.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.groups.value]
                            ]),
                            createVNode("span", null, "\u0413\u0440\u0443\u043F\u043F\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.mailing.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.mailing.value]
                            ]),
                            createVNode("span", null, "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.advertising.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.advertising.value]
                            ]),
                            createVNode("span", null, "\u0420\u0435\u043A\u043B\u0430\u043C\u0430")
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
                          label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                          to: "/admins"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "success",
                          label: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
                          onClick: ($event) => submit()
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                            to: "/admins"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
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
                      title: "\u041D\u043E\u0432\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",
                      back: true,
                      main: ""
                    }, null, 8, ["icon"]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_sfc_main$2, {
                        title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                        form: "",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, {
                            label: "\u0418\u043C\u044F",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.phone,
                                "onUpdate:modelValue": ($event) => form.phone = $event,
                                name: "phone",
                                autocomplete: "phone"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                          createVNode(_component_FormField, {
                            label: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
                            help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: approve.password,
                                "onUpdate:modelValue": ($event) => approve.password = $event,
                                name: "password",
                                type: "password",
                                autocomplete: "password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "flex justify-center text-center text-base" }, " \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 ")
                        ]),
                        _: 1
                      }, 8, ["onSubmit"]),
                      createVNode(_sfc_main$2, { title: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.admins.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.admins.value]
                            ]),
                            createVNode("span", null, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.chats.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.chats.value]
                            ]),
                            createVNode("span", null, "\u0427\u0430\u0442\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.clients.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.clients.value]
                            ]),
                            createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.groups.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.groups.value]
                            ]),
                            createVNode("span", null, "\u0413\u0440\u0443\u043F\u043F\u044B")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.mailing.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.mailing.value]
                            ]),
                            createVNode("span", null, "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430")
                          ]),
                          createVNode("div", { class: "flex items-center my-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                              "onUpdate:modelValue": ($event) => sections.sectionsData.advertising.value = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, sections.sectionsData.advertising.value]
                            ]),
                            createVNode("span", null, "\u0420\u0435\u043A\u043B\u0430\u043C\u0430")
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
                            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                            to: "/admins"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
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
                    title: "\u041D\u043E\u0432\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",
                    back: true,
                    main: ""
                  }, null, 8, ["icon"]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                    createVNode(_sfc_main$2, {
                      title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                      form: "",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormField, {
                          label: "\u0418\u043C\u044F",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                          label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.phone,
                              "onUpdate:modelValue": ($event) => form.phone = $event,
                              name: "phone",
                              autocomplete: "phone"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "\u041F\u0430\u0440\u043E\u043B\u044C",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
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
                        createVNode(_component_FormField, {
                          label: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
                          help: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: approve.password,
                              "onUpdate:modelValue": ($event) => approve.password = $event,
                              name: "password",
                              type: "password",
                              autocomplete: "password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "flex justify-center text-center text-base" }, " \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 ")
                      ]),
                      _: 1
                    }, 8, ["onSubmit"]),
                    createVNode(_sfc_main$2, { title: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.admins.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.admins.value]
                          ]),
                          createVNode("span", null, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.chats.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.chats.value]
                          ]),
                          createVNode("span", null, "\u0427\u0430\u0442\u044B")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.clients.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.clients.value]
                          ]),
                          createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.groups.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.groups.value]
                          ]),
                          createVNode("span", null, "\u0413\u0440\u0443\u043F\u043F\u044B")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.mailing.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.mailing.value]
                          ]),
                          createVNode("span", null, "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430")
                        ]),
                        createVNode("div", { class: "flex items-center my-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            class: "form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3",
                            "onUpdate:modelValue": ($event) => sections.sectionsData.advertising.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, sections.sectionsData.advertising.value]
                          ]),
                          createVNode("span", null, "\u0420\u0435\u043A\u043B\u0430\u043C\u0430")
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
                          label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                          to: "/admins"
                        }),
                        createVNode(_component_BaseButton, {
                          color: "success",
                          label: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admins/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-Bei1zkMx.mjs.map
