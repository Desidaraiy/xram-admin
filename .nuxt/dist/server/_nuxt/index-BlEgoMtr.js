import { a as useMainStore, _ as __nuxt_component_0 } from "../server.mjs";
import { _ as _sfc_main$2 } from "./SectionTitleLine-DzOtNnyA.js";
import { _ as _sfc_main$3 } from "./CardBox-SmAHmX3l.js";
import { _ as _sfc_main$4 } from "./TableSampleClients-cZ8HAdYi.js";
import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { mdiShieldAccount } from "@mdi/js";
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
import "./FormControl-CBzBHuLM.js";
import "./BaseLevel-0o1EWMay.js";
import "./BaseButtons-BgEV_qrs.js";
import "./CardBoxModal-BXsowXkc.js";
import "./OverlayLayer-Ca6LWwyv.js";
import "./TableCheckboxCell-DxFE6wzt.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const handleSearchString = (value) => {
      mainStore.setSearchingClientsQuery(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionTitleLine = _sfc_main$2;
      const _component_CardBox = _sfc_main$3;
      const _component_TableSampleClients = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLine, {
                    icon: unref(mdiShieldAccount),
                    title: "Клиенты",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBox, {
                    icon: unref(mdiShieldAccount),
                    title: "Клиенты",
                    "has-table": "",
                    "has-searchbar": "",
                    onSearchString: handleSearchString
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableSampleClients, { checkable: true }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableSampleClients, { checkable: true })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitleLine, {
                      icon: unref(mdiShieldAccount),
                      title: "Клиенты",
                      main: ""
                    }, null, 8, ["icon"]),
                    createVNode(_component_CardBox, {
                      icon: unref(mdiShieldAccount),
                      title: "Клиенты",
                      "has-table": "",
                      "has-searchbar": "",
                      onSearchString: handleSearchString
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TableSampleClients, { checkable: true })
                      ]),
                      _: 1
                    }, 8, ["icon"])
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
                    icon: unref(mdiShieldAccount),
                    title: "Клиенты",
                    main: ""
                  }, null, 8, ["icon"]),
                  createVNode(_component_CardBox, {
                    icon: unref(mdiShieldAccount),
                    title: "Клиенты",
                    "has-table": "",
                    "has-searchbar": "",
                    onSearchString: handleSearchString
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_TableSampleClients, { checkable: true })
                    ]),
                    _: 1
                  }, 8, ["icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BlEgoMtr.js.map
