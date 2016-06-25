import React, { Component } from 'react'
import MemberList from '../../components/MemberList'
import RecorderForm from '../../components/RecorderForm'
import style from './style'

class TimeRecorder extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  loadMembersFromServer() {
    this.props.actions.showMembers(data)
  }

  handleRecorderSubmit(time) {
    this.props.actions.addRecorder(time)
  }

  componentDidMount() {
    this.loadMembersFromServer()
  }

  timeFormat() {
    return Date.now()
  }

  render() {
    return (
      <div className={style.normal}>
        <h1>Time Recorder</h1>
        {this.timeFormat()}
        <MemberList data={this.props.data} />
        <RecorderForm onRecorderSubmit={this.handleRecorderSubmit.bind(this)} />
      </div>
    )
  }
}

export default TimeRecorder
