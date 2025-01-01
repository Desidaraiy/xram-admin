<script setup>
import { computed } from 'vue'
import {
  mdiForwardburger,
  mdiBackburger,
  mdiMenu,
  mdiLoading
} from '@mdi/js'
import { useRouter } from 'vue-router'
import menuAside from '@/configs/menuAside.js'
import menuNavBar from '@/configs/menuNavBar.js'
import { useMainStore } from '@/stores/main.js'
import { useLayoutStore } from '@/stores/layout.js'
import { useStyleStore } from '@/stores/style.js'
import BaseIcon from '@/components/BaseIcon.vue'
import FormControl from '@/components/FormControl.vue'
import NavBar from '@/components/NavBar.vue'
import NavBarItemPlain from '@/components/NavBarItemPlain.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import { tokenCookieName } from '@/configs/fetchBaseUrl'
const mainStore = useMainStore()
const etoken = useCookie(tokenCookieName, {sameSite: 'None', secure: true})
const isLoading = computed(() => mainStore.layoutIsLoadingisLoading)
const layoutAsidePadding = 'xl:pl-60'

const styleStore = useStyleStore()

const layoutStore = useLayoutStore()

const router = useRouter()

router.beforeEach((to, from) => {
  layoutStore.isAsideMobileExpanded = false
  layoutStore.isAsideLgActive = false
})

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode()
  }

  if (item.isLogout) {
    etoken.value = ''
    router.push({ name: 'login' })
  }
}
</script>

<template>
  <div :class="{ 'dark': styleStore.darkMode, 'overflow-hidden lg:overflow-visible': layoutStore.isAsideMobileExpanded }">
    <div v-show="isLoading" class="loading-overlay">
      <BaseIcon :path="mdiLoading" size="48" class="loading-icon" />
    </div>
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded }]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="layoutStore.asideMobileToggle()"
        >
          <BaseIcon
            :path="layoutStore.isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="layoutStore.isAsideLgActive = true"
        >
          <BaseIcon
            :path="mdiMenu"
            size="24"
          />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu
        :menu="menuAside"
        @menu-click="menuClick"
      />
      <slot />
      <FooterBar />
    </div>

  </div>
</template>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  pointer-events: auto; 
}

.loading-icon {
  animation: spin 1s linear infinite; 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>