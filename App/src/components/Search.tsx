import * as React from 'react'
import { useState, Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  Divider,
  ListItemSecondaryAction
} from '@material-ui/core'
import { SearchField } from './SearchField'
import { getSearchResults } from '../store/searchReducer'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import MenuIcon from '@material-ui/icons/Menu'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import { setShowDrawer } from '../store/navigationReducer'
import { getIsAddOnInstalled, addAddOn } from '../store/addOnReducer'

export const Search = () => {
  const searchResults = useSelector(getSearchResults)
  const isAddOnInstalled = useSelector(getIsAddOnInstalled)
  const [searchString, setSearchString] = useState('')
  const filteredResult = useSelector((state: RootState) =>
    searchResults
      .filter(d => d.name.toLowerCase().includes(searchString.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 20)
  )
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
            Search
          </Typography>
          <SearchField
            text={searchString}
            onChange={text => setSearchString(text)}
          />
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: '4rem' }}>
        <List>
          {filteredResult.map((r, index) => (
            <Fragment key={index}>
              <ListItem>
                <Avatar
                  alt="X"
                  src={r.addonImage}
                  style={{ height: 80, width: 80, marginRight: 30 }}
                />
                <ListItemText primary={r.name} secondary={r.summary} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    style={{ marginLeft: 30 }}
                    onClick={() => {
                      if (!isAddOnInstalled(r.objectID)) {
                        dispatch(addAddOn(r.objectID))
                      }
                    }}
                  >
                    {isAddOnInstalled(r.objectID) ? (
                      <DoneOutlineIcon />
                    ) : (
                      <CloudDownloadIcon />
                    )}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      </div>
    </div>
  )
}
