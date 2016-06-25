import React, { Component } from 'react'
import TimeRecorder from '../../components/TimeRecorder'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import style from './style.css'

class App extends Component {
  render() {
    const { data, actions } = this.props
    return (
      <div>
        <TimeRecorder
          data={data}
          actions={actions}
          pollInterval={2000}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
