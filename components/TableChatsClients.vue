<script setup>
import { computed, ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { useStyleStore } from '@/stores/style'
import { useChatController } from '@/controllers/chat'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  checkable: Boolean
})

const styleStore = useStyleStore()

const mainStore = useMainStore()

const chatController = useChatController()

const items = computed(() => mainStore.isSearchingDialogs
  ? mainStore.dialogsFound
  : mainStore.dialogs)

// const items = computed(() => mainStore.dialogs)

const isItemsEmpty = computed(() => items.value.length === 0)

const perPage = ref(10)

const currentPage = ref(0)

const itemsPaginated = computed(
  () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []
  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }
  return pagesList
})


</script>

<template>

  <table>
    <tbody>
      <tr
        v-for="client in itemsPaginated"
        :key="client.id"
      >
      <nuxt-link :to="`/chats/${client.client.id}`"  class="block">
        <td class="border-b-0 lg:w-6 before:hidden" data-label="Клиент">
            <div class="flex flex-row justify-between w-full items-center">
              <div class="flex flex-row">
                <div class="flex flex-col items-center justify-center rounded-full h-12 w-12 bg-blue-500 mr-5">
                  <span class="text-xl font-bold text-white">
                    {{ client.client.name != ''  ? client.client.name.charAt(0) : client.client.name.charAt(0) != '' ? client.login.charAt(0) : '+7' }}
                  </span>
                </div>
                <div class="flex flex-col justify-center w-1/3">
                  <p class="text-gray-500 dark:text-slate-400" :class="client.client.name == undefined || client.client.name == '' ? 'text-xl' : ''">
                    {{ client.client.login }}
                  </p>
                  <p class="text-gray-500 dark:text-slate-400" v-if="client.client.name != undefined && client.client.name != ''">
                    {{ client.client.name }}
                  </p>
                </div>
              </div>
              <div v-if="client.dialog.unreadAdmin > 0" class="flex flex-col items-center justify-center rounded-full bg-red-500 h-6 p-2">
                  <span class="text-xs font-bold text-white">{{ client.dialog.unreadAdmin }}</span>
              </div>
            </div>
        </td>
      </nuxt-link>
      </tr>
    </tbody>
  </table>
  <div
    class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"
  >
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Страница {{ currentPageHuman }} из {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
