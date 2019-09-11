import * as React from 'react'
import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem
} from '@material-ui/core'
import { SearchField } from './SearchField'
import { getSearchResults } from '../store/searchReducer'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import MenuIcon from '@material-ui/icons/Menu'
import { setShowDrawer } from '../store/navigationReducer'

export const Search = () => {
  const searchResults = useSelector(getSearchResults)
  const [searchString, setSearchString] = useState('')
  const filteredResult = useSelector((state: RootState) =>
    searchResults
      .filter(d => d.name.toLowerCase().includes(searchString.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
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
            <ListItem key={index}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    height: '80px',
                    flex: '0 0 80px',

                    margin: 10,
                    padding: 5,
                    borderColor: '#999999',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderRadius: 5
                  }}
                >
                  {r.addonImage ? (
                    <img src={r.addonImage} style={{ width: '100%' }} />
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 48
                      }}
                    >
                      X
                    </div>
                  )}
                </div>

                <div style={{ flexDirection: 'column' }}>
                  <div
                    style={{ fontSize: 20 }}
                    dangerouslySetInnerHTML={{ __html: r.name }}
                  ></div>
                  <div
                    style={{ color: '#999999' }}
                    dangerouslySetInnerHTML={{ __html: r.summary }}
                  ></div>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}
