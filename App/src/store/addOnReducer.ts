import { RootState } from '.'
import { readFileSync, writeFileSync, existsSync } from 'fs'

export type AddOnAction =
  | { type: 'addAddOn'; input: String }
  | { type: 'removeAddOn'; input: string }
export type AddOnState = { addOns: string[] }

const storedFileName = 'addons.json'

const getInitialAddons: () => string[] = () => {
  if (existsSync(storedFileName)) {
    var items = JSON.parse(readFileSync(storedFileName, 'utf8'))
    console.log(items)
    return items
  }
  return []
}

export function addAddOn(input: string): AddOnAction {
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
        addOns: state.addOns.concat(action.input.toString())
      }
      writeFileSync(storedFileName, JSON.stringify(newState.addOns), 'utf8')
      return newState
    case 'removeAddOn':
      var existing = state.addOns.find(d => d == action.input)
      var newState = {
        ...state,
        addOns: state.addOns.splice(state.addOns.indexOf(existing), 1)
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
    return state.addOn.addOns.includes(id)
  }
}
