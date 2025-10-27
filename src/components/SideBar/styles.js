import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-bottom: 20px;
  background-color: ${props => (props.isThemeDark ? '#231f20' : 'white')};
`
export const NavButtonsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-bottom: 38vh;
`
export const NavButtonItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin: 10px;
`
export const NavButtonText = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-size: 20px;
  margin-left: 15px;
  color: ${props => (props.isThemeDark ? 'white' : '#475569')};
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactText = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : '#1e293b')};
  font-weight: bold;
  font-size: 20px;
`
export const ContactIconsList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-left: 0px;
`
export const ContactItem = styled.li`
  margin-right: 10px;
  list-style-type: none;
  padding-left: 0px;
`
export const ContactAppLogo = styled.img`
  height: 50px;
  width: 50px;
`
export const EnjoyText = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : '#475569')};
  font-size: 17px;
  font-weight: bold;
`
