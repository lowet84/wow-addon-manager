import * as React from 'react'
import { Fragment } from 'react'
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { setShowDrawer } from '../store/navigationReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getAddOns } from '../store/addOnReducer'
import { getAddOnById } from '../store/searchReducer'

export const Manage = () => {
  const dispatch = useDispatch()
  const addOns = useSelector(getAddOns)
  const addOnById = useSelector(getAddOnById)

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            style={{ marginRight: 20 }}
            onClick={() => dispatch(setShowDrawer(true))}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Manage
          </Typography>
        </Toolbar>
      </AppBar>
      <List style={{ marginTop: '4rem' }}>
        {addOns.map((r, index) => {
          var addOn = addOnById(r)
          return (
            <Fragment key={index}>
              <ListItem>
                {/* <Avatar
                alt="X"
                src={r.image}
                style={{ height: 80, width: 80, marginRight: 30 }}
              /> */}
                <ListItemText primary={addOn.name} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          )
        })}
      </List>
    </div>
  )
}
