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

onMounted(() => {
  if(route.query.groupid){
    preSelectedGroups.value.push(route.query.groupid)
  }
})

const mainStore = useMainStore();

const pictureToUpload = ref(null);
const previewToUpload = ref(null);

const selectedGroups = ref([]);

const form = reactive({
  action_url: "",
  token: mainStore.userToken,
  text: "",
  title: "",
  to_all: true,
  groups_id: [],
  date_start: "",
  date_end: "",
  redirect: false,
});

const addAdvert = async () => {
  let formdata = new FormData();


  if(previewToUpload.value === null){
    alert("Не выбран графический файл");
    return
  }else{
    formdata.append("preview", previewToUpload.value);
  }

  if(form.redirect === false && pictureToUpload.value === null){
    alert("Не выбран графический файл");
    return
  }else{
    formdata.append("picture", pictureToUpload.value);
  }
  
  // formdata.append("preview", previewToUpload.value);
  // formdata.append("picture", pictureToUpload.value);

  if(form.action_url == ''){
    alert("Не введена ссылка");
    return
  }
  if(form.text == ''){
    alert("Не введен текст");
    return
  }
  if(form.title == ''){
    alert("Не введено название");
    return
  }
  if(form.date_start == '' || form.date_end == ''){
    alert("Не введены даты");
    return
  }
  formdata.append("action_url", form.action_url);
  formdata.append("text", form.text);
  formdata.append("date_start", form.date_start);
  formdata.append("date_end", form.date_end);
  formdata.append("redirect", boolToInt(form.redirect));
  formdata.append("token", form.token);
  formdata.append("title", form.title);
  const path = proxyBaseUrl + "add-advertising";
  await $fetch(path, {
    method: "POST",
    body: formdata,
  }).then(async (r) => {
    if (r.message === "ok") {
      await setVisibility(r.advertise.id);
      router.back();
      mainStore.getAdvertsList();
    } else {
      alert("Ошибка: Графический файл "  + r.picture);
    }
  });
  formdata = new FormData();
};

const setVisibility = async (id) => {
  console.log('set visibility', id);
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

watch(selectedGroups, () => {
  form.to_all = selectedGroups.value.length === 0
  form.groups_id = selectedGroups.value
});

function boolToInt(bool) {
  return bool === true ? 1 : 0;
}
</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
        <SectionTitleLine
          :icon="mdiChevronLeft"
          title="Добавить объявление"
          :back="true"
          main
        >
        </SectionTitleLine>

        <div class="grid grid-cols-1 w-full gap-4">
          <CardBox title="Информация" form>

            <FormField label="Группы">
              <GroupsIdSelector v-model="selectedGroups" :pre-selected-groups="preSelectedGroups" />
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
            <FormField label="Без полноразмерной картинки ">
              <input type="checkbox" v-model="form.redirect" />
            </FormField>
            <FormField
              label="Картинка для отображения в сторис (1080х1920, вертикаль, JPG, PNG, JPEG)"
            >
              <FormFilePicker
                v-model="pictureToUpload"
                label="Загрузить картинку"
                color="success"
              />
            </FormField>
            <FormField label="Миниатюра (500х500 JPG, PNG, JPEG)">
              <FormFilePicker
                v-model="previewToUpload"
                label="Загрузить картинку"
                color="success"
              />
            </FormField>
          </CardBox>
        </div>
        <div class="flex flex-row justify-start items-center m-2">
          <BaseButtons>
            <BaseButton color="info" label="Отмена" to="/advertising" />
            <BaseButton
              color="success"
              label="Создать объявление"
              @click="addAdvert()"
            />
          </BaseButtons>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
