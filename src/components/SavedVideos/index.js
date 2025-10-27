import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import TopHeader from '../TopHeader'
import SideBar from '../SideBar'
import AppContext from '../../Context/AppContext'
import {
  SavedVideosContainer,
  MainSavedVideosContainer,
  SavedVideosTitleContainer,
  SavedVideosIconContainer,
  SavedVideosTitle,
  SavedVideosList,
  SavedVideoItem,
  SavedVideoThumbnail,
  SavedVideoDetailsContainer,
  SavedVideoTitle,
  SavedVideosChannelName,
  SavedVideoViewsContainer,
  SavedVideoTimeViewItem,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
} from './styles'

class SavedVideos extends Component {
  renderTrendingVideos = () => (
      <AppContext.Consumer>
        {value => {
          const {savedVideosList, isThemeDark} = value
          return (
            <>
              <MainSavedVideosContainer>
                <SavedVideosTitleContainer isThemeDark={isThemeDark}>
                  <SavedVideosIconContainer>
                    <BiListPlus className="trending-icon" />
                  </SavedVideosIconContainer>
                  <SavedVideosTitle isThemeDark={isThemeDark}>
                    Saved Videos
                  </SavedVideosTitle>
                </SavedVideosTitleContainer>

                <SavedVideosList isThemeDark={isThemeDark}>
                  {savedVideosList.map(eachItem => (
                    <SavedVideoItem key={eachItem.id}>
                      <Link
                        to={`/videos/${eachItem.id}`}
                        className="trending-link-item"
                      >
                        <SavedVideoThumbnail
                          src={eachItem.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <SavedVideoDetailsContainer>
                          <SavedVideoTitle isThemeDark={isThemeDark}>
                            {eachItem.title}
                          </SavedVideoTitle>
                          <SavedVideosChannelName>
                            {eachItem.channel.name}
                          </SavedVideosChannelName>
                          <SavedVideoViewsContainer>
                            <SavedVideoTimeViewItem>
                              {eachItem.viewCount} • {eachItem.publishedAt}
                            </SavedVideoTimeViewItem>
                          </SavedVideoViewsContainer>
                        </SavedVideoDetailsContainer>
                      </Link>
                    </SavedVideoItem>
                  ))}
                </SavedVideosList>
              </MainSavedVideosContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isThemeDark} = value
        return (
          <FailureContainer isThemeDark={isThemeDark}>
            <FailureImage
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <FailureHeading isThemeDark={isThemeDark}>
              No Saved Videos Found
            </FailureHeading>
            <FailureText isThemeDark={isThemeDark}>
              Save your videos by clicking a button
            </FailureText>
          </FailureContainer>
        )
      }}
    </AppContext.Consumer>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {savedVideosList} = value

          return (
            <>
              <TopHeader />
              <SavedVideosContainer data-testid="saved videos">
                <SideBar />
                <>
                  {savedVideosList.length !== 0
                    ? this.renderTrendingVideos()
                    : this.renderFailureView()}
                </>
              </SavedVideosContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default SavedVideos
