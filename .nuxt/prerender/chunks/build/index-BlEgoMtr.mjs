import { a as useMainStore, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$2 } from './SectionTitleLine-DzOtNnyA.mjs';
import { _ as _sfc_main$3 } from './CardBox-SmAHmX3l.mjs';
import { _ as _sfc_main$4 } from './TableSampleClients-cZ8HAdYi.mjs';
import { withCtx, unref, createVNode, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { mdiShieldAccount } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';
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
import './FormControl-CBzBHuLM.mjs';
import './BaseLevel-0o1EWMay.mjs';
import './BaseButtons-BgEV_qrs.mjs';
import './CardBoxModal-BXsowXkc.mjs';
import './OverlayLayer-Ca6LWwyv.mjs';
import './TableCheckboxCell-DxFE6wzt.mjs';

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
                    title: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBox, {
                    icon: unref(mdiShieldAccount),
                    title: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
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
                      title: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
                      main: ""
                    }, null, 8, ["icon"]),
                    createVNode(_component_CardBox, {
                      icon: unref(mdiShieldAccount),
                      title: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
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
                    title: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
                    main: ""
                  }, null, 8, ["icon"]),
                  createVNode(_component_CardBox, {
                    icon: unref(mdiShieldAccount),
                    title: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
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

export { _sfc_main as default };
//# sourceMappingURL=index-BlEgoMtr.mjs.map
