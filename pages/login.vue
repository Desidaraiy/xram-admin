<script setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk, mdiDoor} from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import { useMainStore } from '@/stores/main.js'
import { tokenCookieName, proxyBaseUrl } from '@/configs/fetchBaseUrl'

const form = reactive({
  phone: '',
  password: ''
})

const etoken = useCookie(tokenCookieName, {sameSite: 'None', secure: true})
const errorDialogText = ref('Проверьте телефон и пароль')
const mainStore = useMainStore()
const router = useRouter()
const isButtonDisabled = ref(false)
const isErrorModalActive = ref(false)

const isPhoneValid = ref(true);
const isPasswordValid = ref(true);

const validationRules = {
  phone: value => value.length === 11,
  password: value => value.length >= 1
};

watch(form, (newVal, oldVal) => {
  isPhoneValid.value = validationRules.phone(newVal.phone);
  isPasswordValid.value = validationRules.password(newVal.password);
}, { deep: true });

const submit = async () => {

  if(form.phone == '' || form.password == ''){
    isErrorModalActive.value = true
    errorDialogText.value = 'Заполните все обязательные поля'
    return
  }

  // if(!isPasswordValid.value || !isPhoneValid.value){
  //   isErrorModalActive.value = true
  //   errorDialogText.value = 'Проверьте телефон и пароль'
  //   return
  // }
  
  isButtonDisabled.value = true
  const path = proxyBaseUrl+'login'

  await $fetch(path, {
    method: 'POST',
    body: form
  }).then(r => {
    const resp = r.message
    isButtonDisabled.value = false
    if(resp === 'ok'){ 
      const { message, token } = r
      etoken.value = token
      router.push('/')
    }else{
      isErrorModalActive.value = true
      errorDialogText.value = 'Проверьте телефон и пароль'
    }
  });
}
</script>

<template>

  <div>

    <CardBoxModal
      v-model="isErrorModalActive"
      title="Ошибка входа"
      buttonLabel="OK"
    >
      <p>{{ errorDialogText }}</p>
    </CardBoxModal>

    <NuxtLayout>
      <SectionFullScreen
      v-slot="{ cardClass }"
      bg="greenIndigo"
    >
      <CardBox
        :class="cardClass"
        class="max-h-screen overflow-y-auto"
        form
        title="«Телеос-1» кабинет администратора"
        :headerIcon="mdiDoor"
        @submit.prevent="submit"
      >
        <FormField
          label="Телефон"
          :help="isPhoneValid ? 'Телефон для входа' : 'Телефон должен содержать 11 цифр'" 
          :isValid="isPhoneValid"
        >
          <FormControl
            v-model="form.phone"
            :icon="mdiAccount"
            type="tel"
            name="login"
            autocomplete="phone"
          />
        </FormField>

        <FormField
          label="Пароль"
          :help="isPasswordValid ? 'Пароль для входа' : 'Пароль не может быть пустым'"
          :isValid="isPasswordValid"
        >
          <FormControl
            v-model="form.password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>
        <template #footer>

          <BaseButtons>
            <BaseButton
              type="submit"
              color="success"
              small
              :disabled="isButtonDisabled"
              :label="isButtonDisabled ? 'Загрузка...' : 'Войти'"
            />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
    </NuxtLayout>
  </div>

</template>
