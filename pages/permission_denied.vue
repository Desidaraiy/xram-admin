<script setup>
import { mdiDoor} from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
</script>

<template>

  <div>

    <NuxtLayout>
      <SectionFullScreen
      v-slot="{ cardClass }"
      bg="greenIndigo"
    >
      <CardBox
        :class="cardClass"
        class="max-h-screen overflow-y-auto"
        title="«Телеос-1» кабинет администратора"
        :headerIcon="mdiDoor"
      >
        <div class="space-y-3">
          <h2 class="text-2xl">У вас нет доступа к этому разделу. </h2>
        </div>
        <template #footer>
          <BaseButtons>
            <BaseButton
              color="success"
              label="Вернуться"
              to="/"
            />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
    </NuxtLayout>
  </div>

</template>
