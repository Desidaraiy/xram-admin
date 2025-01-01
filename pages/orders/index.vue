<script setup>
import { computed, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiStar
} from '@mdi/js'

import SectionMain from '@/components/SectionMain.vue'

const mainStore = useMainStore()

onMounted(() => {
  mainStore.getOrdersList()
})

const orders = computed(() => mainStore.orders)
// const ordersIsSorted = computed(() => mainStore.sortedOrders.length > 0)
// const currentCategory = computed(() => mainStore.currentCategory)

function dateTimeToDate(dateTime){
  let date = new Date(dateTime)
  return date.toISOString().split('T')[0]
}

const sortOrders = (category) => {
  mainStore.selectCategory(category)
}

</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
      <SectionTitleLine
        :icon="mdiStar"
        title="Заказы"
        main
      >
      </SectionTitleLine>

      <div v-if="orders.length > 0" class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBox
          v-for="order in orders"
          :title="'Заказ #' + order.id"
          :key="order.id">
            <p>Сумма: {{ order.total }} ₽</p>
            <p class="mb-4">Дата заказа: {{ dateTimeToDate(order.createdAt) }}</p>
            <BaseButtons>
              <BaseButton label="Подробнее" color="info" small outline :to="`/orders/${order.id}`" />
            </BaseButtons>
        </CardBox>
      </div>
      <div v-else class="flex flex-col h-192 items-center justify-center">
        <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2">Нет заказов</h2>
      </div>
    </SectionMain>
    </NuxtLayout>
  </div>

</template>
