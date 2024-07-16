<script setup>
import { ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import { tokenCookieName, proxyBaseUrl } from '@/configs/fetchBaseUrl'
import {
  mdiAccountMultiplePlus
} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'

const mainStore = useMainStore()
const isModalActive = ref(false)
const groupName = ref('')

onMounted(() => {
  mainStore.getGroupsList()
})

const isGroupsEmpty = computed(() => mainStore.groups.length === 0)

const addGroup = async () => {
  const path = proxyBaseUrl+'group'
  await $fetch(path, {
    method: 'POST',
    body: { token: mainStore.userToken, group_name: groupName.value, action: "add", group_state: 1 }
  }).then(r => {
    if(r.message === 'ok'){
      isModalActive.value = false
      groupName.value = ''
      mainStore.getGroupsList()
    }else{
      alert('Ошибка: ', r.message)
    }
  })
}
const handleSearchString = (value) => {
  mainStore.setSearchingGroupsQuery(value)
}

</script>

<template>
  <div>

    <CardBoxModal
      v-model="isModalActive"
      title="Добавить группу"
    >
      <FormField
        label="Название"
        help="Название для группы"
      >
        <FormControl
          v-model="groupName"
          placeholder="Название"
          type="text"/>
      </FormField>
      <BaseButton
        color="info"
        label="Создать группу"
        @click="addGroup()"
        />
    </CardBoxModal>


    <NuxtLayout name="authenticated">
      <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiAccountMultiplePlus"
        title="Группы"
        main
      >
        <BaseButton
          color="success"
          label="Добавить"
          @click="isModalActive = true"
        />    
      </SectionTitleLineWithButton>

      <CardBox
        v-if="!isGroupsEmpty"
        :icon="mdiAccountMultiplePlus"
        title="Группы клиентов"
        has-table
        has-searchbar
        @search-string="handleSearchString">
        <TableSampleGroups />
      </CardBox>
      
      <div v-else class="flex flex-col h-192 items-center justify-center">
        <h2 class="text-xl text-gray-700 dark:text-gray-300 my-2">Группы не найдены</h2>
      </div>
    </SectionMain>
    </NuxtLayout>
  </div>

</template>
