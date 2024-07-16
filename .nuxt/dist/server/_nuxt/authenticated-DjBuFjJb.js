import { g as defineStore, e as useStyleStore, a as useMainStore, f as containerMaxW, d as useCookie, t as tokenCookieName } from "../server.mjs";
import { mergeProps, useSSRContext, computed, ref, createVNode, resolveDynamicComponent, withCtx, unref, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { mdiAccount, mdiLogout, mdiThemeLightDark, mdiChevronUp, mdiChevronDown, mdiClose, mdiDotsVertical, mdiMinus, mdiPlus, mdiLoading, mdiBackburger, mdiForwardburger, mdiMenu } from "@mdi/js";
import { RouterLink, useRouter } from "vue-router";
import { _ as _sfc_main$b, h as getButtonColor } from "./colors-BYRMrYIa.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-B4HAH-BK.js";
import { _ as _sfc_main$c } from "./OverlayLayer-Ca6LWwyv.js";
import { _ as _sfc_main$d } from "./BaseLevel-0o1EWMay.js";
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
const menuNavBar = [
  // {
  //   icon: mdiMenu,
  //   label: 'Sample menu',
  //   menu: [
  //     {
  //       icon: mdiClockOutline,
  //       label: 'Item One'
  //     },
  //     {
  //       icon: mdiCloud,
  //       label: 'Item Two'
  //     },
  //     {
  //       isDivider: true
  //     },
  //     {
  //       icon: mdiCrop,
  //       label: 'Item Last'
  //     }
  //   ]
  // },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "Администраторы",
        to: "/admins"
      },
      {
        isDivider: true
      },
      {
        icon: mdiLogout,
        label: "Выйти",
        isLogout: true
      }
    ]
  },
  {
    icon: mdiThemeLightDark,
    label: "Темная/Светлая тема",
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiLogout,
    label: "Выйти",
    isDesktopNoLabel: true,
    isLogout: true
  }
];
const useLayoutStore = defineStore("layout", {
  state: () => ({
    isAsideMobileExpanded: false,
    isAsideLgActive: false
  }),
  actions: {
    asideMobileToggle() {
      this.isAsideMobileExpanded = !this.isAsideMobileExpanded;
    }
  }
});
const _sfc_main$a = {
  __name: "BaseDivider",
  __ssrInlineRender: true,
  props: {
    navBar: Boolean
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<hr${ssrRenderAttrs(mergeProps({
        class: [props.navBar ? "hidden lg:block lg:my-0.5 dark:border-slate-700" : "my-6 -mx-6 dark:border-slate-800", "border-t border-gray-100"]
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseDivider.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "NavBarItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const is = computed(() => {
      if (props.item.href) {
        return "a";
      }
      if (props.item.to) {
        return RouterLink;
      }
      return "div";
    });
    const styleStore = useStyleStore();
    const componentClass = computed(() => {
      const base = [
        isDropdownActive.value ? `${styleStore.navBarItemLabelActiveColorStyle} dark:text-slate-400` : `${styleStore.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${styleStore.navBarItemLabelHoverStyle}`,
        props.item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3"
      ];
      if (props.item.isDesktopNoLabel) {
        base.push("lg:w-16", "lg:justify-center");
      }
      return base;
    });
    const itemLabel = computed(() => props.item.isCurrentUser ? useMainStore().userName : props.item.label);
    const isDropdownActive = ref(false);
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (props.item.menu) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    const menuClickDropdown = (event, item) => {
      emit("menu-click", event, item);
    };
    const root = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.item.isDivider) {
        _push(ssrRenderComponent(_sfc_main$a, mergeProps({ "nav-bar": "" }, _attrs), null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
          ref_key: "root",
          ref: root,
          class: ["block lg:flex items-center relative cursor-pointer", componentClass.value],
          to: __props.item.to ?? null,
          href: __props.item.href ?? null,
          onClick: menuClick
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{ "bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu }, "flex items-center"])}"${_scopeId}>`);
              if (__props.item.icon) {
                _push2(ssrRenderComponent(_sfc_main$b, {
                  path: __props.item.icon,
                  class: "transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([{ "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }, "px-2 transition-colors"])}"${_scopeId}>${ssrInterpolate(itemLabel.value)}</span>`);
              if (__props.item.menu) {
                _push2(ssrRenderComponent(_sfc_main$b, {
                  path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                  class: "hidden lg:inline-flex transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (__props.item.menu) {
                _push2(`<div class="${ssrRenderClass([{ "lg:hidden": !isDropdownActive.value }, "text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$8, {
                  menu: __props.item.menu,
                  onMenuClick: menuClickDropdown
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", {
                  class: ["flex items-center", { "bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu }]
                }, [
                  __props.item.icon ? (openBlock(), createBlock(_sfc_main$b, {
                    key: 0,
                    path: __props.item.icon,
                    class: "transition-colors"
                  }, null, 8, ["path"])) : createCommentVNode("", true),
                  createVNode("span", {
                    class: ["px-2 transition-colors", { "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }]
                  }, toDisplayString(itemLabel.value), 3),
                  __props.item.menu ? (openBlock(), createBlock(_sfc_main$b, {
                    key: 1,
                    path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                    class: "hidden lg:inline-flex transition-colors"
                  }, null, 8, ["path"])) : createCommentVNode("", true)
                ], 2),
                __props.item.menu ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700", { "lg:hidden": !isDropdownActive.value }]
                }, [
                  createVNode(_sfc_main$8, {
                    menu: __props.item.menu,
                    onMenuClick: menuClickDropdown
                  }, null, 8, ["menu"])
                ], 2)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
      }
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBarItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "NavBarMenuList",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$9, {
          key: index,
          item,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBarMenuList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "NavBarItemPlain",
  __ssrInlineRender: true,
  props: {
    display: {
      type: String,
      default: "flex"
    },
    useMargin: Boolean
  },
  setup(__props) {
    const styleStore = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[__props.display, unref(styleStore).navBarItemLabelStyle, unref(styleStore).navBarItemLabelHoverStyle, __props.useMargin ? "my-2 mx-3" : "py-2 px-3"], "items-center cursor-pointer dark:text-white dark:hover:text-slate-400"]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBarItemPlain.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const isMenuNavBarActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800" }, _attrs))}><div class="${ssrRenderClass([unref(containerMaxW), "flex lg:items-stretch"])}"><div class="flex flex-1 items-stretch h-14">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="flex-none items-stretch flex h-14 lg:hidden">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        onClick: ($event) => isMenuNavBarActive.value = !isMenuNavBarActive.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$b, {
              path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$b, {
                path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
                size: "24"
              }, null, 8, ["path"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([[isMenuNavBarActive.value ? "block" : "hidden"], "max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800"])}">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "AsideMenuItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    isDropdownList: Boolean
  },
  emits: ["menu-click"],
  setup(__props, { emit: __emit }) {
    const mainStore = useMainStore();
    const unreadCount = computed(() => mainStore.allUnreadMessagesCount);
    const props = __props;
    const emit = __emit;
    const styleStore = useStyleStore();
    const hasColor = computed(() => props.item && props.item.color);
    const asideMenuItemActiveStyle = computed(() => hasColor.value ? "" : styleStore.asideMenuItemActiveStyle);
    const isDropdownActive = ref(false);
    const componentClass = computed(() => [
      props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",
      hasColor.value ? getButtonColor(props.item.color, false, true) : styleStore.asideMenuItemStyle
    ]);
    const hasDropdown = computed(() => !!props.item.menu);
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      if (__props.item.to) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.item.to ?? null,
          target: __props.item.target ?? null,
          class: ["flex cursor-pointer dark:text-slate-300 dark:hover:text-white", componentClass.value],
          onClick: menuClick
        }, {
          default: withCtx((vSlot, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.item.icon) {
                _push2(ssrRenderComponent(_sfc_main$b, {
                  path: __props.item.icon,
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-16",
                  size: 18
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([[{ "pr-12": !hasDropdown.value }, vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""], "grow text-ellipsis line-clamp-1"])}"${_scopeId}>${ssrInterpolate(__props.item.label)}</span>`);
              if (__props.item.label == "Чаты") {
                _push2(`<div${_scopeId}>`);
                if (unreadCount.value > 0) {
                  _push2(`<div class="flex flex-col items-center justify-center rounded-full bg-red-500 h-6 p-2"${_scopeId}><span class="text-xs font-bold text-white"${_scopeId}>${ssrInterpolate(unreadCount.value)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (hasDropdown.value) {
                _push2(ssrRenderComponent(_sfc_main$b, {
                  path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-12"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.item.icon ? (openBlock(), createBlock(_sfc_main$b, {
                  key: 0,
                  path: __props.item.icon,
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-16",
                  size: 18
                }, null, 8, ["path", "class"])) : createCommentVNode("", true),
                createVNode("span", {
                  class: ["grow text-ellipsis line-clamp-1", [{ "pr-12": !hasDropdown.value }, vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]]
                }, toDisplayString(__props.item.label), 3),
                __props.item.label == "Чаты" ? (openBlock(), createBlock("div", { key: 1 }, [
                  unreadCount.value > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col items-center justify-center rounded-full bg-red-500 h-6 p-2"
                  }, [
                    createVNode("span", { class: "text-xs font-bold text-white" }, toDisplayString(unreadCount.value), 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                hasDropdown.value ? (openBlock(), createBlock(_sfc_main$b, {
                  key: 2,
                  path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-12"
                }, null, 8, ["path", "class"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("a"), {
          to: __props.item.to ?? null,
          href: __props.item.href ?? null,
          target: __props.item.target ?? null,
          class: ["flex cursor-pointer dark:text-slate-300 dark:hover:text-white", componentClass.value],
          onClick: menuClick
        }, {
          default: withCtx((vSlot, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.item.icon) {
                _push2(ssrRenderComponent(_sfc_main$b, {
                  path: __props.item.icon,
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-16",
                  size: 18
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([[{ "pr-12": !hasDropdown.value }, vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""], "grow text-ellipsis line-clamp-1"])}"${_scopeId}>${ssrInterpolate(__props.item.label)}</span>`);
              if (hasDropdown.value) {
                _push2(ssrRenderComponent(_sfc_main$b, {
                  path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-12"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.item.icon ? (openBlock(), createBlock(_sfc_main$b, {
                  key: 0,
                  path: __props.item.icon,
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-16",
                  size: 18
                }, null, 8, ["path", "class"])) : createCommentVNode("", true),
                createVNode("span", {
                  class: ["grow text-ellipsis line-clamp-1", [{ "pr-12": !hasDropdown.value }, vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]]
                }, toDisplayString(__props.item.label), 3),
                hasDropdown.value ? (openBlock(), createBlock(_sfc_main$b, {
                  key: 1,
                  path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                  class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                  w: "w-12"
                }, null, 8, ["path", "class"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
      }
      if (hasDropdown.value) {
        _push(ssrRenderComponent(_sfc_main$4, {
          menu: __props.item.menu,
          class: [unref(styleStore).asideMenuDropdownStyle, isDropdownActive.value ? "block dark:bg-slate-800/50" : "hidden"],
          "is-dropdown-list": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenuItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AsideMenuList",
  __ssrInlineRender: true,
  props: {
    isDropdownList: Boolean,
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$5, {
          key: index,
          item,
          "is-dropdown-list": __props.isDropdownList,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenuList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AsideMenuLayer",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useLayoutStore();
    const styleStore = useStyleStore();
    const logoutItem = computed(() => ({
      label: "Выйти",
      icon: mdiLogout,
      color: "info",
      isLogout: true
    }));
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        id: "aside",
        class: "lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore).asideStyle, "lg:rounded-xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"])}"><div class="${ssrRenderClass([unref(styleStore).asideBrandStyle, "flex flex-row h-14 items-center justify-between bg-blue-500 dark:bg-blue-500"])}"><div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"><b class="font-black">Телеос-1</b></div><button class="hidden lg:inline-block xl:hidden p-3">`);
      _push(ssrRenderComponent(_sfc_main$b, { path: unref(mdiClose) }, null, _parent));
      _push(`</button></div><div class="${ssrRenderClass([unref(styleStore).darkMode ? "aside-scrollbars-[slate]" : unref(styleStore).asideScrollbarsStyle, "flex-1 overflow-y-auto overflow-x-hidden"])}">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div><ul>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        item: logoutItem.value,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</ul></div></aside>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenuLayer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AsideMenu",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const layoutStore = useLayoutStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        menu: __props.menu,
        class: [unref(layoutStore).isAsideMobileExpanded ? "left-0" : "-left-60 lg:left-0", { "lg:hidden xl:flex": !unref(layoutStore).isAsideLgActive }],
        onMenuClick: menuClick
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, {
        style: unref(layoutStore).isAsideLgActive ? null : { display: "none" },
        "z-index": "z-30",
        onOverlayClick: ($event) => unref(layoutStore).isAsideLgActive = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FooterBar",
  __ssrInlineRender: true,
  setup(__props) {
    const year = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["py-2 px-6", unref(containerMaxW)]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$d, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center md:text-left"${_scopeId}><b${_scopeId}>©${ssrInterpolate(year.value)}, <a href="https://pushmobile.ru/" target="_blank"${_scopeId}>pushmobile.ru</a></b></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center md:text-left" }, [
                createVNode("b", null, [
                  createTextVNode("©" + toDisplayString(year.value) + ", ", 1),
                  createVNode("a", {
                    href: "https://pushmobile.ru/",
                    target: "_blank"
                  }, "pushmobile.ru")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layoutAsidePadding = "xl:pl-60";
const _sfc_main = {
  __name: "authenticated",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const etoken = useCookie(tokenCookieName, { sameSite: "None", secure: true });
    const isLoading = computed(() => mainStore.layoutIsLoadingisLoading);
    const styleStore = useStyleStore();
    const layoutStore = useLayoutStore();
    const router = useRouter();
    router.beforeEach((to, from) => {
      layoutStore.isAsideMobileExpanded = false;
      layoutStore.isAsideLgActive = false;
    });
    const menuAside = computed(() => mainStore.allowedNavigation);
    const menuClick = (event, item) => {
      if (item.isToggleLightDark) {
        styleStore.setDarkMode();
      }
      if (item.isLogout) {
        etoken.value = "";
        router.push({ name: "login" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "dark": unref(styleStore).darkMode, "overflow-hidden lg:overflow-visible": unref(layoutStore).isAsideMobileExpanded }
      }, _attrs))}><div style="${ssrRenderStyle(isLoading.value ? null : { display: "none" })}" class="loading-overlay">`);
      _push(ssrRenderComponent(_sfc_main$b, {
        path: unref(mdiLoading),
        size: "48",
        class: "loading-icon"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([[layoutAsidePadding, { "ml-60 lg:ml-0": unref(layoutStore).isAsideMobileExpanded }], "pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"])}">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        menu: unref(menuNavBar),
        class: [layoutAsidePadding, { "ml-60 lg:ml-0": unref(layoutStore).isAsideMobileExpanded }],
        onMenuClick: menuClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              display: "flex lg:hidden",
              onClick: ($event) => unref(layoutStore).asideMobileToggle()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    path: unref(layoutStore).isAsideMobileExpanded ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b, {
                      path: unref(layoutStore).isAsideMobileExpanded ? unref(mdiBackburger) : unref(mdiForwardburger),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              display: "hidden lg:flex xl:hidden",
              onClick: ($event) => unref(layoutStore).isAsideLgActive = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b, {
                      path: unref(mdiMenu),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                display: "flex lg:hidden",
                onClick: withModifiers(($event) => unref(layoutStore).asideMobileToggle(), ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, {
                    path: unref(layoutStore).isAsideMobileExpanded ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$7, {
                display: "hidden lg:flex xl:hidden",
                onClick: withModifiers(($event) => unref(layoutStore).isAsideLgActive = true, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        menu: menuAside.value,
        onMenuClick: menuClick
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/authenticated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=authenticated-DjBuFjJb.js.map
