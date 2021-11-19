import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from '../translations'

i18n.use(initReactI18next).init({
  lng: 'fr_FR',
  fallbackLng: 'en_US',
  resources,
  interpolation: {
    escapeValue: false
  }
})

export default i18n