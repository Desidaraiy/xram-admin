import { b as useRoute, c as useRouter, a as useMainStore, _ as __nuxt_component_0, p as proxyBaseUrl } from "../server.mjs";
import { _ as _sfc_main$5 } from "./SectionTitleLine-DzOtNnyA.js";
import { _ as _sfc_main$6, a as _sfc_main$8 } from "./FormControl-CBzBHuLM.js";
import { _ as _sfc_main$7 } from "./GroupsIdSelector-B3ZQHziW.js";
import { ref, computed, watch, mergeProps, useSSRContext, reactive, withCtx, unref, createVNode, withDirectives, vModelCheckbox } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { mdiUpload, mdiChevronLeft } from "@mdi/js";
import { a as _sfc_main$2, _ as _sfc_main$4 } from "./CardBox-SmAHmX3l.js";
import { _ as _sfc_main$9 } from "./BaseButtons-BgEV_qrs.js";
import { _ as _sfc_main$3 } from "./SectionMain-oKKzVNTB.js";
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
const _sfc_main$1 = {
  __name: "FormFilePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [Object, File, Array],
      default: null
    },
    label: {
      type: String,
      default: "Upload"
    },
    icon: {
      type: String,
      default: mdiUpload
    },
    accept: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "info"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const root = ref(null);
    const file = ref(props.modelValue);
    const modelValueProp = computed(() => props.modelValue);
    watch(modelValueProp, (value) => {
      file.value = value;
      if (!value) {
        root.value.input.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-stretch justify-start relative" }, _attrs))}><label class="inline-flex">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        as: "a",
        label: __props.label,
        icon: __props.icon,
        color: __props.color,
        class: { "rounded-r-none": file.value }
      }, null, _parent));
      _push(`<input type="file" class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"${ssrRenderAttr("accept", __props.accept)}></label>`);
      if (file.value) {
        _push(`<div><span class="inline-flex px-4 py-2 justify-center bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r">${ssrInterpolate(file.value.name)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormFilePicker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    const preSelectedGroups = ref([]);
    const mainStore = useMainStore();
    const pictureToUpload = ref(null);
    const previewToUpload = ref(null);
    const selectedGroups = ref([]);
    const form = reactive({
      action_url: "",
      token: mainStore.userToken,
      text: "",
      title: "",
      to_all: true,
      groups_id: [],
      date_start: "",
      date_end: "",
      redirect: false
    });
    const addAdvert = async () => {
      let formdata = new FormData();
      if (previewToUpload.value === null) {
        alert("Не выбран графический файл");
        return;
      } else {
        formdata.append("preview", previewToUpload.value);
      }
      if (form.redirect === false && pictureToUpload.value === null) {
        alert("Не выбран графический файл");
        return;
      } else {
        formdata.append("picture", pictureToUpload.value);
      }
      if (form.action_url == "") {
        alert("Не введена ссылка");
        return;
      }
      if (form.text == "") {
        alert("Не введен текст");
        return;
      }
      if (form.title == "") {
        alert("Не введено название");
        return;
      }
      if (form.date_start == "" || form.date_end == "") {
        alert("Не введены даты");
        return;
      }
      formdata.append("action_url", form.action_url);
      formdata.append("text", form.text);
      formdata.append("date_start", form.date_start);
      formdata.append("date_end", form.date_end);
      formdata.append("redirect", boolToInt(form.redirect));
      formdata.append("token", form.token);
      formdata.append("title", form.title);
      const path = proxyBaseUrl + "add-advertising";
      await $fetch(path, {
        method: "POST",
        body: formdata
      }).then(async (r) => {
        if (r.message === "ok") {
          await setVisibility(r.advertise.id);
          router.back();
          mainStore.getAdvertsList();
        } else {
          alert("Ошибка: Графический файл " + r.picture);
        }
      });
      formdata = new FormData();
    };
    const setVisibility = async (id) => {
      console.log("set visibility", id);
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
    watch(selectedGroups, () => {
      form.to_all = selectedGroups.value.length === 0;
      form.groups_id = selectedGroups.value;
    });
    function boolToInt(bool) {
      return bool === true ? 1 : 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLine = _sfc_main$5;
      const _component_FormField = _sfc_main$6;
      const _component_GroupsIdSelector = _sfc_main$7;
      const _component_FormControl = _sfc_main$8;
      const _component_FormFilePicker = _sfc_main$1;
      const _component_BaseButtons = _sfc_main$9;
      const _component_BaseButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "Добавить объявление",
                    back: true,
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 w-full gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    title: "Информация",
                    form: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, { label: "Группы" }, {
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
                        _push4(ssrRenderComponent(_component_FormField, { label: "Без полноразмерной картинки " }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.redirect) ? ssrLooseContain(form.redirect, null) : form.redirect) ? " checked" : ""}${_scopeId4}>`);
                            } else {
                              return [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => form.redirect = $event
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelCheckbox, form.redirect]
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "Картинка для отображения в сторис (1080х1920, вертикаль, JPG, PNG, JPEG)" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormFilePicker, {
                                modelValue: pictureToUpload.value,
                                "onUpdate:modelValue": ($event) => pictureToUpload.value = $event,
                                label: "Загрузить картинку",
                                color: "success"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormFilePicker, {
                                  modelValue: pictureToUpload.value,
                                  "onUpdate:modelValue": ($event) => pictureToUpload.value = $event,
                                  label: "Загрузить картинку",
                                  color: "success"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "Миниатюра (500х500 JPG, PNG, JPEG)" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormFilePicker, {
                                modelValue: previewToUpload.value,
                                "onUpdate:modelValue": ($event) => previewToUpload.value = $event,
                                label: "Загрузить картинку",
                                color: "success"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormFilePicker, {
                                  modelValue: previewToUpload.value,
                                  "onUpdate:modelValue": ($event) => previewToUpload.value = $event,
                                  label: "Загрузить картинку",
                                  color: "success"
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
                              createVNode(_component_GroupsIdSelector, {
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])
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
                          }),
                          createVNode(_component_FormField, { label: "Без полноразмерной картинки " }, {
                            default: withCtx(() => [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => form.redirect = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, form.redirect]
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Картинка для отображения в сторис (1080х1920, вертикаль, JPG, PNG, JPEG)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormFilePicker, {
                                modelValue: pictureToUpload.value,
                                "onUpdate:modelValue": ($event) => pictureToUpload.value = $event,
                                label: "Загрузить картинку",
                                color: "success"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Миниатюра (500х500 JPG, PNG, JPEG)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormFilePicker, {
                                modelValue: previewToUpload.value,
                                "onUpdate:modelValue": ($event) => previewToUpload.value = $event,
                                label: "Загрузить картинку",
                                color: "success"
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
                          label: "Создать объявление",
                          onClick: ($event) => addAdvert()
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
                            label: "Создать объявление",
                            onClick: ($event) => addAdvert()
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
                      title: "Добавить объявление",
                      back: true,
                      main: ""
                    }, null, 8, ["icon"]),
                    createVNode("div", { class: "grid grid-cols-1 w-full gap-4" }, [
                      createVNode(_sfc_main$4, {
                        title: "Информация",
                        form: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, { label: "Группы" }, {
                            default: withCtx(() => [
                              createVNode(_component_GroupsIdSelector, {
                                modelValue: selectedGroups.value,
                                "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                                "pre-selected-groups": preSelectedGroups.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])
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
                          }),
                          createVNode(_component_FormField, { label: "Без полноразмерной картинки " }, {
                            default: withCtx(() => [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => form.redirect = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, form.redirect]
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Картинка для отображения в сторис (1080х1920, вертикаль, JPG, PNG, JPEG)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormFilePicker, {
                                modelValue: pictureToUpload.value,
                                "onUpdate:modelValue": ($event) => pictureToUpload.value = $event,
                                label: "Загрузить картинку",
                                color: "success"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { label: "Миниатюра (500х500 JPG, PNG, JPEG)" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormFilePicker, {
                                modelValue: previewToUpload.value,
                                "onUpdate:modelValue": ($event) => previewToUpload.value = $event,
                                label: "Загрузить картинку",
                                color: "success"
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
                            label: "Создать объявление",
                            onClick: ($event) => addAdvert()
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
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitleLine, {
                    icon: unref(mdiChevronLeft),
                    title: "Добавить объявление",
                    back: true,
                    main: ""
                  }, null, 8, ["icon"]),
                  createVNode("div", { class: "grid grid-cols-1 w-full gap-4" }, [
                    createVNode(_sfc_main$4, {
                      title: "Информация",
                      form: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormField, { label: "Группы" }, {
                          default: withCtx(() => [
                            createVNode(_component_GroupsIdSelector, {
                              modelValue: selectedGroups.value,
                              "onUpdate:modelValue": ($event) => selectedGroups.value = $event,
                              "pre-selected-groups": preSelectedGroups.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "pre-selected-groups"])
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
                        }),
                        createVNode(_component_FormField, { label: "Без полноразмерной картинки " }, {
                          default: withCtx(() => [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => form.redirect = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, form.redirect]
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "Картинка для отображения в сторис (1080х1920, вертикаль, JPG, PNG, JPEG)" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormFilePicker, {
                              modelValue: pictureToUpload.value,
                              "onUpdate:modelValue": ($event) => pictureToUpload.value = $event,
                              label: "Загрузить картинку",
                              color: "success"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { label: "Миниатюра (500х500 JPG, PNG, JPEG)" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormFilePicker, {
                              modelValue: previewToUpload.value,
                              "onUpdate:modelValue": ($event) => previewToUpload.value = $event,
                              label: "Загрузить картинку",
                              color: "success"
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
                          label: "Создать объявление",
                          onClick: ($event) => addAdvert()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/advertising/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=new-tBrshODa.js.map
