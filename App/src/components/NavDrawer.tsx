import * as React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  getShowDrawer,
  setShowDrawer,
  setRoute,
  Route
} from '../store/navigationReducer'
import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import ViewListIcon from '@material-ui/icons/ViewList'

export const NavDrawer = () => {
  const showDrawer = useSelector(getShowDrawer)
  const dispatch = useDispatch()

  const goto = (route: Route) => {
    dispatch(setShowDrawer(false))
    dispatch(setRoute(route))
  }

  return (
    <Drawer open={showDrawer} onClose={() => dispatch(setShowDrawer(false))}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        style={{ width: 250, marginTop: 80 }}
      >
        <ListItem button onClick={() => goto(Route.Search)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button onClick={() => goto(Route.Manage)}>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="Manage" />
        </ListItem>
      </List>
    </Drawer>
  )
}
