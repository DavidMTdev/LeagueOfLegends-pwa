import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ContainerNav, NavTranslation } from '../../styles/header'

const NavTranslate = () => {
  const { i18n } = useTranslation()
  const [current, setCurrent] = useState(i18n.language)

  console.log(current)
  useEffect(() => {}, [])

  const switchTranslate = language => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
    setCurrent(language)
  }

  return (
    <ContainerNav>
      {current == 'en_US' && (
        <NavTranslation onClick={() => switchTranslate('fr_FR')}>
          FR
        </NavTranslation>
      )}
      {current == 'fr_FR' && (
        <NavTranslation onClick={() => switchTranslate('en_US')}>
          EN
        </NavTranslation>
      )}
    </ContainerNav>
  )
}

export default NavTranslate
