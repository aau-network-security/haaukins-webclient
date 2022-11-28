import { createStore, combineReducers } from 'redux'
import challengesReducer from './challenges/challengeReducer'

const rootReducer = combineReducers(challengesReducer)

const store = createStore(rootReducer)