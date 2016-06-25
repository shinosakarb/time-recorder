import { handleActions } from 'redux-actions'

const initialState = {
  members: [
    {id: 1, name: "高垣 楓", checkin_time: "2016/06/25 09:00", checkout_time: "2016/06/25 15:00"},
    {id: 2, name: "速水 奏", checkin_time: "2016/06/25 09:20", checkout_time: "2016/06/25 17:00"}
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
