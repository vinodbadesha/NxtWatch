import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  width: 100%;
`
export const MainSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SavedVideosTitleContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding-left: 50px;
`
export const SavedVideosIconContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: #cbd5e1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
export const SavedVideosTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: ${props => (props.isThemeDark ? 'white' : '#181818')};
`
export const SavedVideosList = styled.ul`
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  list-style-type: none;
  padding-left: 50px;
  padding-top: 30px;
  margin-top: 0px;
`
export const SavedVideoItem = styled.li`
  display: flex;
`
export const SavedVideoThumbnail = styled.img`
  height: 150px;
  width: 250px;
  margin-right: 20px;
`
export const SavedVideoDetailsContainer = styled.div`
  background-color: transparent;
`
export const SavedVideoTitle = styled.p`
  margin-top: 10px;
  font-size: 25px;
  color: ${props => (props.isThemeDark ? '#f9f9f9' : '#181818')};
`
export const SavedVideosChannelName = styled.p`
  font-size: 15px;
  color: #616e7c;
`
export const SavedVideoViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SavedVideoTimeViewItem = styled.p`
  font-size: 12px;
  color: #616e7c;
`

export const FailureContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  margrin-bottom: 10px;
  height: 200px;
  width: 250px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isThemeDark ? '#f8fafc' : '#212121')};
  font-size: 30px;
  margin-bottom: 10px;
`
export const FailureText = styled.p`
  color: ${props => (props.isThemeDark ? '#f8fafc' : '#64748b')};
  font-size: 20px;
`
export const FailureRetryButton = styled.button`
  font-size: 15px;
  padding: 5px;
  border: none;
  font-weight: bold;
  background-color: #4f46e5;
  color: white;
`
