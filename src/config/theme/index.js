import { createTheme as createMuiTheme } from '@mui/material/styles'

import paletteBase from './palette-base'
import paletteDark from './palette-dark'
import paletteLight from './palette-light'
import shadows from './shadows'
import typography from './typography'

// default
const createTheme = (darkMode) => {
  const palette = darkMode ? { ...paletteBase, ...paletteDark } : { ...paletteBase, ...paletteLight }
  return createMuiTheme({
    palette,
    typography,
    shadows,
  })
}

const theme = createTheme(false)

export { paletteBase, paletteLight, paletteDark, typography, shadows }
export default theme
