import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoMoon} from 'react-icons/io5'
import {FiSun} from 'react-icons/fi'
import AppContext from '../../Context/AppContext'
import {
  HeaderContainer,
  HeaderLogo,
  ProfileLogoutContainer,
  HeaderThemeButton,
  HeaderImage,
  LogoutButton,
} from './styles'
import './index.css'

const TopHeader = props => {
  const {history} = props
  const onLogoutButton = () => {
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isThemeDark, toggleTheme} = value
        const onToggleTheme = () => {
          toggleTheme()
        }

        const popThemeContainer = isThemeDark
          ? 'popup-container popup-dark-theme-container'
          : 'popup-container'

        const popupThemeText = isThemeDark
          ? 'popup-text popup-dark-theme-text'
          : 'popup-text'

        const websiteLogo = isThemeDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderContainer isThemeDark={isThemeDark}>
            <Link to="/" className="website-logo-link-item">
              <HeaderLogo src={websiteLogo} alt="website logo" />
            </Link>

            <ProfileLogoutContainer>
              <HeaderThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
                className="theme-icon"
              >
                {isThemeDark ? <FiSun className="light-icon" /> : <IoMoon />}
              </HeaderThemeButton>
              <HeaderImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <div>
                <Popup
                  modal
                  trigger={
                    <LogoutButton isThemeDark={isThemeDark} type="button">
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <div className={popThemeContainer}>
                      <p className={popupThemeText}>
                        Are you sure, you want to logout
                      </p>
                      <div className="popup-buttons-container">
                        <button
                          className="cancel-button"
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          className="confirm-button"
                          onClick={onLogoutButton}
                          type="button"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </ProfileLogoutContainer>
          </HeaderContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(TopHeader)
