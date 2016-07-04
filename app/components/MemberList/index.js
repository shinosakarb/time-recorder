import React, { Component } from 'react'
import Member from '../../components/Member'

class MemberList extends Component {
  render() {
    const memberNodes = this.props.data.members.map((member) => {
      return (
        <Member name={member.name}
          checkin_time={member.checkin_time}
          checkout_time={member.checkout_time}
          at_work={member.at_work}
          actions={this.props.actions}
          id={member.id}
          key={member.id}>
        </Member>
      )
    })
    return (
      <div className="memberList">
        {memberNodes}
      </div>
    )
  }
}

export default MemberList
