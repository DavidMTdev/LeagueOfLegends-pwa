import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from '../translations'

const lng = localStorage.getItem('language') || 'en_US'

i18n.use(initReactI18next).init({
  lng: lng,
  fallbackLng: 'en_US',
  resources,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
