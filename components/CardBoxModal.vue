<script setup>
import { computed } from 'vue'
import { mdiClose } from '@mdi/js'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  largeTitle: {
    type: String,
    default: null
  },
  button: {
    type: String,
    default: 'info'
  },
  buttonLabel: {
    type: String,
    default: 'Готово'
  },
  hasCancel: Boolean,
  hasTable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const confirmCancel = mode => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')
</script>

<template>
  <OverlayLayer
    v-show="value"
    @overlay-click="cancel"
  >
    <CardBoxScrollable
      v-show="value"
      :title="title"
      class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      :header-icon="mdiClose"
      modal
      @header-icon-click="cancel"
    >
      <div class="space-y-3 flex flex-col">
        <h1
          v-if="largeTitle"
          class="text-2xl flex-1"
        >
          {{ largeTitle }}
        </h1>
        <div class="flex-1" :class="{'p-6':!hasTable}">
          <slot />
        </div>
      </div>

      <template #footer>
        <div class="">
          <BaseButtons>
            <BaseButton
              :label="buttonLabel"
              :color="button"
              @click="confirm"
            />
            <BaseButton
              v-if="hasCancel"
              label="Отмена"
              :color="button"
              outline
              @click="cancel"
            />
          </BaseButtons>
        </div>
      </template>
    </CardBoxScrollable>
  </OverlayLayer>
</template>
