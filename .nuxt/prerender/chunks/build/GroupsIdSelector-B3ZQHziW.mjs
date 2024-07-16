import { _ as _sfc_main$1 } from './colors-BYRMrYIa.mjs';
import { ref, watch, computed, onUnmounted, unref, useSSRContext } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file:///Users/admin/work/teleos-admin/node_modules/vue/server-renderer/index.mjs';
import { a as useMainStore } from './server.mjs';
import { mdiClose } from 'file:///Users/admin/work/teleos-admin/node_modules/@mdi/js/commonjs/mdi.js';

const _sfc_main = {
  __name: "GroupsIdSelector",
  __ssrInlineRender: true,
  props: {
    preSelectedGroups: {
      type: Array,
      default: []
    }
  },
  setup(__props, { emit: __emit }) {
    const mainStore = useMainStore();
    const emit = __emit;
    const isDropdownOpen = ref(false);
    const selectedGroups = ref([]);
    const allGroup = { id: 0, name: "\u0412\u0441\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438" };
    const props = __props;
    const selectGroup = (group) => {
      selectedGroups.value.push(group);
      isDropdownOpen.value = false;
      emit(
        "update:modelValue",
        selectedGroups.value.map((g) => g.id)
      );
    };
    watch(selectedGroups, () => {
      if (selectedGroups.value.length === 0) {
        displayedGroups.value = [allGroup, ...mainStore.filteredGroups];
      } else {
        displayedGroups.value = mainStore.filteredGroups;
      }
    });
    watch(() => props.preSelectedGroups, (newValue) => {
      selectedGroups.value = [];
      if (newValue.length > 0) {
        for (let i = 0; i < newValue.length; i++) {
          let group = mainStore.filteredGroups.find((g) => g.id == newValue[i]);
          selectGroup(group);
        }
      }
    });
    const filteredGroups = computed({
      get: () => {
        return selectedGroups.value.length === 0 ? mainStore.filteredGroups : mainStore.filteredGroups.filter(
          (group) => !selectedGroups.value.some((g) => g.id === group.id)
        );
      },
      set: (newValue) => {
        console.log(newValue);
      }
    });
    const displayedGroups = computed({
      get: () => {
        return selectedGroups.value.length === 0 ? [allGroup] : selectedGroups.value;
      },
      set: (newValue) => {
        console.log(newValue);
      }
    });
    watch(selectedGroups, () => {
      if (selectedGroups.value.length === 0) {
        displayedGroups.value = [allGroup, ...mainStore.filteredGroups];
      } else {
        displayedGroups.value = mainStore.filteredGroups;
      }
    });
    const removeGroup = (group) => {
      selectedGroups.value = selectedGroups.value.filter((g) => g.id !== group.id);
      emit(
        "update:modelValue",
        selectedGroups.value.map((g) => g.id)
      );
    };
    onUnmounted(() => {
      selectedGroups.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-row justify-between items-center max-w-full border-gray-700 border rounded w-full bg-white dark:bg-slate-800"><div class="p-3 bg-gray-100/50 dark:bg-slate-800 flex flex-row justify-between items-center overflow-x-auto"><div class="flex flex-row justify-start items-center"><!--[-->`);
      ssrRenderList(displayedGroups.value, (group) => {
        _push(`<div class="flex flex-row justify-start items-center bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded-md mr-2"><span class="text-sm">${ssrInterpolate(group.name)}</span><div class="flex flex-col items-center justify-center p-1 text-slate-800 dark:text-slate-200">`);
        _push(ssrRenderComponent(_component_BaseIcon, {
          path: unref(mdiClose),
          size: "14",
          onClick: ($event) => removeGroup(group)
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col items-center py-2 px-2"><button><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button></div></div>`);
      if (isDropdownOpen.value) {
        _push(`<div class="bg-white dark:bg-slate-200 text-slate-800 dark:text-slate-800 border w-full rounded">`);
        if (filteredGroups.value.length === 0) {
          _push(`<div class="my-2 px-5"> \u0412\u0441\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(filteredGroups.value, (group) => {
          _push(`<div class="my-2 px-5">${ssrInterpolate(group.name)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GroupsIdSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GroupsIdSelector-B3ZQHziW.mjs.map
