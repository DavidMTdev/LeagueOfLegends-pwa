import {
  ADD_ITEM,
  REMOVE_ITEM,
  NEW_BUILD,
  SELECTED_BUILD
} from '../config/type'

export const newBuild = name => ({
  type: NEW_BUILD,
  payload: {
    name: name,
    items: []
  }
})

export const selectedBuild = index => ({
  type: SELECTED_BUILD,
  payload: index
})

export const addItem = (item, selectedBuild, builds, tokenBuilds) => {
  builds[selectedBuild].items = [...builds[selectedBuild].items, item]
  localStorage.setItem(tokenBuilds, JSON.stringify(builds))

  return {
    type: ADD_ITEM,
    payload: {
      builds,
      selectedBuild: null
    }
  }
}
