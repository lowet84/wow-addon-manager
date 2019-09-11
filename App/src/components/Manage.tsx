import * as React from 'react'
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { setShowDrawer } from '../store/navigationReducer'
import { useDispatch } from 'react-redux'

export const Manage = () => {
  const dispatch = useDispatch()
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
      <div>Manage</div>
    </div>
  )
}
