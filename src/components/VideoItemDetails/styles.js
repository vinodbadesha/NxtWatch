import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  height: 90vh;
`
export const MainVideoContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  padding: 20px;
`
export const VideoDetailsContainer = styled.div`
  margin-top: 5px;
`
export const VideoItemTitle = styled.p`
  font-size: 20px;
  color: ${props => (props.isThemeDark ? '#f1f5f9' : '#231f20')};
  font-weight: 600;
  margin-bottom: 0px;
`
export const VideoFeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 0px;
`
export const VideoViewsContainer = styled.p`
  color: #7e858e;
  font-size: 13px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`
export const LikeDislikeButtonsContainer = styled.ul`
  list-style-type: nine;
  display: flex;
  padding-bottom: 0px;
  align-items: center;
  margin-bottom: 0px;
`

export const EachButton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
`
export const Line = styled.hr`
  border: 1px solid #7e858e;
`
export const ChannelCommentsContainer = styled.div`
  display: flex;
`
export const ChannelLogoImage = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 40px
    margin-left: 10px;
`
export const CommentsContainer = styled.div`
  padding-left: 10px;
`
export const ChannelName = styled.p`
  font-size: 15px;
  color: ${props => (props.isThemeDark ? '#f1f5f9' : '#231f20')};
  margin-top: 0px;
`
export const ChannelSubscribers = styled.p`
  font-size: 12px;
  color: #7e858e;
  padding-bottom: 0px;
`
export const VideoComment = styled.p`
  font-size: 15px;
  color: ${props => (props.isThemeDark ? '#f1f5f9' : '#231f20')};
  font-weight: 500;
  margin-bottom: 10px;
`
export const FailureContainer = styled.div`
  height: 80vh;
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
export const LoaderContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
