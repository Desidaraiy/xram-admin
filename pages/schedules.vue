<script setup>
import { reactive, onBeforeMount, onActivated } from 'vue'
import {
  mdiNotificationClearAll
} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import { useMainStore } from '~~/stores/main'

const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.getScheduleList()
})

onActivated(() => {
  mainStore.getScheduleList()
})

const schedules = computed(() => mainStore.schedules)

const forms = reactive(schedules.value.map(form => ({
  id: form.id || 0,
  saints: form.saints || '',
  time_1: form.time_1 || '',
  description_1: form.description_1 || '',
  time_2: form.time_2 || '',
  description_2: form.description_2 || '',
  time_3: form.time_3 || '',
  description_3: form.description_3 || '',
  time_4: form.time_4 || '',
  description_4: form.description_4 || '',
  time_5: form.time_5 || '',
  description_5: form.description_5 || '',
})))

watch(schedules, () => {
  forms.splice(0, forms.length, ...schedules.value.map(form => ({ ...form })))
})

</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
        <SectionTitleLineWithButton
          :icon="mdiNotificationClearAll"
          title="Расписание служений"
          main
        >
          <BaseButton
            label="Очистить всё"
            color="info"
            small
          />
        </SectionTitleLineWithButton>
        <div v-if="forms.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ScheduleFormCard
          v-for="(form, index) in forms"
          :key="index"
          :form="form"/>
        </div>
        <div v-else>
          <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2 h-192 flex flex-row items-center justify-center">Загрузка...</h2>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>