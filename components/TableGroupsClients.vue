<script setup>

import { mdiClose } from '@mdi/js'
import { computed, ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { useStyleStore } from '@/stores/style'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'

defineProps({
  checkable: Boolean
})

const styleStore = useStyleStore()

const mainStore = useMainStore()

const items = computed(() => mainStore.currentGroupClients.length ? mainStore.currentGroupClients : [])

const perPage = ref(10)

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

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach(item => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === client.id)
  }
}

const checkedRows = ref([])
const isModalDeletionActive = ref(false)

const isModalDeletionUsersActive = ref(false)

const currentClientId = ref(0)
const currentGroup = computed(() => mainStore.currentGroup)

const deleteSelectedUserFromGroup = async () => {
  await mainStore.deleteClientFromGroup([currentClientId.value], currentGroup.value.id)
  isModalDeletionActive.value = false
  mainStore.setCurrentGroup(mainStore.currentGroup.id)
}

const deleteSelectedUsersFromGroup = async () => {
  const usersIdArr = checkedRows.value.map(user => user.id)
  await mainStore.deleteClientFromGroup(usersIdArr, currentGroup.value.id)
  isModalDeletionUsersActive.value = false
  mainStore.setCurrentGroup(mainStore.currentGroup.id)
  checkedRows.value = []
}

</script>

<template>
  <CardBoxModal
    v-model="isModalDeletionActive"
    title="Подтвердите удаление пользователя из группы"
    button="danger"
    has-cancel
    @confirm="deleteSelectedUserFromGroup()"
  >
    <p>Действие необратимо</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDeletionUsersActive"
    title="Подтвердите удаление пользователей из группы"
    button="danger"
    has-cancel
    @confirm="deleteSelectedUsersFromGroup()"
  >
    <p>Действие необратимо</p>
  </CardBoxModal>

<div
    v-if="checkedRows.length"
    class="p-3 bg-gray-100/50 dark:bg-slate-800 flex flex-row justify-between items-center ">
    <div class="flex flex-row justify-start items-center overflow-x-auto">
      <div 
        v-for="checkedRow in checkedRows"
        :key="checkedRow.id" 
        class="flex flex-row justify-start items-center bg-gray-100 
                dark:bg-slate-700 px-2 py-1 rounded-sm mr-2 ">
        <span
        class="text-sm "
        >
        {{ checkedRow.phone }}
        </span>
        <div  class="flex flex-col items-center justify-center p-1 text-slate-800 dark:text-slate-200">
            <BaseIcon :path="mdiClose" size="14" @click="checked(false, checkedRow)"/>
        </div>
    </div>
    </div>
    <BaseButton 
      label="Удалить из группы"
      color="danger"
      small
      @click="isModalDeletionUsersActive = true"
    />
  </div>
<table>
    <thead>
      <tr>
        <th></th>
        <th>Телефон</th>
        <th>Удалить</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="client in itemsPaginated"
        :key="client.id"
      >
        <TableCheckboxCell
          @checked="checked($event, client)"
        />
        <td data-label="Телефон">
          {{ client.phone }}
        </td>
        <td data-label="Удалить">
          <BaseButton
            color="danger"
            label="Удалить"
            @click="isModalDeletionActive = true; currentClientId = client.id"
          />        
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
