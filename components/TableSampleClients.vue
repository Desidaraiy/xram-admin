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

const isDevicesModalActive = ref(false);
const isModalPhoneActive = ref(false);
const userDevices = ref([]);

const groups = computed(() => mainStore.groups);
const selectedGroupId = ref(0);

const addUsersToGroup = async () => {
  const path = proxyBaseUrl + "add-user-to-group";
  const usersIdArr = checkedRows.value.map((user) => user.id);
  await $fetch(path, {
    method: "POST",
    body: {
      group_id: selectedGroupId.value.value,
      user_id: usersIdArr,
      token: etoken.value,
    },
  }).then((r) => {
    if (r.message === "ok") {
      isAddingToGroupModalActive.value = false;
      checkedRows.value = [];
      mainStore.getGroupsList();
    }
  });
};

const getDevices = async (id) => {
  userDevices.value = [];
  const path = proxyBaseUrl + "get-user-devices";
  await $fetch(path, {
    method: "POST",
    body: {
      user_id: id,
      token: etoken.value,
    },
  }).then((r) => {
    // r = JSON.parse(r)
    if (r.message === "ok") {
      userDevices.value = r.device;
      console.log("devices", userDevices.value);
    }
  });
};
const isModalPincodeActive = ref(false);
const tempPinCode = ref("Нажмите кнопку ниже");

watch(isModalPincodeActive, () => {
  if (isDevicesModalActive.value == false) {
    tempPinCode.value = "Нажмите кнопку ниже";
  }
});

const getPinCode = async () => {
  // const path = proxyBaseUrl+'reset-user-pin'
  // await $fetch(path, {
  //   method: 'POST',
  //   body: {
  //     user_id: currentClientId.value,
  //     token: etoken.value
  //   }
  // })

  // let pincode = "";
  // for (let i = 0; i < 4; i++) {
  //   pincode += Math.floor(Math.random() * 10);
  // }
  // tempPinCode.value = pincode;

  const path2 = proxyBaseUrl+'set-user-pin'
  await $fetch(path2, {
    method: 'POST',
    body: {
      user_id: currentClientId.value,
      password: tempPinCode.value,
      token: etoken.value
    }
  }).then((r) => {
    if (r.message === "ok") {
      isModalPincodeActive.value = false;
      tempPinCode.value = "";
    }
  })
};

const isModalMessageActive = ref(false);

const isModalSuccessActive = ref(false);
const isModalErrorActive = ref(false);

const isAddingToGroupModalActive = ref(false);

const messageToUser = ref("");

const currentClientPhone = ref("");
const currentClientId = ref(0);

const sendMessage = async () => {
  const path = proxyBaseUrl + "send-push";
  await $fetch(path, {
    method: "POST",
    body: {
      phone: currentClientPhone.value,
      text: messageToUser.value,
      token: etoken.value,
    },
  }).then((r) => {
    messageToUser.value = "";
    if (r.message === "ok") {
      isModalMessageActive.value = false;
      isModalSuccessActive.value = true;
    } else {
      isModalErrorActive.value = true;
    }
  });
};

const isModalMessagesActive = ref(false);

const getMessages = async (id) => {
  const path = proxyBaseUrl + "get-messages";
  await $fetch(path, {
    method: "POST",
    body: {
      user_id: id,
      token: etoken.value,
    },
  }).then((r) => {
    // r = JSON.parse(r)
    if (r.message === "ok") {
      mainStore.setMessages(r.messages);
    }
  });
};

const toggleBlockClient = async (client) => {
  const path = proxyBaseUrl + "user-toggle-block";
  await $fetch(path, {
    method: "POST",
    body: {
      user_id: client.id,
      token: etoken.value,
      block: client.active != "2",
    },
  }).then((r) => {
    if (r.message === "ok") {
      mainStore.getClientsList()
      client.active = client.active != "2" ? "2" : "1";
    }
  });
};

const setUserPhone = async () => {
  const path = proxyBaseUrl + "update-user-phone";
  await $fetch(path, {
    method: "POST",
    body: {
      user_id: currentClientId.value,
      token: etoken.value,
      phone: currentClientPhone.value,
    },
  }).then((r) => {
    if (r.message === "ok") {
      mainStore.getClientsList()
    }
  });
}
</script>

<template>
  <CardBoxModal v-model="isModalSuccessActive" title="Операция завершена">
    <h2 class="my-2">Операция завершена успешно</h2>
  </CardBoxModal>

  <CardBoxModal v-model="isModalErrorActive" title="Операция завершена">
    <h2 class="my-2">Возникла ошибка, попробуйте позже.</h2>
  </CardBoxModal>

  <CardBoxModal v-model="isDevicesModalActive" title="Устройства пользователя">
    <div class="flex flex-col">
      <div
        v-for="device in userDevices"
        class="flex flex-col rounded-lg p-2 m-2 drop-shadow-lg bg-slate-200 dark:bg-slate-500"
      >
        <div class="flex flex-row items-center">
          <BaseIcon :path="mdiCellphone" :size="50" h="h-16" w="w-16" />
          <div class="flex flex-col">
            <p class="text-gray-500 dark:text-slate-800 font-bold m-1">
              {{ device.phone_type }}
            </p>
            <p class="text-gray-500 dark:text-slate-800 font-bold m-1">
              ПО: {{ device.phone_os }}, версия Сэйв.info:
              {{ device.app_version }}
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="text-gray-500 dark:text-slate-800 m-1">
            Зарегистрирован {{ device.register_date }}
          </p>
          <p class="text-gray-500 dark:text-slate-800 m-1">
            Был в сети {{ device.last_online }}
          </p>
        </div>
      </div>
    </div>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalPincodeActive"
    title="Сброс пин-кода пользователя"
  >
    <FormField label="Новый пинкод">
      <FormControl
        v-model="tempPinCode"
        placeholder="4 цифры"
        type="number"
      />
    </FormField>
    <BaseButton color="info" label="Сменить пин-код" @click="getPinCode()" />
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalMessageActive"
    title="Отправить сообщение пользователю"
  >
    <FormField label="Сообщение" help="Сообщение для пользователя">
      <FormControl
        v-model="messageToUser"
        placeholder="Сообщение"
        type="text"
      />
    </FormField>
    <BaseButton color="info" label="Отправить" @click="sendMessage()" />
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalPhoneActive"
    title="Редактировать номер телефона пользователя"
  >
    <FormField label="Номер телефона">
      <FormControl
        v-model="currentClientPhone"
        placeholder="Номер"
        type="number"
        :masked="true"
        mask="7##########"
      />
    </FormField>
    <BaseButton color="info" label="Отправить" @click="setUserPhone()" />
  </CardBoxModal>

  <CardBoxModal
    v-model="isAddingToGroupModalActive"
    title="Добавить пользователей в группу"
  >
    <FormField label="Группа" help="Выберите группу">
      <FormControl
        v-model="selectedGroupId"
        type="select"
        :options="
          groups.map((group) => ({ value: group.id, label: group.name }))
        "
      >
      </FormControl>
    </FormField>
    <BaseButton color="info" label="Отправить" @click="addUsersToGroup()" />
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalMessagesActive"
    title="Сообщения пользователя"
    has-table
  >
    <TableMessages :is-active="isModalMessagesActive" />
  </CardBoxModal>

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
        <th>Номер договора</th>
        <th>Адрес договора</th>
        <th>Город</th>
        <th>Отправить уведомление</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <TableCheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />
        <td class="border-b-0 lg:w-6 before:hidden" data-label="Договор">
          {{ client.phone }}
        </td>
        <td class="border-b-0 lg:w-6 before:hidden" data-label="Адрес">
          {{ client.address }}
        </td>
        <td class="border-b-0 lg:w-6 before:hidden" data-label="Город">
          {{ client.city }}
        </td>
        <td data-label="Уведомление">
          <BaseButton
            color="success"
            label="Отправить"
            @click="currentClientPhone = client.phone; isModalMessageActive = true;"
          />
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
