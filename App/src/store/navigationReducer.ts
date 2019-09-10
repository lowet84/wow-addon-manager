import { RootState } from '.'

export type NavigationAction = { type: 'setRoute'; input: Route }
export type NavigationState = { route: Route }

export enum Route {
  Home
}

export function navigation(
  state: NavigationState = { route: Route.Home },
  action: NavigationAction
) {
  switch (action.type) {
    case 'setRoute':
      return { ...state, route: action.input }
    default:
      return state
  }
}

export const getRoute = (state: RootState) => {
  return state.navigation.route
}
