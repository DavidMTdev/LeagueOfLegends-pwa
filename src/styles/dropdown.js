import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: relative;
  z-index: -1;
  border: 2px solid;
  border-color: #c8aa6e;
`

export const DropDownHeader = styled.div`
  min-width: 150px;
  padding: 5px 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  background: #ffffff;
`

export const DropDownListContainer = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  margin-top: 10px;
  height: auto;
`

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;

  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`
