<script setup>
import { ref, reactive, onMounted } from 'vue'
import {
  mdiChevronLeft
} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import { useMainStore } from '@/stores/main'
import { proxyBaseUrl } from '~~/configs/fetchBaseUrl'

const mainStore = useMainStore()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
    await mainStore.setCurrentAdmin(route.params.id)
    await mainStore.getCurrentAdminSections()
    sections.sectionsData = arrayToSections(sections.sectionsData, mainStore.currentAdminSections)
    form.fio = mainStore.currentAdmin.fio
    form.email = mainStore.currentAdmin.email
    form.phone = mainStore.currentAdmin.phone
    form.password = mainStore.currentAdmin.password
})

const form = reactive({
    fio: '',
    email: '',
    phone: '',
    password: '',
})

const sections = reactive({
    sectionsData: {
        stats: {
            id: 2,
            value: true
        },
        clients: {
            id: 3,
            value: false
        },
        mailing: {
            id: 4,
            value: false
        },
        admins: {
            id: 1,
            value: false
        },
        advertising: {
            id: 5,
            value: false
        },
        groups: {
            id: 7,
            value: false
        }
    }
})
const sectionsToArray = (sections) => {
    return Object.values(sections)
        .filter(section => section.value)
        .map(section => section.id)
}

const arrayToSections = (sections, array) => {
    array.forEach(id => {
        for (const [key, item] of Object.entries(sections)) {
            if (item.id === id)  {
                item.value = true
            }
        }       
    });
    return sections
}

const isErrorModalActive = ref(false)
const errorText = ref('')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return re.test(String(phone).toLowerCase());
}

const submit = async () => {
    if(form.name == '' || form.email == '' || form.password == ''){
        isErrorModalActive.value = true 
        errorText.value = 'Заполните все обязательные поля'
        return
    }
    // if(!validateEmail(form.email)){
    //     isErrorModalActive.value = true 
    //     errorText.value = 'Некорректный email'
    //     return
    // }
    // if(!validatePhone(form.phone)){
    //     isErrorModalActive.value = true
    //     errorText.value = 'Некорректный телефон'
    //     return
    // }
    const data = {
        token: mainStore.userToken,
        id: mainStore.currentAdmin.id,
        fio: form.fio,
        email: form.email,
        phone: form.phone,
        password: form.password,
        type: "operator",
        active: "1"
    }
    const path = proxyBaseUrl+'edit-admin'
    $fetch(path, {
        method: 'POST',
        body: data
    }).then(r => {
        const resp = r.message
        if(resp === 'ok'){ 
            setNewPriveleges().then(() => {
                router.push('/admins')
            })
        }else{
            alert(resp)
        }
    });
}

const setNewPriveleges = async () => {
    const selectedSections = sectionsToArray(sections.sectionsData)
    const path = proxyBaseUrl+'set-privilege'
    const data = {
        token: mainStore.userToken,
        admin_id: mainStore.currentAdmin.id,
        sections: selectedSections
    }
    console.log('setting priveleges: ', data);
    $fetch(path, {
        method: 'POST',
        body: data
    }).then(r => {
        const resp = r.message
        if(resp != 'ok'){
            return
        }
    });
}

</script>

<template>

  <div>

    <CardBoxModal
    v-model="isErrorModalActive"
    title="Ошибка"
  >
    <p> {{ errorText }}</p>
  </CardBoxModal>
    <NuxtLayout name="authenticated">
          <SectionMain>
      <SectionTitleLine
        :icon="mdiChevronLeft"
        title="Редактирование администратора"
        :back="true"
        main
      >
      </SectionTitleLine>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardBox title="Информация"
                form 
                @submit.prevent="submit">
            <FormField
                label="Имя"
                help="Обязательно"
            >
            <FormControl
                v-model="form.fio"
                name="name"
                autocomplete="name"
            />
            </FormField>
            <FormField
                label="E-mail"
                help="Обязательно"
            >
            <FormControl
                v-model="form.email"
                name="email"
                autocomplete="email"
            />
            </FormField>
            <FormField
                label="Телефон"
                help="Обязательно"
            >
            <FormControl
                v-model="form.phone"
                name="phone"
                :intonly="true"
                autocomplete="phone"
            />
            </FormField>
            <FormField
                label="Пароль"
                help="Обязательно"
            >
            <FormControl
                v-model="form.password"
                name="password"
                type="password"
                autocomplete="password"
            />
            </FormField>
            <span class="flex justify-center text-center text-base">
                Приглашение будет отправлено на электронную почту
            </span>
        </CardBox>
        <CardBox title="Доступные разделы">
            <div class="flex items-center my-2">
                <input type="checkbox" class="form-checkbox rounded-full text-primary-500 
                border-primary-500 focus:ring-primary-500 mr-4 p-3" v-model="sections.sectionsData.admins.value">
                <span>Администраторы</span>
            </div>
            <div class="flex items-center my-2">
                <input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 
                focus:ring-primary-500 mr-4 p-3" v-model="sections.sectionsData.clients.value">
                <span>Клиенты</span>
            </div>
            <div class="flex items-center my-2">
                <input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500
                focus:ring-primary-500 mr-4 p-3" v-model="sections.sectionsData.groups.value">
                <span>Группы</span>
            </div>            
            <div class="flex items-center my-2">
                <input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 
                focus:ring-primary-500 mr-4 p-3" v-model="sections.sectionsData.mailing.value">
                <span>Рассылка</span>
            </div>
            <div class="flex items-center my-2">
                <input type="checkbox" class="form-checkbox rounded-full text-primary-500 border-primary-500 
                focus:ring-primary-500 mr-4 p-3" v-model="sections.sectionsData.advertising.value">
                <span>Реклама</span>
            </div>
        </CardBox>
    </div>
    <div class="flex flex-row justify-end items-center m-2 ">
        <BaseButtons>
        <BaseButton 
            color="info"
            label="Отмена"
            to="/admins"
        />
        <BaseButton
            color="success"
            label="Сохранить"
            @click="submit()"
        />
        </BaseButtons>
    </div>
    </SectionMain>
    </NuxtLayout>
  </div>
</template>