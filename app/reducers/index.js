import { handleActions } from 'redux-actions'

const initialState = {
  members: [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
  ]
}

const reducerMap = {
  show_members(state, action) {
    return action.members.payload
  },
  add_recorder(state, action) {
    return state.concat([action.payload])
  }
}

export default handleActions(reducerMap, initialState)
