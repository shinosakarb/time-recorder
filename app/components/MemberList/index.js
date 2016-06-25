import React, { Component } from 'react'
import Member from '../../components/Member'

class MemberList extends Component {
  render() {
    const memberNodes = this.props.data.members.map((member) => {
      return (
        <Member name={member.name} key={member.id}>
          {member.checkin_time}
          {member.checkout_time}
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
