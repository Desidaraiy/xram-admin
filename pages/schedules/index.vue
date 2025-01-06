<script setup>
import { reactive, onMounted } from 'vue'
import {
  mdiNotificationClearAll
} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import { useMainStore } from '~~/stores/main'
import { proxyBaseUrl } from '~~/configs/fetchBaseUrl'

const mainStore = useMainStore()

onMounted(() => {
  mainStore.getScheduleList()
})

const form = reactive({
    date: ''
})

const { $moment } = useNuxtApp()

const schedules = computed(() => mainStore.schedules)

const isNewScheduleModalActive = ref(false);
const isNewScheduleErrorModalActive = ref(false);



const getHumanizedFullDate = (date) => {
  return $moment(date, 'DD-MM-YYYY').format('MMMM YYYY')
}

const handleNewSchedule = async () => {
    let formattedDate = $moment(form.date).startOf("month").format("DD-MM-YYYY");
    console.log('date is', formattedDate)
    $fetch(proxyBaseUrl + '/schedules/new', {
      method: 'POST',
      body: {
        date: formattedDate
      },
      headers: {
        'Authorization': 'Bearer ' + mainStore.userToken
      },
    }).then((r) => {
        form.date = ''
        formattedDate = ''
        if(r.state != 'error'){
            mainStore.getScheduleList()
        }else{
            isNewScheduleErrorModalActive.value = true
        }
        
    })
    
}



</script>

<template>
    <CardBoxModal
        v-model="isNewScheduleModalActive"
        large-title="На выбранный месяц создается расписание"
        title="Выберите дату"
        @confirm="handleNewSchedule"
        button="info"
        has-cancel
    >

        <FormField label="Дата">
            <FormControl v-model="form.date" type="month" />
        </FormField>

    </CardBoxModal>
    <CardBoxModal
        v-model="isNewScheduleErrorModalActive"
        large-title="Ошибка"
        button="info"
    >
        <p>Расписание на указанный месяц уже существует</p>
    </CardBoxModal>


  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
        <SectionTitleLineWithButton
          :icon="mdiNotificationClearAll"
          title="Расписание служений"
          main
        >
        <BaseButton
        label="Создать новое"
        @click="isNewScheduleModalActive = true"
        color="info"/>
        </SectionTitleLineWithButton>
        <div v-if="schedules.length > 0"  class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <CardBox :title="getHumanizedFullDate(schedule.date)" v-for="schedule in schedules">
            <BaseButtons>
                <BaseButton label="редактировать" color="info" :to="`/schedules/${schedule.id}`" />
            </BaseButtons>
          </CardBox>
        </div>
        <div v-else>
          <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2 h-192 flex flex-row items-center justify-center">Загрузка...</h2>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>