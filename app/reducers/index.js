import { handleActions } from 'redux-actions'

const initialState = {
  members: [
    {id: 1, name: "高垣 楓", checkin_time: "2016/06/25 09:00", checkout_time: "2016/06/25 15:00", at_work: false},
    {id: 2, name: "速水 奏", checkin_time: "2016/06/25 09:20", checkout_time: "2016/06/25 17:00", at_work: false}
  ]
}

const reducerMap = {
  show_members(state, action) {
    return action.members.payload
  },
  add_recorder(state, action) {
    return state.concat([action.payload])
  },
  up_work(state, action) {
    let target_member = state.members.find((element, index, array) => {return element.id === action.payload})
    let today = new Date()
    let now   = `${today.getFullYear()}/${('0' + (today.getMonth() + 1)).slice(-2)}/${('0' + today.getDate()).slice(-2)} ${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`
    target_member.checkin_time  = (!target_member.at_work ? now : target_member.checkin_time)
    target_member.checkout_time = (!target_member.at_work ? ""  : now)
    target_member.at_work       = !target_member.at_work

    return {
      ...state,
      members: state.members.map((element) => {return (element.id === target_member.id ? target_member : element)})
    }
  }
}

export default handleActions(reducerMap, initialState)
