import { RootState } from '.'
import { readFileSync, writeFileSync, existsSync } from 'fs'

export type AddOnAction =
  | { type: 'addAddOn'; input: AddOn }
  | { type: 'removeAddOn'; input: string }
export type AddOnState = { addOns: AddOn[] }

const storedFileName = 'addons.json'

export interface AddOn {
  id: string
  lastUpdate: number
}

const getInitialAddons: () => AddOn[] = () => {
  if (existsSync(storedFileName)) {
    var items = JSON.parse(readFileSync(storedFileName, 'utf8'))
    console.log(items)
    return items
  }
  return []
}

export function addAddOn(input: AddOn): AddOnAction {
  return { type: 'addAddOn', input }
}

export function removeAddOn(input: string): AddOnAction {
  return { type: 'removeAddOn', input }
}

export function addOn(
  state: AddOnState = { addOns: getInitialAddons() },
  action: AddOnAction
) {
  switch (action.type) {
    case 'addAddOn':
      var newState = {
        ...state,
        addOns: state.addOns.concat(action.input)
      }
      writeFileSync(storedFileName, JSON.stringify(newState.addOns), 'utf8')
      return newState
    case 'removeAddOn':
      var newState = {
        ...state,
        addOns: state.addOns.filter(d => d.id != action.input)
      }
      writeFileSync(storedFileName, JSON.stringify(newState.addOns), 'utf8')
      return newState

    default:
      return state
  }
}

export const getAddOns = (state: RootState) => {
  return state.addOn.addOns
}

export const getIsAddOnInstalled = (state: RootState) => {
  return (id: string) => {
    return !!state.addOn.addOns.find(d => d.id == id)
  }
}
