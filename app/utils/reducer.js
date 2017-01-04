import { List, Map } from 'immutable'
import { combineReducer } from 'redux'

function setState(state, newState) {
  return state.merge(newState)
}



