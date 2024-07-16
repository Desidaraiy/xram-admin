<script setup>
import { ref, reactive, onMounted } from "vue";
import { mdiChartTimelineVariant, mdiFilterMenu, mdiSend } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import { proxyBaseUrl } from "~~/configs/fetchBaseUrl";
import { useMainStore } from "~~/stores/main";

const route = useRoute();

const mainStore = useMainStore()

const preSelectedGroups = ref([]);

onMounted(() => {
  if (route.query.groupid) {
    preSelectedGroups.value.push(route.query.groupid);
  }
});

function boolToInt(bool) {
  return bool === true ? 1 : 0;
}

function removeTfromDateTime(date) {
  date = date.concat(":00");
  return date.replace('T', ' ')
}

const displayMessage = ref("");
const displayTitle = ref("Телеос-1");
const currentDate = new Date().toISOString();

const form = reactive({
  title: displayTitle.value,
  message: displayMessage.value,
  groups_id: [],
  to_all: 0,
  users_id: [],
  token: mainStore.userToken,
  date: currentDate,
  now: 1,
  date: ''
});

const sendNow = ref(true);

const dateToSend = ref("");

const selectedGroups = ref([]);

watch(selectedGroups, () => {
  form.to_all = boolToInt(selectedGroups.value.length === 0)
  form.groups_id = selectedGroups.value
});

watch(sendNow, () => {
  form.now = boolToInt(sendNow.value)
  if(sendNow.value){
    form.date = ''
  }
})

watch(dateToSend, () => {
  form.date = removeTfromDateTime(dateToSend.value)
})

watch(displayTitle, (newValue) => {
  form.title = newValue;
});

watch(displayMessage, (newValue) => {
  form.message = newValue;
});

const submit = async () => {
  if (form.message.length == 0) {
    alert("Введите текст");
    return;
  }
  if(form.title.length == 0){
    alert("Введите заголовок");
    return;
  }
  if(form.now == 0 && form.date == ''){
    alert("Выберите дату рассылки или нажмите «Отправить сейчас»");
    return;
  }
  if(selectedGroups.value.length == 0){
    form.to_all = 1;
    form.groups_id = [];
  }
  const path = proxyBaseUrl + "create-message";
  await $fetch(path, {
    method: "POST",
    body: form,
  }).then((r) => {
    const resp = r.message;
    if (resp === "ok") {
      alert("Уведомление отправлено!");
      form.message = "";
      form.title = "";
      form.subtitle = "";
      form.groups_id = [];
      form.users_id = [];
      form.to_all = 0;
      form.date = '';
      form.now = 1;
    } else {
      alert(resp);
    }
  });
};

</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
        <SectionTitleLineWithButton
          :icon="mdiChartTimelineVariant"
          title="Рассылка PUSH-уведомлений"
          main
        >
        <BaseButton
            color="success"
            label="План рассылок"
            to="/pushmailing/planned"
          />   
        </SectionTitleLineWithButton>
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-2">
            <CardBox form>
              <FormField label="Группы" help="Выберите группы для рассылки">
                <GroupsIdSelector v-model="selectedGroups" :pre-selected-groups="preSelectedGroups" />
              </FormField>
              <FormField
                label="Заголовок"
                help="Заголовок уведомления"
              >
                <FormControl name="title" v-model="displayTitle" />
              </FormField>

              <!-- <FormField
                label="Подзаголовок (необязательно)"
                help="Подзаголовок уведомления"
              >
                <FormControl name="subtitle" v-model="displaySubtitle" />
              </FormField> -->

              <FormField label="Сообщение" help="Введите сообщение">
                <FormControl
                  type="textarea"
                  name="message"
                  v-model="displayMessage"
                />
              </FormField>

              <div class="flex items-center my-8">
                <input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 
                focus:ring-primary-500 mr-4 p-3" v-model="sendNow">
                <span>Отправить сейчас</span>
              </div>

              <FormField v-if="!sendNow" label="Дата и время" help="В эту дату и время начнется рассылка">  
                <FormControl type="datetime-local" name="date" v-model="dateToSend" />
              </FormField>

              <div class="flex flex-row justify-center items-center w-full">
                <BaseButton
                  color="info"
                  label="Отправить"
                  @click="submit()"
                  :icon="mdiSend"
                />
              </div>
            </CardBox>
          </div>
          <div
            class="w-80 h-160 border-4 border-slate-800 dark:border-slate-500 rounded-3xl flex flex-col items-center justify-center px-2"
          >
            <div
              class="flex flex-col mx-4 rounded-lg dark:bg-slate-400 bg-slate-300 drop-shadow-md w-full"
            >
              <div
                class="flex flex-row justify-between w-full rounded-t-lg px-2 py-1/2 dark:bg-slate-500"
              >
                <div class="flex flex-row">
                  <BaseIcon :path="mdiSend" />
                  <span class="font-light text-lg ml-2">Телеос-1</span>
                </div>
                <span class="font-light text-display">сейчас</span>
              </div>

              <div class="w-full flex flex-col px-2 py-2">
                <span
                  v-if="displayTitle !== ''"
                  class="font-bold text-display mb-1"
                >
                  {{ displayTitle }}
                </span>
                <span
                  v-if="displaySubtitle !== ''"
                  class="font-medium text-display my-1"
                >
                  {{ displaySubtitle }}
                </span>
                <span
                  class="font-light text-display mt-1 text-ellipsis line-clamp-2"
                >
                  {{ displayMessage }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
