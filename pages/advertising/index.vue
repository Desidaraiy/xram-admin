<script setup>
import { computed, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiStar
} from '@mdi/js'

import SectionMain from '@/components/SectionMain.vue'
import { proxyBaseUrl } from '~~/configs/fetchBaseUrl';

const mainStore = useMainStore()

onMounted(() => {
  mainStore.getAdvertsList()
})
const adverts = computed(() => mainStore.adverts)
function checkPictureUrl(url){
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null ? true : false
}

function dateTimeToDate(dateTime){
  return dateTime.split(' ')[0]
}


const deleteById = async (id) => {

  const path = proxyBaseUrl+"remove-advertising"

  $fetch(path, {
    method: "POST",
    body: {
      token: mainStore.userToken,
      advertising_id: id
    },
  }).then((r) => {
    if (r.message === "ok") {
      mainStore.getAdvertsList();
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

      <SectionTitleLineWithButton
        :icon="mdiStar"
        title="Управление рекламой"
        main
      >
        <BaseButton
          color="info"
          label="Добавить рекламу"
          to="advertising/new"
        />
      </SectionTitleLineWithButton>

      <div v-if="adverts.length > 0" class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBox
          v-for="advert in adverts"
          :key="advert.advertising_id">
            <img
              :src="checkPictureUrl(advert.picture) ? 
                      advert.picture : 
                      'https://via.placeholder.com/1080x1920?text=Нет изображения'" 
              class="h-64 w-full object-cover" 
              :alt="advert.id">
            <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2"> {{ advert.title }}</h2>
            <p> {{ advert.text.length < 0 ? 'Текст объявления пуст' : advert.text }}</p>
            <p>Дата старта: {{ dateTimeToDate(advert.date_start) }}</p>
            <p>Дата окончания: {{ dateTimeToDate(advert.date_end) }}</p>
            <div class="flex flex-row justify-between my-5 items-center">
              <p>Миниатюра:</p>
              <img 
                :src="checkPictureUrl(advert.preview) ? 
                advert.preview : 
                'https://via.placeholder.com/500x500?text=Нет миниатюры'" 
                class="rounded-md h-24 w-24 object-cover" 
                :alt="advert.advertising_id">
            </div>
            <BaseButtons>
              <BaseButton label="Удалить" color="warning" small outline @click="deleteById(advert.advertising_id)" />
              <BaseButton label="Редактировать" color="info" small outline :to="`/advertising/edit/${advert.advertising_id}`" />
            </BaseButtons>
        </CardBox>
      </div>
      <div v-else class="flex flex-col h-192 items-center justify-center">
        <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2">Нет объявлений</h2>
      </div>
    </SectionMain>
    </NuxtLayout>
  </div>

</template>
