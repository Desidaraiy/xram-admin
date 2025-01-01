import {
  mdiAccount,
  mdiLogout,
  mdiThemeLightDark,
} from '@mdi/js'

export default [
  // {
  //   icon: mdiMenu,
  //   label: 'Sample menu',
  //   menu: [
  //     {
  //       icon: mdiClockOutline,
  //       label: 'Item One'
  //     },
  //     {
  //       icon: mdiCloud,
  //       label: 'Item Two'
  //     },
  //     {
  //       isDivider: true
  //     },
  //     {
  //       icon: mdiCrop,
  //       label: 'Item Last'
  //     }
  //   ]
  // },
  // {
  //   isCurrentUser: true,
  //   menu: [
  //     {
  //       icon: mdiLogout,
  //       label: 'Выйти',
  //       isLogout: true
  //     }
  //   ]
  // },
  {
    icon: mdiThemeLightDark,
    label: 'Темная/Светлая тема',
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiLogout,
    label: 'Выйти',
    isDesktopNoLabel: true,
    isLogout: true
  }
]