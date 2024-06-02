import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const {isRegistered} = props
  const registerDescp = isRegistered === undefined
  const getUnRegisteredView = () => (
    <>
      <h1 className="main-heaing">Welcome to Meetup</h1>
      <p className="desc">Please register for the topic</p>
      <Link to="/register" className="link-class">
        <button className="register-btn" type="button">
          Register
        </button>
      </Link>
    </>
  )

  const getRegisteredView = () => {
    const {name, topic} = props
    return (
      <>
        <h1 className="name">Hello {name}</h1>
        <p className="main-heaing">Welocome {topic}</p>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="home-container">
        {registerDescp ? getUnRegisteredView() : getRegisteredView()}
        <img
          className="meeting-img"
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
    </>
  )
}

export default Home
