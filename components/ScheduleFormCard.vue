<script setup>
import { ref, watch } from 'vue'
import { proxyBaseUrl } from '@/configs/fetchBaseUrl'
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()

const { $moment } = useNuxtApp()

const props = defineProps({
  form: Object,
  visibleBlocks: {
    type: Number,
    default: 2,
  },
})

const visibleBlocks = ref(props.visibleBlocks)
const originalForm = ref({ ...props.form })
const isModified = ref(false)
const isClear = ref(false)
const isButtonDisabled = ref(false)

const getHumanizedFullDate = (id) => {
  const currentYear = $moment().format('YYYY')
  const currentMonth = $moment().format('MM')
  id < 10 ? id = '0' + id : id
  return $moment(`${currentYear}-${currentMonth}-${id}`).format('D MMMM YYYY, dddd')
}

const updateIsModified = () => {
  if (JSON.stringify(props.form).replace(/\:null/gi, "\:\"\"") !== JSON.stringify(originalForm.value).replace(/\:null/gi, "\:\"\"")) {
    isModified.value = true
  } else {
    isModified.value = false
  }
}

watch( 
  () => props.form,
  (newForm, oldForm) => {
    updateIsModified()
    if (
      !newForm.saints &&
      !newForm.time_1 &&
      !newForm.description_1 &&
      !newForm.time_2 &&
      !newForm.description_2 && 
      !newForm.time_3 &&
      !newForm.description_3 &&
      !newForm.time_4 &&
      !newForm.description_4 &&
      !newForm.time_5 &&
      !newForm.description_5
    ) {
      isClear.value = true
    } else {
      isClear.value = false
    }

    if (!newForm.time_3 && !newForm.description_3) visibleBlocks.value = 2
    if (newForm.time_3 || newForm.description_3) visibleBlocks.value = 3
    if (newForm.time_4 || newForm.description_4) visibleBlocks.value = 4
    if (newForm.time_5 || newForm.description_5) visibleBlocks.value = 5
  },
  { deep: true, immediate: true }
)

const addTime = () => {
  if (visibleBlocks.value < 5) {
    visibleBlocks.value += 1
  }
}

const resetForm = () => {
  Object.assign(props.form, originalForm.value)
  isModified.value = false
}

const clearForm = () => {
  Object.assign(props.form, {
    id: props.form.id,
    saints: '',
    time_1: '',
    description_1: '',
    time_2: '',
    description_2: '',
    time_3: '',
    description_3: '',
    time_4: '',
    description_4: '',
    time_5: '',
    description_5: '',
  })
  isModified.value = false
  isClear.value = true
}

const submitForm = async () => {
  isButtonDisabled.value = true
  try {
    await $fetch(proxyBaseUrl + '/schedules/update', {
      method: 'POST',
      body: props.form,
      headers: {
        'Authorization': 'Bearer ' + mainStore.userToken
      },
    })
    originalForm.value = { ...props.form }
    isModified.value = false
    isButtonDisabled.value = false
  } catch (error) {
    console.error('Error saving form:', error)
  }
}

const getCountOfDaysInCurrentMonth = () => {
  const currentYear = $moment().format("YYYY")
  const currentMonth = $moment().format('MM')
  return $moment(`${currentYear}-${currentMonth}`, "YYYY-MM").daysInMonth()
}

</script>

<template>
  <div>
    <CardBox :title="getHumanizedFullDate(form.id)" v-if="parseInt(form.id) <= getCountOfDaysInCurrentMonth()">
      <FormField label="Святые" help="через запятую">
        <FormControl v-model="form.saints" type="text" />
      </FormField>
      <div class="flex flex-row justify-between my-2">
        <div class="w-3/12 mr-2">
          <FormField label="Время начала">
            <FormControl v-model="form.time_1" type="time" />
          </FormField>
        </div>
        <div class="w-9/12">
          <FormField label="Описание">
            <FormControl v-model="form.description_1" type="text" />
          </FormField>
        </div>
      </div>
      <div class="flex flex-row justify-between my-2">
        <div class="w-3/12 mr-2">
          <FormField>
            <FormControl v-model="form.time_2" type="time" />
          </FormField>
        </div>
        <div class="w-9/12">
          <FormField>
            <FormControl v-model="form.description_2" type="text" />
          </FormField>
        </div>
      </div>
      <div v-if="visibleBlocks >= 3" class="flex flex-row justify-between my-2">
        <div class="w-3/12 mr-2">
          <FormField>
            <FormControl v-model="form.time_3" type="time" />
          </FormField>
        </div>
        <div class="w-9/12">
          <FormField>
            <FormControl v-model="form.description_3" type="text" />
          </FormField>
        </div>
      </div>
      <div v-if="visibleBlocks >= 4" class="flex flex-row justify-between my-2">
        <div class="w-3/12 mr-2">
          <FormField>
            <FormControl v-model="form.time_4" type="time" />
          </FormField>
        </div>
        <div class="w-9/12">
          <FormField>
            <FormControl v-model="form.description_4" type="text" />
          </FormField>
        </div>
      </div>
      <div v-if="visibleBlocks >= 5" class="flex flex-row justify-between my-2">
        <div class="w-3/12 mr-2">
          <FormField>
            <FormControl v-model="form.time_5" type="time" />
          </FormField>
        </div>
        <div class="w-9/12">
          <FormField>
            <FormControl v-model="form.description_5" type="text" />
          </FormField>
        </div>
      </div>
      <template #footer>
        <div v-if="isModified" class="text-red-600 font-bold mb-2">
          Изменения не сохранены
        </div>
        <BaseButtons>
          <BaseButton
            v-if="isModified"
            color="info"
            small
            @click="submitForm"
            :disabled="isButtonDisabled"
            :label="isButtonDisabled ? 'Сохранение...' : 'Сохранить'"
          />
          <BaseButton
            color="info"
            v-if="isModified"
            small
            
            @click="resetForm"
            label="Отмена"
          />
          <BaseButton
            color="warning"
            small
            outline
            v-if="!isClear"
            @click="clearForm"
            label="Очистить"
          />
          <BaseButton
            v-if="visibleBlocks < 5"
            color="info"
            small
            outline
            @click="addTime"
            label="+ Добавить"
          />
        </BaseButtons>
      </template>
    </CardBox>
  </div>
</template>