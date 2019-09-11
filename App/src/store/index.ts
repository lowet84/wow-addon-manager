import { createStore, Action, combineReducers } from 'redux'
import { navigation } from './navigationReducer'
import { search } from './searchReducer'
import { addOn } from './addOnReducer'

const rootReducer = combineReducers({ navigation, search, addOn })

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof store.getState>
