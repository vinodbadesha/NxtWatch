import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import TopHeader from '../TopHeader'
import SideBar from '../SideBar'
import AppContext from '../../Context/AppContext'
import {
  GamingContainer,
  GamingTitleContainer,
  GamingIconContainer,
  GamingTitle,
  GamingVideosList,
  MainGamingContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  GamingVideoItem,
  GamingVideoThumbnail,
  GamingVideoDetailsContainer,
  GamingVideoTitle,
  GamingTimeViewItem,
} from './styles'
import './index.css'

const apiOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {responseStatus: apiOptions.initial, gamingList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(gamingUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(gaming => ({
        id: gaming.id,
        title: gaming.title,
        thumbnailUrl: gaming.thumbnail_url,
        viewCount: gaming.view_count,
      }))
      this.setState({
        gamingList: updatedData,
        responseStatus: apiOptions.success,
      })
    } else {
      this.setState({responseStatus: apiOptions.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingList} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <AppContext.Consumer>
        {value => {
          const {isThemeDark} = value

          return (
            <>
              <MainGamingContainer>
                <GamingTitleContainer isThemeDark={isThemeDark}>
                  <GamingIconContainer>
                    <SiYoutubegaming className="trending-icon" />
                  </GamingIconContainer>
                  <GamingTitle isThemeDark={isThemeDark}>Gaming</GamingTitle>
                </GamingTitleContainer>

                <GamingVideosList isThemeDark={isThemeDark}>
                  {gamingList.map(eachItem => (
                    <GamingVideoItem key={eachItem.id}>
                      <Link
                        to={`/videos/${eachItem.id}`}
                        className="gaming-link-item"
                      >
                        <GamingVideoThumbnail
                          src={eachItem.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <GamingVideoDetailsContainer>
                          <GamingVideoTitle isThemeDark={isThemeDark}>
                            {eachItem.title}
                          </GamingVideoTitle>
                          <GamingTimeViewItem>
                            {eachItem.viewCount} Watching Worldwide
                          </GamingTimeViewItem>
                        </GamingVideoDetailsContainer>
                      </Link>
                    </GamingVideoItem>
                  ))}
                </GamingVideosList>
              </MainGamingContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <div className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isThemeDark} = value
        return (
          <FailureContainer>
            <FailureImage
              alt="failure view"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            />
            <FailureHeading isThemeDark={isThemeDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText isThemeDark={isThemeDark}>
              We are having some trouble completing your request. <br />
              Please try again.
            </FailureText>
            <FailureRetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderGamingView = () => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case apiOptions.inProgress:
        return this.renderLoaderView()
      case apiOptions.success:
        return this.renderSuccessView()
      case apiOptions.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <TopHeader />
        <GamingContainer data-testid="gaming">
          <SideBar />
          <>{this.renderGamingView()}</>
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
