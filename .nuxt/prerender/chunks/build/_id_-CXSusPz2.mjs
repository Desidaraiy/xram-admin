import { b as useRoute, c as useRouter, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from './server.mjs';
import { _ as _sfc_main$3 } from './SectionTitleLine-DzOtNnyA.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$5 } from './FormControl-CBzBHuLM.mjs';
import { _ as _sfc_main$4 } from './GroupsIdSelector-B3ZQHziW.mjs';
import { _ as _sfc_main$6 } from './BaseButtons-BgEV_qrs.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1 } from './CardBox-SmAHmX3l.mjs';
import { ref, reactive, watch, withCtx, unref, openBlock, createBlock, createVNode, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiChevronLeft } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
import { _ as _sfc_main$1 } from './SectionMain-oKKzVNTB.mjs';
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
import './colors-BYRMrYIa.mjs';
import './nuxt-link-B4HAH-BK.mjs';

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
          alert("\u041E\u0448\u0438\u0431\u043A\u0430: ", r.picture);
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
      const _component_FormField = _sfc_main$2$1;
      const _component_GroupsIdSelector = _sfc_main$4;
      const _component_FormControl = _sfc_main$5;
      const _component_BaseButtons = _sfc_main$6;
      const _component_BaseButton = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 / " + unref(route).params.id,
                    back: true,
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 w-full gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                    form: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, { label: "\u0413\u0440\u0443\u043F\u043F\u044B" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (groupsLoaded.value) {
                                _push5(ssrRenderComponent(_component_GroupsIdSelector, {
                                  modelValue: selectedGroups.value,
                                  "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                  "pre-selected-groups": preSelectedGroups.value
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<div${_scopeId4}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0433\u0440\u0443\u043F\u043F...</div>`);
                              }
                            } else {
                              return [
                                groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                                  key: 0,
                                  modelValue: selectedGroups.value,
                                  "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                  "pre-selected-groups": preSelectedGroups.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0433\u0440\u0443\u043F\u043F..."))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.title,
                                "onUpdate:modelValue": ($event) => form.title = $event,
                                placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                type: "text"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.title,
                                  "onUpdate:modelValue": ($event) => form.title = $event,
                                  placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                  type: "text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.text,
                                "onUpdate:modelValue": ($event) => form.text = $event,
                                placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                type: "text"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.text,
                                  "onUpdate:modelValue": ($event) => form.text = $event,
                                  placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                  type: "text"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430" }, {
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
                        _push4(ssrRenderComponent(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u043D\u043E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.date_start,
                                "onUpdate:modelValue": ($event) => form.date_start = $event,
                                placeholder: "\u0414\u0430\u0442\u0430",
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.date_start,
                                  "onUpdate:modelValue": ($event) => form.date_start = $event,
                                  placeholder: "\u0414\u0430\u0442\u0430",
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u043E" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: form.date_end,
                                "onUpdate:modelValue": ($event) => form.date_end = $event,
                                placeholder: "\u0414\u0430\u0442\u0430",
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: form.date_end,
                                  "onUpdate:modelValue": ($event) => form.date_end = $event,
                                  placeholder: "\u0414\u0430\u0442\u0430",
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormField, { label: "\u0413\u0440\u0443\u043F\u043F\u044B" }, {
                            default: withCtx(() => [
                              groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                                key: 0,
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0433\u0440\u0443\u043F\u043F..."))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.title,
                                "onUpdate:modelValue": ($event) => form.title = $event,
                                placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.text,
                                "onUpdate:modelValue": ($event) => form.text = $event,
                                placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430" }, {
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
                          createVNode(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u043D\u043E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_start,
                                "onUpdate:modelValue": ($event) => form.date_start = $event,
                                placeholder: "\u0414\u0430\u0442\u0430",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u043E" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_end,
                                "onUpdate:modelValue": ($event) => form.date_end = $event,
                                placeholder: "\u0414\u0430\u0442\u0430",
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
                          label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                          to: "/advertising"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "success",
                          label: "\u0413\u043E\u0442\u043E\u0432\u043E",
                          onClick: ($event) => editAdvert()
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                            to: "/advertising"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "\u0413\u043E\u0442\u043E\u0432\u043E",
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
                      title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 / " + unref(route).params.id,
                      back: true,
                      main: ""
                    }, null, 8, ["icon", "title"]),
                    createVNode("div", { class: "grid grid-cols-1 w-full gap-4" }, [
                      createVNode(_sfc_main$2, {
                        title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                        form: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, { label: "\u0413\u0440\u0443\u043F\u043F\u044B" }, {
                            default: withCtx(() => [
                              groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                                key: 0,
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0433\u0440\u0443\u043F\u043F..."))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.title,
                                "onUpdate:modelValue": ($event) => form.title = $event,
                                placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.text,
                                "onUpdate:modelValue": ($event) => form.text = $event,
                                placeholder: "\u0422\u0435\u043A\u0441\u0442",
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430" }, {
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
                          createVNode(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u043D\u043E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_start,
                                "onUpdate:modelValue": ($event) => form.date_start = $event,
                                placeholder: "\u0414\u0430\u0442\u0430",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u043E" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: form.date_end,
                                "onUpdate:modelValue": ($event) => form.date_end = $event,
                                placeholder: "\u0414\u0430\u0442\u0430",
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
                            label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                            to: "/advertising"
                          }),
                          createVNode(_component_BaseButton, {
                            color: "success",
                            label: "\u0413\u043E\u0442\u043E\u0432\u043E",
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
                    title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 / " + unref(route).params.id,
                    back: true,
                    main: ""
                  }, null, 8, ["icon", "title"]),
                  createVNode("div", { class: "grid grid-cols-1 w-full gap-4" }, [
                    createVNode(_sfc_main$2, {
                      title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
                      form: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormField, { label: "\u0413\u0440\u0443\u043F\u043F\u044B" }, {
                          default: withCtx(() => [
                            groupsLoaded.value ? (openBlock(), createBlock(_component_GroupsIdSelector, {
                              key: 0,
                              modelValue: selectedGroups.value,
                              "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                              "pre-selected-groups": preSelectedGroups.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0433\u0440\u0443\u043F\u043F..."))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.title,
                              "onUpdate:modelValue": ($event) => form.title = $event,
                              placeholder: "\u0422\u0435\u043A\u0441\u0442",
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 (10-25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.text,
                              "onUpdate:modelValue": ($event) => form.text = $event,
                              placeholder: "\u0422\u0435\u043A\u0441\u0442",
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430" }, {
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
                        createVNode(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u043D\u043E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.date_start,
                              "onUpdate:modelValue": ($event) => form.date_start = $event,
                              placeholder: "\u0414\u0430\u0442\u0430",
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "\u0414\u0430\u0442\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u043E" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: form.date_end,
                              "onUpdate:modelValue": ($event) => form.date_end = $event,
                              placeholder: "\u0414\u0430\u0442\u0430",
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
                          label: "\u041E\u0442\u043C\u0435\u043D\u0430",
                          to: "/advertising"
                        }),
                        createVNode(_component_BaseButton, {
                          color: "success",
                          label: "\u0413\u043E\u0442\u043E\u0432\u043E",
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-CXSusPz2.mjs.map
