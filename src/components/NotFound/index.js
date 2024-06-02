import {MainContainerStyled} from '../StyledComponent'
import './index.css'

const NotFound = () => (
  <MainContainerStyled>
    <img
      className="not-found-img"
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <h1 className="not-found-title">Page Not Found</h1>
    <p className="not-found-desc">
      We are sorry, the page you requested could not be found.
    </p>
  </MainContainerStyled>
)

export default NotFound
