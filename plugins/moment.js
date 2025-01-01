import moment from 'moment-timezone'

import 'moment/dist/locale/ru';

export default defineNuxtPlugin(() => {
  moment.locale('ru');
  moment.tz.setDefault('Asia/Irkutsk');
  return {
    provide: {
      moment,
    },
  }
})