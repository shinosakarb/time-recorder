import React, { Component } from 'react'
import Member from '../../components/Member'

class MemberList extends Component {
  render() {
    const memberNodes = this.props.data.members.map((member) => {
      return (
        <Member author={member.author} key={member.id}>
          {member.text}
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
