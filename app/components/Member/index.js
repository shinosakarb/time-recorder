import React, { Component } from 'react'
import Remarkable from 'remarkable'

class Member extends Component {
  rawMarkup() {
    const md = new Remarkable()
    const rawMarkup = md.render(this.props.children.toString())
    return { __html: rawMarkup }
  }

  render() {
    return (
      <div className="member">
        <span className="memberName">
          {this.props.name}
        </span>
        <span className="memberCheckinTime">
          {this.props.checkin_time}
        </span>
        <span className="memberCheckoutTime">
          {this.props.checkout_time}
        </span>
      </div>
    )
  }
}

export default Member
