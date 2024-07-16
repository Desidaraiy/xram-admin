<script setup>
import { ref, reactive, onMounted } from "vue";
import { mdiChevronLeft } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import { proxyBaseUrl } from "~~/configs/fetchBaseUrl";
import { useMainStore } from "~~/stores/main";

const route = useRoute()

const router = useRouter()

const preSelectedGroups = ref([])

const mainStore = useMainStore();

const selectedGroups = ref([]);

const groupsLoaded = ref(false);

const form = reactive({
  action_url: "",
  token: mainStore.userToken,
  text: "",
  title: "",
  date_start: "",
  date_end: "",
  to_all: true,
  groups_id: [],
  advertising_id: parseInt(route.params.id)
});

onMounted(() => {
  downloadAdvertisingById(route.params.id)
})

watch(selectedGroups, () => {
  form.to_all = selectedGroups.value.length === 0
  form.groups_id = selectedGroups.value
});

const downloadAdvertisingById = async (id) => {
    const path = proxyBaseUrl+'get-advertising-by-id'
    await $fetch(path, {
            method: 'POST',
            body: { token: mainStore.userToken, advertising_id: id}
          }).then(r => {
            if(r.message != 'ok'){
              alert('Ошибка');
              router.back();
              mainStore.getAdvertsList();
              return
            }
            form.action_url = r.advertise[0].action_url;
            form.token = mainStore.userToken;
            form.text = r.advertise[0].text;
            form.title = r.advertise[0].title;
            form.date_start = r.advertise[0].date_start.split(' ')[0];
            form.date_end = r.advertise[0].date_end.split(' ')[0];
            if(r.advertise[0].to_all != 1){
              for(let i = 0; i < r.advertise.length; i++){
                preSelectedGroups.value.push(r.advertise[i].group_id)
              }
            }
            groupsLoaded.value = true
          });
};



const editAdvert = async () => {
  const path = proxyBaseUrl + "edit-advertising";
  $fetch(path, {
    method: "POST",
    body: form,
  }).then(async (r) => {
    if (r.message === "ok") {
      await setVisibility(form.advertising_id);
      router.back();
      mainStore.getAdvertsList();
    } else {
      alert("Ошибка: ", r.picture);
    }
  });
};

const setVisibility = async (id) => {
  let path;

  const body = {
    token: form.token,
    advertising_id: id,
  };

  if(form.to_all){
    body.to_all = 1;
    body.users_id = [];
    path = proxyBaseUrl + "advertising-to-users";
  } else {
    body.to_all = 0;
    body.groups_id = form.groups_id;
    path = proxyBaseUrl + "advertising-to-groups";
  }
  
  await $fetch(path, {
    method: "POST",
    body: body}).then((r) => {
      console.log(r)
    });
};

</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
        <SectionTitleLine
          :icon="mdiChevronLeft"
          :title="'Редактировать объявление'+ ' / '+ route.params.id"
          :back="true"
          main
        >
        </SectionTitleLine>

        <div class="grid grid-cols-1 w-full gap-4">
          <CardBox title="Информация" form>

            <FormField label="Группы">
              <GroupsIdSelector v-if="groupsLoaded" v-model="selectedGroups" :pre-selected-groups="preSelectedGroups" />
              <div v-else>Загрузка групп...</div>
            </FormField>

            <FormField label="Текст для предварительного просмотра (10-25 символов)">
              <FormControl
                v-model="form.title"
                placeholder="Текст"
                type="text"
              />
            </FormField>

            <FormField label="Текст для кнопки перехода (10-25 символов)">
              <FormControl
                v-model="form.text"
                placeholder="Текст"
                type="text"
              />
            </FormField>
            <FormField label="Ссылка для перехода">
              <FormControl
                v-model="form.action_url"
                placeholder="https://..."
                type="text"
              />
            </FormField>
            <FormField label="Дата, с которой будет видно объявление">
              <FormControl
                v-model="form.date_start"
                placeholder="Дата"
                type="date"
              />
            </FormField>
            <FormField label="Дата, в которую объявление будет скрыто">
              <FormControl
                v-model="form.date_end"
                placeholder="Дата"
                type="date"
              />
            </FormField>
          </CardBox>
        </div>
        <div class="flex flex-row justify-start items-center m-2">
          <BaseButtons>
            <BaseButton color="info" label="Отмена" to="/advertising" />
            <BaseButton
              color="success"
              label="Готово"
              @click="editAdvert()"
            />
          </BaseButtons>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
