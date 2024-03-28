// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelect: false}

  onClickEmoji = () => this.setState({isFeedbackSelect: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emojis-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedback">
          {emojis.map(emoji => (
            <li className="each-emoji" key={emoji.id}>
              <button
                className="emoji-button"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
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

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="love-emoji-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji-img" />
        <h1 className="heading">Thank You!</h1>
        <p className="discription">
          We Will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelect} = this.state

    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackSelect
            ? this.renderThankyouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
