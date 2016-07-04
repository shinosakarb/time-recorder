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
//    this.props.actions.showMembers(data)
  }

  handleRecorderSubmit(time) {
    this.props.actions.addRecorder(time)
  }

  componentDidMount() {
    this.loadMembersFromServer()
  }

  timeFormat() {
    const d = new Date()
    const ds = d.toLocaleDateString("ja-JP")
    const h = d.getHours()
    const m = d.getMinutes()
    return ds + " " + h + ":" + m 
  }

  render() {
    return (
      <div className={style.normal}>
        <h1>Time Recorder</h1>
        {this.timeFormat()}
        <MemberList data={this.props.data} actions={this.props.actions} />
        <RecorderForm
          onRecorderSubmit={this.handleRecorderSubmit.bind(this)}
          actions={this.props.actions}
          data={this.props.data}
        />
      </div>
    )
  }
}

export default TimeRecorder
