import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../Context/AppContext'
import {
  VideoListItem,
  VideoThumbnail,
  ThumbnailDetailsContainer,
  ChannelLogo,
  ChannelDetails,
  VideoTitle,
  ChannelName,
  ViewsContainer,
  ViewsTimeText,
} from './styles'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <AppContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <VideoListItem>
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <ThumbnailDetailsContainer>
              <ChannelLogo alt="channel logo" src={channel.profileImageUrl} />
              <ChannelDetails>
                <VideoTitle isThemeDark={isThemeDark}>{title}</VideoTitle>
                <ChannelName>{channel.name}</ChannelName>
                <ViewsContainer>
                  <ViewsTimeText>
                    {viewCount} • {date}
                  </ViewsTimeText>
                </ViewsContainer>
              </ChannelDetails>
            </ThumbnailDetailsContainer>
          </VideoListItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItem
