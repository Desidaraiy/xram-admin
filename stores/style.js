import { defineStore } from 'pinia'
import * as styles from '@/configs/styles.js'
import { darkModeKey, styleKey } from '@/configs/config.js'

export const useStyleStore = defineStore('style', {
  state: () => ({
    /* Styles */
    asideStyle: '',
    asideBrandStyle: 'bg-emerald-500',
    asideMenuItemStyle: '',
    asideMenuItemActiveStyle: '',
    asideMenuDropdownStyle: '',
    navBarItemLabelStyle: '',
    navBarItemLabelHoverStyle: '',
    navBarItemLabelActiveColorStyle: '',
    overlayStyle: '',

    /* Dark mode */
    darkMode: false,
  }),
  actions: {
    setStyle (payload) {
      if (!styles[payload]) {
        return
      }

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(styleKey, payload)
      }

      const style = styles[payload]

      for (const key in style) {
        this[`${key}Style`] = style[key]
      }
    },

    setDarkMode (payload = null) {
      this.darkMode = payload !== null ? payload : !this.darkMode

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(darkModeKey, this.darkMode ? '1' : '0')
      }

      if (typeof document !== 'undefined') {
        document.body.classList[this.darkMode ? 'add' : 'remove']('dark-scrollbars')
      }
    }
  }
})
