import styled from 'styled-components'

export const VideoListItem = styled.li`
  background-color: transparent;
  list-style-type: none;
`
export const VideoThumbnail = styled.img`
  height: 150px;
  width: 250px;
  margin-bottom: 20px;
`
export const ThumbnailDetailsContainer = styled.div`
  display: flex;
`
export const ChannelDetails = styled.div`
  padding: 0px;
`
export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-right: 10px;
`
export const VideoTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${props => (props.isThemeDark ? '#f8fafc' : '#475569')};
  margin-top: 0px;
`
export const ChannelName = styled.p`
  font-size: 15px;
  color: #64748b;
  text-decoration: none;
  font-weight: bold;
  padding-bottom: 0px;
  margin-bottom: 0px;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ViewsTimeText = styled.p`
  font-size: 15px;
  color: #64748b;
`
