<script setup lang="ts">
import { computed, ref, reactive, onBeforeMount } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiChevronLeft
} from '@mdi/js'

import SectionMain from '@/components/SectionMain.vue'

import CardBox from '@/components/CardBox.vue'


interface GoodItem {
        id: number
        title: string
        price: number
    }

    interface BucketItem {
        id: number;
        quantity: number;
        comment: string
        good: GoodItem
    }

const route = useRoute() 

const orderId = computed(() => route.params.id)

const mainStore = useMainStore()


onBeforeMount( async() => {
  await mainStore.getCurrentOrder(orderId.value)
})

const order = computed(() => mainStore.currentOrder)

const items = computed(() => JSON.parse(order.value.body))


const completeOrder = () => {
  mainStore.completeOrder(orderId.value)
}

function dateTimeToDate(dateTime){
    return dateTime != null ? dateTime.slice(0, 10) : ''
}


const getTableWithGoods = () => {
    let table = `
    <table class="table-auto w-full border border-slate-800 p-4 rounded-xl">
      <tr class="border-b border-slate-800">
        <th class="text-left border-r border-slate-800 p-2">Наименование</th>
        <th class="text-left border-r border-slate-800 p-2">Цена</th>
        <th class="text-left border-r border-slate-800 p-2">Количество</th>
        <th class="text-left border-r border-slate-800 p-2">Комментарий</th>
        <th class="text-left border-r border-slate-800 p-2">Сумма</th>
      </tr>
    `;
    let sum = 0;
    items.value.forEach((item: BucketItem) => {
      sum += item.good.price * item.quantity;
      table += `
        <tr class="border-b border-slate-800">
          <td class="text-left border-r border-slate-800 p-2">${item.good.title}</td>
          <td class="text-left border-r border-slate-800 p-2">${item.good.price}</td>
          <td class="text-left border-r border-slate-800 p-2">${item.quantity}</td>
          <td class="text-left border-r border-slate-800 p-2">${item.comment ?? "Отсутствует"}</td>
          <td class="text-left border-r border-slate-800 p-2">${item.good.price * item.quantity}</td>
        </tr>
      `;
    });
    table += `
      <tr class="border-b border-slate-800">
        <td>Итого</td>
        <td></td>
        <td></td>
        <td></td>
        <td>${sum}</td>
      </tr>
    </table>
    `;
    return table;
  }

</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
      <SectionTitleLine
        :icon="mdiChevronLeft"
        :title="'Заказ / ' + $route.params.id"
        :back="true"
        main
      >
      </SectionTitleLine>
      <div v-if="order.createdAt != null" class="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div class="col-span-2">
            <CardBox title="Информация" has-table >

              <div class="w-full" v-if="items.length > 0" v-html="getTableWithGoods()">
              </div>

            </CardBox>
          </div>

          <CardBox v-if="order.User" title="Заказчик">
            <p>Имя: {{ order.User.name }}</p>
            <p>Электронная почта: {{ order.User.email }}</p>
            <p>Номер телефона: {{ order.User.phone }}</p>
            <p>Платная подписка: {{ order.User.subscribed ? 'Да' : 'Нет' }}</p>
          </CardBox>
          <CardBox v-if="!order.orderStatus" title="Управление">
            <p>Статус: {{ order.orderStatus ? 'Выполнен' : 'Не выполнен' }}</p>
            <p>Дата заказа: {{dateTimeToDate(order.createdAt)}}</p>
            <BaseButtons>
              <BaseButton label="Выполнить" color="info" small outline @click="completeOrder" />
            </BaseButtons>
          </CardBox>
    </div>

    <div v-else class="h-96 flex flex-col w-full my-8 items-center justify-center">
      <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2">Заказ не найден</h2>
    </div>

    </SectionMain>
    </NuxtLayout>
  </div>

</template>
