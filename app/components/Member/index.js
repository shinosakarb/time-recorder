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
        <h2 className="memberName">
          {this.props.name}
        </h2>
        <h2 className="memberCheckinTime">
          {this.props.checkin_time}
        </h2>
        <h2 className="memberCheckoutTime">
          {this.props.checkout_time}
        </h2>
      </div>
    )
  }
}

export default Member
