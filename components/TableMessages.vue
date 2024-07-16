<script setup>
import { computed, ref, reactive, watch } from 'vue'
import { useMainStore } from '@/stores/main'
import { useStyleStore } from '@/stores/style'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'

const props = defineProps({
  checkable: Boolean,
  isActive: Boolean
})

watch(() => props.isActive, (newValue) => {
  if (newValue) {
    resetDates()
    mainStore.isSearchingMessages = false;
  }
});

const emit = defineEmits(['reset-dates'])

const styleStore = useStyleStore()

const mainStore = useMainStore()

const items = computed(() => mainStore.isSearchingMessages ? mainStore.foundMessages : mainStore.messages)

const perPage = ref(30)

const currentPage = ref(0)

const itemsPaginated = computed(
  () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []
  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }
  return pagesList
})

const searchDates = reactive({
  startDate: '',
  endDate: ''
})

const resetDates = () => {
  searchDates.startDate = ''
  searchDates.endDate = ''
  emit('reset-dates');
}

watch(searchDates, () => {
  if(searchDates.startDate != '' || searchDates.endDate != ''){
    mainStore.getMessagesList(searchDates)
  }else{
    mainStore.isSearchingMessages = false
  }
})

</script>

<template>

  <div class="flex flex-row mx-auto py-4 justify-around items-start ">
    <span class="flex flex-col items-center my-auto">Выберите даты</span>
    <FormField
      label="Дата, От"
    >
    <input 
        type="date" 
        v-model="searchDates.startDate" 
        class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 
              rounded w-full dark:placeholder-gray-400 h-12 border bg-white 
              dark:bg-slate-800" 
        />
    </FormField>
    <FormField
      label="Дата, До"
    >
    <input 
        type="date" 
        v-model="searchDates.endDate" 
        class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 
              rounded w-full dark:placeholder-gray-400 h-12 border bg-white 
              dark:bg-slate-800" 
        />
    </FormField>
  </div>
  <div class="flex flex-row mx-auto py-4 px justify-start items-start">
    <BaseButton
      label="Сбросить период"
      color="info"
      small
      @click="resetDates"
    />
  </div>


  <!-- <FormControl
        v-model="searchDates.endDate"
        type="date"
        name="startDate"
        autocomplete="none"
      /> -->


  <table>
    <thead>
      <tr>
        <th>Сообщение</th>
        <th>Дата</th>
        <th>Объект</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="client in itemsPaginated"
        :key="client.id"
      > 
        <td data-label="Сообщение" >
          {{ client.message }}
        </td>
        <td data-label="Дата">
          {{ client.date }}
        </td>
        <td data-label="Объект">
          {{ client.object != undefined && client.object.length != 0 ? client.object : '---' }}
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"
  >
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Страница {{ currentPageHuman }} из {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
