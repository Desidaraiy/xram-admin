<script setup>
import { ref, computed, defineEmits, watch, onMounted, defineProps, onUnmounted } from "vue";
import { useMainStore } from "~~/stores/main";
import { mdiClose } from "@mdi/js";

const mainStore = useMainStore();

const emit = defineEmits();

const isDropdownOpen = ref(false);
const selectedGroups = ref([]);
const allGroup = { id: 0, name: "Все пользователи" };

const props = defineProps({
  preSelectedGroups: {
    type: Array,
    default: [],
  }
});

onMounted( async () => {
  await mainStore.getGroupsList()
  if(props.preSelectedGroups.length > 0){
    for(let i = 0; i < props.preSelectedGroups.length; i++){
      let group = mainStore.filteredGroups.find((g) => g.id == props.preSelectedGroups[i])
      selectGroup(group)
    }
  }
})

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
    return selectedGroups.value.length === 0
      ? mainStore.filteredGroups
      : mainStore.filteredGroups.filter(
          (group) => !selectedGroups.value.some((g) => g.id === group.id)
        );
  },
  set: (newValue) => {
    console.log(newValue);
  },
});

const displayedGroups = computed({
  get: () => {
    return selectedGroups.value.length === 0 ? [allGroup] : selectedGroups.value;
  }, 
  set: (newValue) => {
    console.log(newValue)
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

const showDropdown = () => {
  isDropdownOpen.value = true;
};

onUnmounted(() => {
  selectedGroups.value = [];
})
</script>

<template>
  <div>
    <div
      class="flex flex-row justify-between items-center max-w-full border-gray-700 border rounded w-full bg-white dark:bg-slate-800"
    >
      <div
        class="p-3 bg-gray-100/50 dark:bg-slate-800 flex flex-row justify-between items-center overflow-x-auto"
      >
        <div class="flex flex-row justify-start items-center">
          <div
            v-for="group in displayedGroups"
            :key="group.id"
            class="flex flex-row justify-start items-center bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded-md mr-2"
          >
            <span class="text-sm">
              {{ group.name }}
            </span>
            <div
              class="flex flex-col items-center justify-center p-1 text-slate-800 dark:text-slate-200"
            >
              <BaseIcon
                :path="mdiClose"
                size="14"
                @click="removeGroup(group)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center py-2 px-2">
        <button @click.prevent="showDropdown">
          <svg
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isDropdownOpen" class="bg-white dark:bg-slate-200 text-slate-800 dark:text-slate-800 border w-full rounded">
      <div v-if="filteredGroups.length === 0" class="my-2 px-5">
        Все группы добавлены
      </div>
      <div
        v-for="group in filteredGroups"
        :key="group.id"
        @click="selectGroup(group)"
        class="my-2 px-5"
      >
        {{ group.name }}
      </div>
    </div>
  </div>
</template>
