import * as React from 'react'
import dom from 'react-dom'
import { useSelector, Provider } from 'react-redux'
import { Home } from './components/Home'
import { getRoute, Route } from './store/navigationReducer'
import store from './store'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { loadSearchResults } from './store/searchReducer'

export const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const App = () => {
  loadSearchResults()
  const route = useSelector(getRoute)
  switch (route) {
    case Route.Home:
      return <Home />
    default:
      return <div>Error</div>
  }
}

dom.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
