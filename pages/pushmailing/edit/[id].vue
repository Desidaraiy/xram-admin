<script setup>
import { ref, reactive, onMounted } from "vue";
import { mdiChartTimelineVariant, mdiChevronLeft, mdiFilterMenu, mdiSend } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import { proxyBaseUrl } from "~~/configs/fetchBaseUrl";
import { useMainStore } from "~~/stores/main";

const route = useRoute();

const router = useRouter();

const mainStore = useMainStore()

const preSelectedGroups = ref([]);

function boolToInt(bool) {
  return bool === true ? 1 : 0;
}

function removeTfromDateTime(date) {
  date = date.concat(":00");
  return date.replace('T', ' ')
}

const displayMessage = ref("Введите текст");
const displayTitle = ref("");
const displaySubtitle = ref("");
const currentDate = new Date().toISOString();
const groupsLoaded = ref(false);

const form = reactive({
  title: displayTitle.value,
  subtitle: displaySubtitle.value,
  message: displayMessage.value,
  groups_id: [],
  to_all: 0,
  users_id: [],
  token: mainStore.userToken,
  date: currentDate,
  now: 1,
  date: '',
  id: 0
});

const sendNow = ref(true);

const dateToSend = ref("");

const selectedGroups = ref([]);

onMounted(() => {
  downloadPushmailingById(route.params.id)
  form.id = route.params.id;
});

const downloadPushmailingById = async (id) => {
    const path = proxyBaseUrl+'show-message'
    await $fetch(path, {
            method: 'POST',
            body: { token: mainStore.userToken, message_id: id}
        }).then(r => {
            displayMessage.value = r.data.message.message;
            displayTitle.value = r.data.message.title;
            dateToSend.value = r.data.message.date;
            sendNow.value = r.data.message.date.split('-')[0] == '0000';
            if(r.data.all[0].to_all != 1){
              for(let i = 0; i < r.data.groups.length; i++){
                preSelectedGroups.value.push(r.data.groups[i].id)
              }
            }
            groupsLoaded.value = true            
        })
}

watch(selectedGroups, () => {
  form.to_all = boolToInt(selectedGroups.value.length === 0)
  form.groups_id = selectedGroups.value
});

watch(form.value, () => {
  console.log(form.date);
})

watch(sendNow, () => {
  form.now = boolToInt(sendNow.value)
  if(sendNow.value){
    form.date = ''
  }
})

watch(dateToSend, () => {
  form.date = dateToSend.value
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
  if(form.now == 0 && form.date == ''){
    alert("Выберите дату рассылки или нажмите «Отправить сейчас»");
    return;
  }
  const path = proxyBaseUrl + "edit-message";
  await $fetch(path, {
    method: "POST",
    body: form,
  }).then((r) => {
    const resp = r.message;
    if (resp === "ok") {
      router.back();
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
        <SectionTitleLine
          :icon="mdiChevronLeft"
          title="Редактировать уведомление"
          :back="true"
          main
        >
        </SectionTitleLine>

        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-2">
            <CardBox form>
              <FormField label="Группы" help="Выберите группы для рассылки">
                <GroupsIdSelector v-if="groupsLoaded" v-model="selectedGroups" :pre-selected-groups="preSelectedGroups" />
                <div v-else>Загрузка групп...</div>
              </FormField>
              <FormField
                label="Заголовок (необязательно)"
                help="Заголовок уведомления"
              >
                <FormControl name="title" v-model="displayTitle" />
              </FormField>

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
