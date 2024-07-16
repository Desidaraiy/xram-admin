import {
  mdiShieldAccount,
  mdiNotificationClearAll,
  mdiStar,
  mdiAccountMultiplePlus
} from '@mdi/js'

export default [
  {
    to: '/',
    icon: mdiShieldAccount,
    label: 'Клиенты'
  },
  {
    to: '/pushmailing',
    icon: mdiNotificationClearAll,
    label: 'Рассылка'
  },
  {
    to: '/advertising',
    icon: mdiStar,
    label: 'Реклама'
  },
  {
    to: '/groups',
    label: 'Группы',
    icon: mdiAccountMultiplePlus
  },
]
