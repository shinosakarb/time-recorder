import React, { Component } from 'react'
import Remarkable from 'remarkable'
import style from './style'

class Member extends Component {
  rawMarkup() {
    const md = new Remarkable()
    const rawMarkup = md.render(this.props.children.toString())
    return { __html: rawMarkup }
  }

  handleUpWork(e) {
    this.props.actions.up_work(this.props.id)
  }

  render() {
    return (
      <div className={style.member}>
        <span className="memberName">
          {this.props.name}
        </span>
        <span className="memberCheckinTime">
          {this.props.checkin_time}
        </span>
        <span className="memberCheckoutTime">
          {this.props.checkout_time}
        </span>
        <input type="button" value={`${this.props.at_work ? '退勤' : '出勤'}`} onClick={this.handleUpWork.bind(this)} />
      </div>
    )
  }
}

export default Member
