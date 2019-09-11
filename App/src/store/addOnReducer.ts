import { RootState } from '.'

export type AddOnAction =
  | { type: 'addAddOn'; input: AddOn }
  | { type: 'removeAddOn'; input: string }
export type AddOnState = { addOns: AddOn[] }

export interface AddOn {
  name: string
}

export function addOn(state: AddOnState = { addOns: [] }, action: AddOnAction) {
  switch (action.type) {
    case 'addAddOn':
      return { ...state, addOns: state.addOns.concat(action.input) }
    default:
      return state
  }
}

export const getAddOns = (state: RootState) => {
  return state.addOn.addOns
}
