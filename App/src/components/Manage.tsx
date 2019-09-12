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
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { setShowDrawer } from '../store/navigationReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getAddOns, removeAddOn } from '../store/addOnReducer'
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
          var addOn = addOnById(r.id)
          return (
            <Fragment key={index}>
              <ListItem>
                {/* <Avatar
                alt="X"
                src={r.image}
                style={{ height: 80, width: 80, marginRight: 30 }}
              /> */}
                <ListItemText primary={addOn.name} />
                <ListItemSecondaryAction style={{ marginLeft: 30 }}>
                  <IconButton edge="end" aria-label="comments">
                    {r.lastUpdate < addOn.timeUpdated._seconds ? (
                      <CloudUploadIcon color="action"/>
                    ) : (
                      <DoneOutlineIcon color="primary"/>
                    )}
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => dispatch(removeAddOn(r.id))}
                  >
                    <DeleteForeverIcon color="error" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          )
        })}
      </List>
    </div>
  )
}
