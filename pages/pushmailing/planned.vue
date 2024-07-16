<script setup>
import { computed, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
    mdiChevronLeft
} from '@mdi/js'

import SectionMain from '@/components/SectionMain.vue'
import { proxyBaseUrl } from '~~/configs/fetchBaseUrl';

const mainStore = useMainStore()

onMounted(() => {
  mainStore.getPlannedPushmailingList()
})
const mailing = computed(() => mainStore.pushmailing)
function dateTimeToDate(dateTime){
  return dateTime.split(' ')[0]
}

function dateTimeToTime(dateTime){
  return dateTime.split(' ')[1]
}


const deleteById = async (id) => {

  const path = proxyBaseUrl+"remove-message"

  $fetch(path, {
    method: "POST",
    body: {
      token: mainStore.userToken,
      id: id
    },
  }).then((r) => {
    if (r.message === "ok") {
      mainStore.getPlannedPushmailingList();
    } else {
      alert("Ошибка: ", r);
    }
  });

}

</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>

        <SectionTitleLine
            :icon="mdiChevronLeft"
            title="Запланированные рассылки"
            :back="true"
            main
        >
        </SectionTitleLine>

      <div v-if="mailing.length > 0" class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBox
          v-for="mail in mailing"
          :key="mail.id">
            <h2 v-if="mail.title" class="text-xl text-gray-700 dark:text-gray-300 my-2">Заголовок: {{ mail.title }}</h2>
            <p class="my-2">Сообщение: {{ mail.length < 0 ? 'Текст объявления пуст' : mail.message }}</p>
            <div v-if="mail.date.split('-')[0] != '0000'">
              <p class="my-2">Дата: {{ dateTimeToDate(mail.date) }}</p>
              <p class="my-2">Время: {{ dateTimeToTime(mail.date) }}</p>
            </div>
            <div v-else class="my-2">
              Без даты
            </div>

            <BaseButtons>
              <BaseButton label="Удалить" color="warning" small outline @click="deleteById(mail.id)" />
              <BaseButton label="Редактировать" color="info" small outline :to="`/pushmailing/edit/${mail.id}`" />
            </BaseButtons>
        </CardBox>
      </div>
      <div v-else class="flex flex-col h-192 items-center justify-center">
        <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2">Нет рассылок</h2>
        <BaseButton color="info" label="Создать рассылку" to="/pushmailing/" />
      </div>
    </SectionMain>
    </NuxtLayout>
  </div>

</template>
