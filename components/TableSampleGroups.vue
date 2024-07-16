<script setup>
import { computed, ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { useStyleStore } from '@/stores/style'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import CardBoxModal from '@/components/CardBoxModal.vue'
import TableCheckboxCell from '@/components/TableCheckboxCell.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'

defineProps({
  checkable: Boolean
})

const styleStore = useStyleStore()

const mainStore = useMainStore()

const items = computed(() => mainStore.isSearchingGroups
  ? mainStore.groupsFound
  : mainStore.groups)

const isModalEditGroupActive = ref(false)

const isModalDangerActive = ref(false)

const isModalMessagesActive = ref(false)

const isModalDeletingActive = ref(false)

const perPage = ref(10)

const currentPage = ref(0)

const checkedRows = ref([])

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

const isModalUsersActive = ref(false)

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === client.id)
  }
}

const setCurrentGroup = async (id) => {
  mainStore.setCurrentGroup(id)
}

const deleteGroup = async () => {
  mainStore.deleteCurrentGroup()
}
</script>

<template>


  <CardBoxModal
    v-model="isModalDeletingActive"
    title="Подтвердите удаление группы"
    button="danger"
    button-label="Удалить"
    has-cancel 
    @confirm="deleteGroup()"
  >
    <p>Данное действие нельзя отменить</p>
    
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    
    large-title="Please confirm"
    button="danger"

    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalUsersActive"
    title="Пользователи"
    :checkable="true"
    has-table
  >
    <TableGroupsClients />
  </CardBoxModal>

  <div
    v-if="checkedRows.length"
    class="p-3 bg-gray-100/50 dark:bg-slate-800"
  >
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">
      {{ checkedRow.name }}
    </span>
  </div>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th>Название</th>
        <th>Рассылка</th>
        <th>Объявление</th>
        <th>Редактировать</th>
        <th>Удалить</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="client in itemsPaginated"
        :key="client.id"
      >
        <TableCheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />
        <td data-label="Имя">
          {{ client.name.length > 0 ? client.name : '---' }}
        </td>
        <td data-label="Рассылка">
          <BaseButton
            color="info"
            label="Рассылка"
            :to="'pushmailing?groupid='+client.id"
          />
        </td>
        <td data-label="Объявление">
          <BaseButton
            color="success"
            label="Объявление"
            :to="'advertising/new?groupid='+client.id"
          />
        </td>
        <td data-label="Редактировать">
        <BaseButton
          color="warning"
          label="Редактировать"
          @click="setCurrentGroup(client.id); isModalUsersActive = true"
        />
        </td>
        <td data-label="Удалить">
          <BaseButton
            color="danger"
            label="Удалить"
            @click="setCurrentGroup(client.id); isModalDeletingActive = true"
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
