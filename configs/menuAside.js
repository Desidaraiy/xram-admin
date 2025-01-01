import {
  mdiShieldAccount,
  mdiNotificationClearAll,
  mdiStar,
} from '@mdi/js'

export default [
  {
    to: '/',
    icon: mdiShieldAccount,
    label: 'Клиенты'
  },
  {
    to: '/schedules',
    icon: mdiNotificationClearAll,
    label: 'Расписание'
  },
  {
    to: '/orders',
    icon: mdiStar,
    label: 'Заказы'
  },
]
