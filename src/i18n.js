import Vue from 'vue'
import VueI18n from 'vue-i18n'

import gb from './locales/en'
import es from './locales/es'


// function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }

const i18nData = {
  gb: gb,
  es: es,
}

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'gb', 
  messages: i18nData,
})

// export default new VueI18n({
//   locale: process.env.VUE_APP_I18N_LOCALE || 'en',
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//   messages: loadLocaleMessages()
// })
