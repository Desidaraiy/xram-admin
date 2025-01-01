<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { useStyleStore } from "@/stores/style";
import { mdiCellphone, mdiClose } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import { proxyBaseUrl, tokenCookieName } from "~~/configs/fetchBaseUrl";

defineProps({
  checkable: Boolean,
});

const etoken = useCookie(tokenCookieName, { sameSite: "None", secure: true });

const styleStore = useStyleStore();

const mainStore = useMainStore();

const items = computed(() =>
  mainStore.isSearchingClients ? mainStore.clientsFound : mainStore.clients
);

const perPage = ref(10);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];
  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }
  return pagesList;
});

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};

const orderBySubscription = () => {
  mainStore.sortClientsBySubscription();
};


</script>

<template>

  <div
    v-if="checkedRows.length"
    class="p-3 bg-gray-100/50 dark:bg-slate-800 flex flex-row justify-between items-center"
  >
    <div class="flex flex-row justify-start items-center overflow-x-auto">
      <div
        v-for="checkedRow in checkedRows"
        :key="checkedRow.id"
        class="flex flex-row justify-start items-center bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-sm mr-2"
      >
        <span class="text-sm">
          {{ checkedRow.phone }}
        </span>
        <div
          class="flex flex-col items-center justify-center p-1 text-slate-800 dark:text-slate-200"
        >
          <BaseIcon
            :path="mdiClose"
            size="14"
            @click="checked(false, checkedRow)"
          />
        </div>
      </div>
    </div>
    <BaseButton
      label="Добавить в группу"
      color="info"
      small
      @click="isAddingToGroupModalActive = true"
    />
  </div>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th>Имя</th>
        <th>Электронная почта</th>
        <th @click="orderBySubscription">Подписка</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <TableCheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />
        <td class="border-b-0 lg:w-6 before:hidden" data-label="Имя">
          {{ client.name }}
        </td>
        <td class="border-b-0 lg:w-6 before:hidden" data-label="Электронная почта">
          {{ client.email }}
        </td>
        <td class="border-b-0 lg:w-6 before:hidden" data-label="Подписка">
          {{ client.subscribed ? 'Да' : 'Нет' }}
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
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
