import React, { Component } from 'react'

class RecorderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {author: '', text: ''}
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const author = this.state.author.trim()
    const text = this.state.text.trim()
    if (!text || !author) {
      return
    }
    this.props.onRecorderSubmit({author: author, text: text})
    this.setState({author: '', text: ''})
  }

  handleUpWork(e) {
    this.props.actions.up_work()
  }

  render() {
    return (
      <form className="recorderForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Post" />
        <input type="button" value={`${this.props.data.at_work ? '退勤' : '出勤'}`} onClick={this.handleUpWork.bind(this)} />
      </form>
    )
  }
}

export default RecorderForm
