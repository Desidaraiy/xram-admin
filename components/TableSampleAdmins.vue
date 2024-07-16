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
import { proxyBaseUrl, tokenCookieName } from "~~/configs/fetchBaseUrl";

defineProps({
  checkable: Boolean
})

const etoken = useCookie(tokenCookieName, { sameSite: "None", secure: true });

const styleStore = useStyleStore()

const mainStore = useMainStore()

const items = computed(() => mainStore.isSearchingAdmins
  ? mainStore.adminsFound
  : mainStore.admins)

const currentAdminId = ref(0);

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const isModalMessagesActive = ref(false)

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

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === client.id)
  }
}


const deleteAdmin = async () => {
  const path = proxyBaseUrl + "remove-admin";
  await $fetch(path, {
    method: "POST",
    body: {
      id: currentAdminId.value,
      token: etoken.value,
    },
  }).then((r) => {
    if (r.message === "ok") {
      isModalMessagesActive.value = false
      mainStore.getAdminsList()
    }
  });
};
</script>

<template>

  <CardBoxModal
    v-model="isModalMessagesActive"
    title="Удаление администратора"
  >
    <p>Данное действие необратимо.</p>
    
    <BaseButtons>
      <BaseButton
        color="danger"
        @click="deleteAdmin()"
        label="Удалить"/>
      <BaseButton
        color="info"
        outline
        @click="currentAdminId = 0; isModalMessagesActive = false"
        label="Отмена"/>
        
    </BaseButtons>
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
        <th>Имя, Фамилия</th>
        <th>Телефон</th>
        <!-- <th>E-mail</th> -->
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
        <td data-label="Имя, Фамилия">
          {{ client.fio.length > 0 ? client.fio : '---' }}
        </td>
        <td data-label="Телефон">
          {{ client.phone.length > 0 ? client.phone : '---' }}
        </td>
        <td data-label="Редактировать">
          <BaseButton
            color="info"
            label="Редактировать"
            :to="`/admins/edit/${client.id}`"
          />
        </td>
        <td data-label="Удалить">
          <BaseButton
            color="info"
            label="Удалить"
            @click="currentAdminId = client.id; isModalMessagesActive = true"
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
