// @ts-ignore-next-line
import colorGradient from 'javascript-color-gradient'
import { createTheme } from '@grafana/data'

const theme = createTheme()

export function getGrafanaHexColorByName(name: string) {
  const colors = theme.visualization.hues
  let finalColor = ''
  colors.forEach(color => {
    color.shades.forEach(shade => {
      if (shade.name === name) {
        finalColor = shade.color
      }
    })
  })
  return finalColor
}

export function checkColors(colorValue: string) {
  if (colorValue.includes('#')) {
    return colorValue
  } else {
    return getGrafanaHexColorByName(colorValue)
  }
}

export function getGradients(colorFrom: string, colorTo: string) {
  const colorHexFrom = checkColors(colorFrom)
  const colorHexTo = checkColors(colorTo)
  return generateGradients(colorHexFrom, colorHexTo)
}

export function valueToHex(color: number) {
  const hex = color.toString(16)
  return hex
}

export function rgbToHex(rgbArray: number[]) {
  return valueToHex(rgbArray[0]) + valueToHex(rgbArray[1]) + valueToHex(rgbArray[2])
}

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}

export function generateGradients(colorFrom: string, colorTo: string, midpoint = 10) {
  return new colorGradient().setColorGradient(colorFrom, colorTo).setMidpoint(midpoint).getColors()
}
