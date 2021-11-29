import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import actions from '../actions'

import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem
} from '../styles/dropdown'

const Dropdown = props => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value, index) => {
    setSelectedOption(value)
    setIsOpen(false)
    if (props.obj == 'build') {
      dispatch(actions.build.selectedBuild(index))
    }

    if (props.obj == 'champions') {
      dispatch(actions.champions.fetchChampions(value?.name, i18n.language))
    }
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption?.name || props.headerOption}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {props.list.map((item, index) => (
              <ListItem
                onClick={() => onOptionClicked(item, index)}
                key={index}
              >
                {item?.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default Dropdown
