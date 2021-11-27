import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

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
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value, index) => {
    setSelectedOption(value)
    setIsOpen(false)
    dispatch(actions.build.selectedBuild(index))
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption?.name || 'Add Item'}
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
