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
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const Home = () => {
  const searchResults = useSelector(getSearchResults)
  const [searchString, setSearchString] = useState('')
  const filteredResult = useSelector((state: RootState) =>
    searchResults
      .filter(d => d.name.toLowerCase().includes(searchString.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
  )

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            AddOns
          </Typography>
          <SearchField
            text={searchString}
            onChange={text => setSearchString(text)}
          />
        </Toolbar>
      </AppBar>
      <div>
        <List>
          {filteredResult.map((r, index) => (
            <ListItem key={index}>
              <img
                style={{
                  height: 80,
                  width: 80,
                  margin: 10,
                  padding: 5,
                  borderColor: '#999999',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 5
                }}
                src={r.image}
              />
              <div style={{ flexDirection: 'column' }}>
                <div style={{ fontSize: 20 }}>{r.name}</div>
                <div style={{ color: '#999999' }}>{r.description}</div>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}
