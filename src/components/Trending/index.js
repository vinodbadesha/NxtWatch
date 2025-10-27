import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import TopHeader from '../TopHeader'
import SideBar from '../SideBar'
import AppContext from '../../Context/AppContext'
import {
  TrendingContainer,
  TitleContainer,
  TrendingIconContainer,
  TrendingTitle,
  TrendingVideosList,
  MainTrendingContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  TrendingVideoItem,
  TrendingVideoThumbnail,
  VideoDetailsContainer,
  VideoTitle,
  ChannelName,
  VideoViewsContainer,
  TimeViewItem,
} from './styles'
import './index.css'

const apiOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {responseStatus: apiOptions.initial, trendingList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(trendingUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingList: updatedData,
        responseStatus: apiOptions.success,
      })
    } else {
      this.setState({responseStatus: apiOptions.failure})
    }
  }

  renderTrendingVideos = () => {
    const {trendingList} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isThemeDark} = value

          return (
            <>
              <MainTrendingContainer>
                <TitleContainer isThemeDark={isThemeDark}>
                  <TrendingIconContainer>
                    <FaFire className="trending-icon" />
                  </TrendingIconContainer>
                  <TrendingTitle isThemeDark={isThemeDark}>
                    Trending
                  </TrendingTitle>
                </TitleContainer>

                <TrendingVideosList isThemeDark={isThemeDark}>
                  {trendingList.map(eachItem => (
                    <TrendingVideoItem key={eachItem.id}>
                      <Link
                        to={`/videos/${eachItem.id}`}
                        className="trending-link-item"
                      >
                        <TrendingVideoThumbnail
                          alt="video thumbnail"
                          src={eachItem.thumbnailUrl}
                        />
                        <VideoDetailsContainer>
                          <VideoTitle isThemeDark={isThemeDark}>
                            {eachItem.title}
                          </VideoTitle>
                          <ChannelName>{eachItem.channel.name}</ChannelName>
                          <VideoViewsContainer>
                            <TimeViewItem>
                              {eachItem.viewCount} • {eachItem.publishedAt}
                            </TimeViewItem>
                          </VideoViewsContainer>
                        </VideoDetailsContainer>
                      </Link>
                    </TrendingVideoItem>
                  ))}
                </TrendingVideosList>
              </MainTrendingContainer>
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

  renderTrendingView = () => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case apiOptions.inProgress:
        return this.renderLoaderView()
      case apiOptions.success:
        return this.renderTrendingVideos()
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
        <TrendingContainer data-testid="trending">
          <SideBar />
          <>{this.renderTrendingView()}</>
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
