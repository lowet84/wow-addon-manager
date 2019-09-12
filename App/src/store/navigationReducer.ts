import { RootState } from '.'

export type NavigationAction =
  | { type: 'setRoute'; input: Route }
  | { type: 'setShowDrawer'; input: boolean }
export type NavigationState = { route: Route; showDrawer: boolean }

export enum Route {
  Search,
  Manage
}

export function setShowDrawer(input: boolean): NavigationAction {
  return { type: 'setShowDrawer', input }
}

export function setRoute(input: Route): NavigationAction {
  return { type: 'setRoute', input }
}

export function navigation(
  state: NavigationState = { route: Route.Search, showDrawer: false },
  action: NavigationAction
) {
  switch (action.type) {
    case 'setRoute':
      return { ...state, route: action.input }
    case 'setShowDrawer':
      return { ...state, showDrawer: action.input }
    default:
      return state
  }
}

export const getRoute = (state: RootState) => {
  return state.navigation.route
}

export const getShowDrawer = (state: RootState) => {
  return state.navigation.showDrawer
}
