import { b as useRoute, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from './server.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$1 } from './CardBox-SmAHmX3l.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$5 } from './FormControl-CBzBHuLM.mjs';
import { _ as _sfc_main$4 } from './GroupsIdSelector-B3ZQHziW.mjs';
import { _ as _sfc_main$6 } from './colors-BYRMrYIa.mjs';
import { ref, reactive, watch, withCtx, unref, createVNode, withDirectives, vModelCheckbox, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiChartTimelineVariant, mdiSend } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$1 } from './SectionMain-oKKzVNTB.mjs';
import { _ as _sfc_main$2 } from './SectionTitleLineWithButton-7kpWGLD1.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const mainStore = useMainStore();
    const preSelectedGroups = ref([]);
    function boolToInt(bool) {
      return bool === true ? 1 : 0;
    }
    function removeTfromDateTime(date) {
      date = date.concat(":00");
      return date.replace("T", " ");
    }
    const displayMessage = ref("");
    const displayTitle = ref("\u0422\u0435\u043B\u0435\u043E\u0441-1");
    const currentDate = (/* @__PURE__ */ new Date()).toISOString();
    const form = reactive({
      title: displayTitle.value,
      message: displayMessage.value,
      groups_id: [],
      to_all: 0,
      users_id: [],
      token: mainStore.userToken,
      date: currentDate,
      now: 1,
      date: ""
    });
    const sendNow = ref(true);
    const dateToSend = ref("");
    const selectedGroups = ref([]);
    watch(selectedGroups, () => {
      form.to_all = boolToInt(selectedGroups.value.length === 0);
      form.groups_id = selectedGroups.value;
    });
    watch(sendNow, () => {
      form.now = boolToInt(sendNow.value);
      if (sendNow.value) {
        form.date = "";
      }
    });
    watch(dateToSend, () => {
      form.date = removeTfromDateTime(dateToSend.value);
    });
    watch(displayTitle, (newValue) => {
      form.title = newValue;
    });
    watch(displayMessage, (newValue) => {
      form.message = newValue;
    });
    const submit = async () => {
      if (form.message.length == 0) {
        alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442");
        return;
      }
      if (form.title.length == 0) {
        alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");
        return;
      }
      if (form.now == 0 && form.date == "") {
        alert("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0438\u0306\u0447\u0430\u0441\xBB");
        return;
      }
      if (selectedGroups.value.length == 0) {
        form.to_all = 1;
        form.groups_id = [];
      }
      const path = proxyBaseUrl + "create-message";
      await $fetch(path, {
        method: "POST",
        body: form
      }).then((r) => {
        const resp = r.message;
        if (resp === "ok") {
          alert("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!");
          form.message = "";
          form.title = "";
          form.subtitle = "";
          form.groups_id = [];
          form.users_id = [];
          form.to_all = 0;
          form.date = "";
          form.now = 1;
        } else {
          alert(resp);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$1$1;
      const _component_FormField = _sfc_main$2$1;
      const _component_GroupsIdSelector = _sfc_main$4;
      const _component_FormControl = _sfc_main$5;
      const _component_BaseIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430 PUSH-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "success",
                          label: "\u041F\u043B\u0430\u043D \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A",
                          to: "/pushmailing/planned"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "\u041F\u043B\u0430\u043D \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A",
                            to: "/pushmailing/planned"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-3 gap-6"${_scopeId2}><div class="col-span-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { form: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "\u0413\u0440\u0443\u043F\u043F\u044B",
                          help: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043B\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_GroupsIdSelector, {
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_GroupsIdSelector, {
                                  modelValue: selectedGroups.value,
                                  "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                  "pre-selected-groups": preSelectedGroups.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                          help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
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
                          label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                          help: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
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
                        _push4(`<div class="flex items-center my-8"${_scopeId3}><input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 focus:ring-primary-500 mr-4 p-3"${ssrIncludeBooleanAttr(Array.isArray(sendNow.value) ? ssrLooseContain(sendNow.value, null) : sendNow.value) ? " checked" : ""}${_scopeId3}><span${_scopeId3}>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441</span></div>`);
                        if (!sendNow.value) {
                          _push4(ssrRenderComponent(_component_FormField, {
                            label: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
                            help: "\u0412 \u044D\u0442\u0443 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430"
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
                          label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
                          onClick: ($event) => submit(),
                          icon: unref(mdiSend)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_FormField, {
                            label: "\u0413\u0440\u0443\u043F\u043F\u044B",
                            help: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043B\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_GroupsIdSelector, {
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                            help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
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
                            label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                            help: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
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
                            createVNode("span", null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441")
                          ]),
                          !sendNow.value ? (openBlock(), createBlock(_component_FormField, {
                            key: 0,
                            label: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
                            help: "\u0412 \u044D\u0442\u0443 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430"
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
                              label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
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
                  _push3(`<span class="font-light text-lg ml-2"${_scopeId2}>\u0422\u0435\u043B\u0435\u043E\u0441-1</span></div><span class="font-light text-display"${_scopeId2}>\u0441\u0435\u0439\u0447\u0430\u0441</span></div><div class="w-full flex flex-col px-2 py-2"${_scopeId2}>`);
                  if (displayTitle.value !== "") {
                    _push3(`<span class="font-bold text-display mb-1"${_scopeId2}>${ssrInterpolate(displayTitle.value)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.displaySubtitle !== "") {
                    _push3(`<span class="font-medium text-display my-1"${_scopeId2}>${ssrInterpolate(_ctx.displaySubtitle)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span class="font-light text-display mt-1 text-ellipsis line-clamp-2"${_scopeId2}>${ssrInterpolate(displayMessage.value)}</span></div></div></div></div>`);
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      icon: unref(mdiChartTimelineVariant),
                      title: "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430 PUSH-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "success",
                          label: "\u041F\u043B\u0430\u043D \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A",
                          to: "/pushmailing/planned"
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    createVNode("div", { class: "grid grid-cols-3 gap-6" }, [
                      createVNode("div", { class: "col-span-2" }, [
                        createVNode(_sfc_main$3, { form: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormField, {
                              label: "\u0413\u0440\u0443\u043F\u043F\u044B",
                              help: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043B\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_GroupsIdSelector, {
                                  modelValue: selectedGroups.value,
                                  "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                  "pre-selected-groups": preSelectedGroups.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormField, {
                              label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                              help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
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
                              label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                              help: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
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
                              createVNode("span", null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441")
                            ]),
                            !sendNow.value ? (openBlock(), createBlock(_component_FormField, {
                              key: 0,
                              label: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
                              help: "\u0412 \u044D\u0442\u0443 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430"
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
                                label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
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
                              createVNode("span", { class: "font-light text-lg ml-2" }, "\u0422\u0435\u043B\u0435\u043E\u0441-1")
                            ]),
                            createVNode("span", { class: "font-light text-display" }, "\u0441\u0435\u0439\u0447\u0430\u0441")
                          ]),
                          createVNode("div", { class: "w-full flex flex-col px-2 py-2" }, [
                            displayTitle.value !== "" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "font-bold text-display mb-1"
                            }, toDisplayString(displayTitle.value), 1)) : createCommentVNode("", true),
                            _ctx.displaySubtitle !== "" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "font-medium text-display my-1"
                            }, toDisplayString(_ctx.displaySubtitle), 1)) : createCommentVNode("", true),
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
                  createVNode(_sfc_main$2, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430 PUSH-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, {
                        color: "success",
                        label: "\u041F\u043B\u0430\u043D \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A",
                        to: "/pushmailing/planned"
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode("div", { class: "grid grid-cols-3 gap-6" }, [
                    createVNode("div", { class: "col-span-2" }, [
                      createVNode(_sfc_main$3, { form: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, {
                            label: "\u0413\u0440\u0443\u043F\u043F\u044B",
                            help: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043B\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_GroupsIdSelector, {
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                            help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
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
                            label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                            help: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
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
                            createVNode("span", null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441")
                          ]),
                          !sendNow.value ? (openBlock(), createBlock(_component_FormField, {
                            key: 0,
                            label: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
                            help: "\u0412 \u044D\u0442\u0443 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430"
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
                              label: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
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
                            createVNode("span", { class: "font-light text-lg ml-2" }, "\u0422\u0435\u043B\u0435\u043E\u0441-1")
                          ]),
                          createVNode("span", { class: "font-light text-display" }, "\u0441\u0435\u0439\u0447\u0430\u0441")
                        ]),
                        createVNode("div", { class: "w-full flex flex-col px-2 py-2" }, [
                          displayTitle.value !== "" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "font-bold text-display mb-1"
                          }, toDisplayString(displayTitle.value), 1)) : createCommentVNode("", true),
                          _ctx.displaySubtitle !== "" ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "font-medium text-display my-1"
                          }, toDisplayString(_ctx.displaySubtitle), 1)) : createCommentVNode("", true),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pushmailing/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ClpBPdZz.mjs.map
