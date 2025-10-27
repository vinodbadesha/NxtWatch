import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoIosClose} from 'react-icons/io'
import {IoSearchSharp} from 'react-icons/io5'
import TopHeader from '../TopHeader'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import AppContext from '../../Context/AppContext'
import './index.css'

import {
  HomeContainer,
  BannerContainer,
  BannerTextContainer,
  BannerWebsiteLogo,
  BuyPremiumText,
  GetNowButton,
  MainHomeContainer,
  BannerCloseButton,
  SearchContainer,
  Input,
  SearchIconButton,
  VideosContainer,
  AllVideosList,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
} from './styles'

const apiOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    responseStatus: apiOptions.inProgress,
    isBannerDisplayed: true,
    searchInput: '',
    allVideosList: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickBannerClose = () => {
    this.setState({isBannerDisplayed: false})
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <div className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  renderNoVideosView = () => (
    <AppContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading isThemeDark={isThemeDark}>
              No Search Results Found
            </FailureHeading>
            <FailureText isThemeDark={isThemeDark}>
              Try different key words or remove search filter
            </FailureText>
          </FailureContainer>
        )
      }}
    </AppContext.Consumer>
  )

  showBanner = () => {
    const {isBannerDisplayed} = this.state
    return (
      <>
        {isBannerDisplayed ? (
          <BannerContainer data-testid="banner">
            <BannerTextContainer>
              <BannerWebsiteLogo
                alt="nxt watch logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
              <BuyPremiumText>Buy Nxt Watch Premium</BuyPremiumText>
              <GetNowButton>GET IT NOW</GetNowButton>
            </BannerTextContainer>
            <BannerCloseButton
              data-testid="close"
              onClick={this.onClickBannerClose}
            >
              <IoIosClose />
            </BannerCloseButton>
          </BannerContainer>
        ) : null}
      </>
    )
  }

  getAllVideos = async () => {
    const {searchInput} = this.state
    this.setState({responseStatus: apiOptions.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const allVideosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(allVideosUrl, options)
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
        allVideosList: updatedData,
        responseStatus: apiOptions.success,
      })
    } else {
      this.setState({responseStatus: apiOptions.failure})
    }
  }

  renderSuccessView = () => {
    const {searchInput, allVideosList} = this.state

    const inputFilteredList = allVideosList.filter(video =>
      video.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <>
        {inputFilteredList.length > 0 ? (
          <AllVideosList>
            {console.log(allVideosList)}
            {inputFilteredList.map(eachItem => (
              <Link to={`/videos/${eachItem.id}`} className="link-item">
                <VideoItem videoDetails={eachItem} key={eachItem.id} />
              </Link>
            ))}
          </AllVideosList>
        ) : (
          this.renderNoVideosView()
        )}
      </>
    )
  }

  onClickRetry = () => {
    this.getAllVideos()
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
              We are having some trouble
            </FailureText>
            <FailureRetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderHomeView = () => {
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
    const {searchInput} = this.state
    const {homeBackroundTheme} = this.props
    return (
      <AppContext.Consumer>
        {value => {
          const {isThemeDark} = value

          return (
            <div data-testid="home" className={homeBackroundTheme}>
              <TopHeader />
              <HomeContainer>
                <SideBar />
                <>
                  <MainHomeContainer isThemeDark={isThemeDark}>
                    {this.showBanner()}
                    <SearchContainer>
                      <Input
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onSearchInput}
                      />
                      <SearchIconButton
                        type="button"
                        data-testid="searchButton"
                      >
                        <IoSearchSharp />
                      </SearchIconButton>
                    </SearchContainer>
                    <VideosContainer>{this.renderHomeView()}</VideosContainer>
                  </MainHomeContainer>
                </>
              </HomeContainer>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
