import { handleActions } from 'redux-actions'

const initialState = []

const reducerMap = {
  show_members(state, action) {
    return action.payload
  },
  add_recorder(state, action) {
    return state.concat([action.payload])
  }
}

export default handleActions(reducerMap, initialState)
