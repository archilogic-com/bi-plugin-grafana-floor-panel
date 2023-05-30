import { PanelPlugin } from '@grafana/data'
import { FloorOptions } from './types'
import FloorPanel from './components/FloorPanel'

export const plugin = new PanelPlugin<FloorOptions>(FloorPanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'id',
      name: 'Floor plan ID',
      description: 'Please provide the floor plan ID from your Archilogic account',
      defaultValue: ''
    })
    .addTextInput({
      path: 'token',
      name: 'Publishable Token',
      description: 'You can find or create a token in the settings page of your Archilogic account',
      defaultValue: ''
    })
    .addTextInput({
      path: 'nodeId',
      name: 'Node id',
      description: 'Space or Asset id',
      defaultValue: ''
    })
    .addColorPicker({
      path: 'colorFrom',
      name: 'Color From',
      defaultValue: '#fff000',
      settings: {
        mode: 'custom'
      }
    })
    .addColorPicker({
      path: 'colorTo',
      name: 'Color To',
      defaultValue: '#000fff'
    })
})
