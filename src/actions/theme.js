import { SWITCH_THEME } from '../config/type'

export const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: theme
})
