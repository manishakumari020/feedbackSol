import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isSelectedEmoji: false}

  onclickButton = () => {
    this.setState({isSelectedEmoji: true})
  }

  renderedFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-app-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onclickButton}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-image"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderedThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thanks-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="header">Thank You</h1>
        <p className="feedback">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isSelectedEmoji} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          {isSelectedEmoji
            ? this.renderedThankYouScreen()
            : this.renderedFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
