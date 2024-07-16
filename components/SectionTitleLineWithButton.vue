<script setup>
import { mdiCog } from '@mdi/js'
import { useSlots, computed } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
import IconRounded from '@/components/IconRounded.vue'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  main: Boolean,
  back: {
    type: Boolean,
    default: false
  }
})

const isBackArrow = computed(() => props.back === true ? true : false)

const hasSlot = computed(() => useSlots().default)
</script>

<template>
  <section 
    :class="{'pt-6':!main}"
    class="mb-6 flex items-center justify-between"
  >
    <div class="flex items-center justify-start">
      <IconRounded
        v-if="icon && main"
        :icon="icon"
        type="light"
        class="mr-3"
        @click="isBackArrow ? $router.go(-1) : null"
        bg
      />
      <BaseIcon
        v-else-if="icon"
        :path="icon"
        class="mr-2"
        size="20"
      />
      <h1
        :class="main ? 'text-3xl' : 'text-2xl'"
        class="leading-tight"
      >
        {{ title }}
      </h1>
    </div>
    <slot v-if="hasSlot" />
    <BaseButton
      v-else
      :icon="mdiCog"
      small
    />
  </section>
</template>
