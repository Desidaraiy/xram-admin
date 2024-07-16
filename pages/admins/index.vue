<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiChartTimelineVariant,
  mdiAccountMultiplePlus
} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButton from '@/components/BaseButton.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const mainStore = useMainStore()
onMounted(() => {
  mainStore.getAdminsList()
})

const handleSearchString = (value) => {
  mainStore.setSearchingAdminsQuery(value)
}

</script>

<template>
  <div>
    <NuxtLayout name="authenticated">
          <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiChartTimelineVariant"
        title="Администраторы"
        main
      >
      <BaseButton
            color="success"
            label="Добавить"
            to="/admins/new"
          />   
      </SectionTitleLineWithButton>
      <CardBox
        :icon="mdiAccountMultiplePlus"
        title="&nbsp;"
        has-table
        has-searchbar
        @search-string="handleSearchString">
        <TableSampleAdmins
        :checkable="false"
          />
      </CardBox>

    </SectionMain>
    </NuxtLayout>
  </div>

</template>
