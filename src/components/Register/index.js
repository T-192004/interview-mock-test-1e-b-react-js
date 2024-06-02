import {Component} from 'react'
import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]
class Register extends Component {
  state = {errorPresent: false, topicName: topicsList[0].id, userName: ''}

  updateTopicName = event => {
    this.setState({topicName: event.target.value})
  }

  updateUserName = event => {
    this.setState({userName: event.target.value})
  }

  successRegister = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userName} = this.state
    if (userName === '') {
      this.setState({errorPresent: true})
    } else {
      this.successRegister()
    }
  }

  render() {
    const {errorPresent, topicName, userName} = this.state
    console.log(topicName)
    return (
      <>
        <Header />
        <div className="register-container">
          <img
            className="register-img"
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <form className="register-form" onSubmit={this.onSubmitForm}>
            <h1 className="form-heading">Let us join</h1>
            <div className="input-container">
              <label className="input-label" htmlFor="username">
                NAME
              </label>
              <input
                className="input-box"
                id="username"
                type="text"
                value={userName}
                onChange={this.updateUserName}
              />
            </div>
            <div className="input-container">
              <label className="input-label" htmlFor="username">
                TOPICS
              </label>
              <select
                value={topicName}
                className="input-box"
                onChange={this.updateTopicName}
              >
                {topicsList.map(topic => (
                  <option key={topic.id} value={topic.id}>
                    {topic.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="register-btn" type="submit">
              Register Now
            </button>
            {errorPresent && (
              <p className="error-msg">Please enter your name</p>
            )}
          </form>
        </div>
      </>
    )
  }
}

export default Register
