import { createStore, Action, combineReducers } from 'redux'
import { navigation } from './navigationReducer'

const rootReducer = combineReducers({ navigation })

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof store.getState>
