<script setup>
import { computed } from 'vue'
import { containerMaxW } from '@/configs/config.js';
import BaseLevel from '@/components/BaseLevel.vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer
    class="py-2 px-6"
    :class="containerMaxW"
  >
    <BaseLevel>
      <div class="text-center md:text-left">
        <b>&copy;{{ year }}, <a
          href="https://vratarnica.ru/"
          target="_blank"
        >vratarnica.ru</a></b>
      </div>
    </BaseLevel>
  </footer>
</template>
