import { handleActions } from 'redux-actions'

const initialState = {
  members: [
    {id: 1, name: "高垣 楓", checkin_time: "2016/06/25 09:00", checkout_time: "2016/06/25 15:00", at_work: false},
    {id: 2, name: "速水 奏", checkin_time: "2016/06/25 09:20", checkout_time: "2016/06/25 17:00", at_work: false}
  ]
}

const memberRecuer = {
  up_work(state, action) {
    if (state.id !== action.payload) {
      return state
    }

    let today = new Date()
    let now   = `${today.getFullYear()}/${('0' + (today.getMonth() + 1)).slice(-2)}/${('0' + today.getDate()).slice(-2)} ${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`

    return {
      ...state,
      checkin_time:   (!state.at_work ? now : state.checkin_time),
      checkout_time:  (!state.at_work ? ""  : now),
      at_work:        !state.at_work
    }
  }
}

const reducerMap = {
  show_members(state, action) {
    return action.members.payload
  },
  add_recorder(state, action) {
    return state.concat([action.payload])
  },
  up_work(state, action) {
    return {
      ...state,
      members: state.members.map(t => memberRecuer.up_work(t, action))
    }
  }
}

export default handleActions(reducerMap, initialState)
