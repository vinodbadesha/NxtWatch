import {
  NotFoundContainer,
  NotFoundImage,
  PageNotFoundText,
  NotFoundText,
} from './styles'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <PageNotFoundText>Page Not Found</PageNotFoundText>
    <NotFoundText>
      we are sorry, the page you requested could not be found.
    </NotFoundText>
  </NotFoundContainer>
)

export default NotFound
