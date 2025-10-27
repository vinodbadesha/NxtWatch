import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`
export const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isThemeDark ? '#181818' : '#f9f9f9')};
  width: 100%;
`
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 30px;
  background-size: cover;
  width: 100%;
`
export const BannerTextContainer = styled.div`
  width: 30%;
`
export const BannerWebsiteLogo = styled.img`
  height: 40px;
  width: 200px;
`
export const BuyPremiumText = styled.p`
  font-size: 18px;
  color: #181818;
`
export const GetNowButton = styled.button`
  font-size: 15px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid #231f20;
  align-self: flex-start;
  width: 40%;
  font-weight: 600;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  font-size: 25px;
`
export const VideosContainer = styled.div`
  background-color: transparent;
  width: 100%;
  padding: 20px;
`
export const SearchContainer = styled.div`
  display: flex;
  height: 30px;
  width: 400px;
  border: 1px solid #383838;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 0px;
`
export const Input = styled.input`
  padding: 5px;
  font-size: 15px;
  background-color: tra;
  height: 28px;
  width: 350px;
  border: none;
`
export const SearchIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 48px;
  background-color: transparent;
  border: none;
  border-left: 1px solid #383838;
`
export const AllVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style-type: none;
  margin-top: 0px;
  overflow-y: scroll;
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
