import { createStore, Action, combineReducers } from 'redux'
import { navigation } from './navigationReducer'
import { search } from './searchReducer'

const rootReducer = combineReducers({ navigation, search })

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof store.getState>
