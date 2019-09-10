import * as React from 'react'
import dom from 'react-dom'
import { useSelector, Provider } from 'react-redux'
import { Home } from './components/Home'
import { getRoute, Route } from './store/navigationReducer'
import store from './store'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const App = () => {
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
