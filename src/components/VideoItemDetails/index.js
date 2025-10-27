import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Cookies from 'js-cookie'
import AppContext from '../../Context/AppContext'

import TopHeader from '../TopHeader'
import SideBar from '../SideBar'
import {
  VideoItemDetailsContainer,
  VideoDetailsContainer,
  VideoItemTitle,
  VideoFeaturesContainer,
  VideoViewsContainer,
  LikeDislikeButtonsContainer,
  EachButton,
  Line,
  ChannelCommentsContainer,
  ChannelLogoImage,
  CommentsContainer,
  ChannelName,
  ChannelSubscribers,
  VideoComment,
  MainVideoContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
} from './styles'
import './index.css'

const apiOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    channelDetails: {},
    responseStatus: apiOptions.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({responseStatus: apiOptions.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(videoUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: data.video_details.channel,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      const updatedChannelDetails = {
        name: updatedData.channel.name,
        profileImageUrl: updatedData.channel.profile_image_url,
        subscriberCount: updatedData.channel.subscriber_count,
      }
      this.setState({
        responseStatus: apiOptions.success,
        videoData: updatedData,
        channelDetails: updatedChannelDetails,
      })
    } else {
      this.setState({responseStatus: apiOptions.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoData()
  }

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isThemeDark} = value
        return (
          <FailureContainer>
            <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
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

  renderLoaderView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => {
    const {videoData, channelDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      viewCount,
      publishedAt,
      description,
    } = videoData
    const {name, profileImageUrl, subscriberCount} = channelDetails
    const likeButtonClass = isLiked ? 'button-clicked' : 'button-not-clicked'
    const dislikeButtonClass = isDisliked
      ? 'button-clicked'
      : 'button-not-clicked'

    const date = formatDistanceToNow(new Date(publishedAt))

    return (
      <AppContext.Consumer>
        {value => {
          const {addVideoToList, isThemeDark} = value
          const onSaveVideo = () => {
            addVideoToList({...videoData, ...channelDetails})
            this.setState({isSaved: true})
          }

          const savedText = isSaved ? 'Saved' : 'Save'

          return (
            <>
              <MainVideoContainer isThemeDark={isThemeDark}>
                <ReactPlayer
                  width="100%"
                  height="70%"
                  url={videoUrl}
                  controls
                />
                <VideoDetailsContainer>
                  <VideoItemTitle isThemeDark={isThemeDark}>
                    {title}
                  </VideoItemTitle>
                  <VideoFeaturesContainer>
                    <VideoViewsContainer>
                      {viewCount} • {date}
                    </VideoViewsContainer>
                    <LikeDislikeButtonsContainer>
                      <EachButton
                        isThemeDark={isThemeDark}
                        className={likeButtonClass}
                        type="button"
                        onClick={this.onClickLike}
                      >
                        <BiLike className="video-item-button-icon each-button-size" />{' '}
                        Like
                      </EachButton>
                      <EachButton
                        type="button"
                        isThemeDark={isThemeDark}
                        className={dislikeButtonClass}
                        onClick={this.onClickDislike}
                      >
                        <BiDislike className="video-item-button-icon each-button-size" />
                        Dislike
                      </EachButton>
                      <EachButton type="button" onClick={onSaveVideo}>
                        <BiListPlus className="video-item-button-icon each-button-size" />
                        {savedText}
                      </EachButton>
                    </LikeDislikeButtonsContainer>
                  </VideoFeaturesContainer>
                </VideoDetailsContainer>
                <Line />
                <ChannelCommentsContainer>
                  <ChannelLogoImage src={profileImageUrl} alt="channel logo" />
                  <CommentsContainer>
                    <ChannelName isThemeDark={isThemeDark}>{name}</ChannelName>
                    <ChannelSubscribers>
                      {subscriberCount} subscribers
                    </ChannelSubscribers>
                    <VideoComment isThemeDark={isThemeDark}>
                      {description}
                    </VideoComment>
                  </CommentsContainer>
                </ChannelCommentsContainer>
              </MainVideoContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderVideo = () => {
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
        <AppContext.Consumer>
          {value => {
            const {isThemeDark} = value
            return (
              <VideoItemDetailsContainer
                isThemeDark={isThemeDark}
                data-testid="video item details"
              >
                <SideBar />
                {this.renderVideo()}
              </VideoItemDetailsContainer>
            )
          }}
        </AppContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
