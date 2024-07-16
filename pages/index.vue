<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiShieldAccount
} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
const mainStore = useMainStore()

onMounted(() => {
  mainStore.getClientsList()
})

const handleSearchString = (value) => {
  mainStore.setSearchingClientsQuery(value)
}
</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
      <SectionMain>
      <SectionTitleLine
        :icon="mdiShieldAccount"
        title="Клиенты"
        main
      >
      </SectionTitleLine>
        <CardBox
          :icon="mdiShieldAccount"
          title="Клиенты"
          has-table
          has-searchbar
          @search-string="handleSearchString"
          >
          <TableSampleClients
            :checkable="true"
          />
        </CardBox>
    </SectionMain>
    </NuxtLayout>
  </div>

</template>
