import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 5%;
  padding-right: 5%;
  background-color: ${props => (props.isThemeDark ? '#231f20' : 'white')};
`
export const HeaderLogo = styled.img`
  height: 40px;
  width: 150px;
`
export const ProfileLogoutContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderThemeButton = styled.button`
    background-color: transparent;
    border: none;
    display. flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
`
export const HeaderImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 30px;
`
export const LogoutButton = styled.button`
  color: ${props => (props.isThemeDark ? 'white' : '#3b82f6')};
  font-size: 15px;
  padding: 10px;
  border: 2px solid ${props => (props.isThemeDark ? 'white' : '#3b82f6')};
  background-color: transparent;
  font-weight: bold;
`
