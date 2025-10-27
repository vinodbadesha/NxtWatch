import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import AppContext from '../../Context/AppContext'
import {
  SideBarContainer,
  NavButtonsList,
  NavButtonItem,
  NavButtonText,
  ContactText,
  ContactIconsList,
  ContactItem,
  ContactAppLogo,
  EnjoyText,
  ContactContainer,
} from './styles'
import './index.css'

const navButtonItems = [
  {
    id: 'HOME',
    url: '/',
    displayText: 'Home',
    icon: <IoMdHome />,
  },
  {id: 'TRENDING', url: '/trending', displayText: 'Trending', icon: <FaFire />},
  {
    id: 'GAMING',
    url: '/gaming',
    displayText: 'Gaming',
    icon: <SiYoutubegaming />,
  },
  {
    id: 'SAVED_VIDEOS',
    url: '/saved-videos',
    displayText: 'Saved Videos',
    icon: <RiMenuAddFill />,
  },
]

class SideBar extends Component {
  state = {activeNavButton: navButtonItems.home, isActive: false}

  onClickNavItem = id => {
    this.setState({activeNavButton: id, isActive: true})
  }

  render() {
    const {isActive} = this.state
    const activeClassName = isActive ? 'active-nav ' : ''
    return (
      <AppContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const navIconsClassname = isThemeDark
            ? 'dark-icon-color'
            : 'light-icon-color'

          return (
            <SideBarContainer isThemeDark={isThemeDark}>
              <NavButtonsList>
                {navButtonItems.map(eachButton => (
                  <NavButtonItem
                    key={eachButton.id}
                    className={activeClassName}
                  >
                    <Link to={eachButton.url} className="sidebar-link-item">
                      <i className={navIconsClassname}>{eachButton.icon}</i>
                      <NavButtonText
                        isThemeDark={isThemeDark}
                        onClick={() => {
                          this.onClickNavItem(eachButton.id)
                        }}
                      >
                        {eachButton.displayText}
                      </NavButtonText>
                    </Link>
                  </NavButtonItem>
                ))}
              </NavButtonsList>
              <ContactContainer>
                <ContactText isThemeDark={isThemeDark}>CONTACT US</ContactText>
                <ContactIconsList>
                  <ContactItem>
                    <ContactAppLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                  </ContactItem>
                  <ContactItem>
                    <ContactAppLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                  </ContactItem>
                  <ContactItem>
                    <ContactAppLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactItem>
                </ContactIconsList>
                <EnjoyText isThemeDark={isThemeDark}>
                  Enjoy! Now to see your channels and recommendations!
                </EnjoyText>
              </ContactContainer>
            </SideBarContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default SideBar
