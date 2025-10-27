import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 1px;
`
export const LoginLogo = styled.img`
  height: 40px;
  width: 150px;
  align-self: center;
  margin-bottom: 5%;
`
export const LoginLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: #475569;
  margin-bottom: 5px;
`
export const LoginInput = styled.input`
  height: 30px;
  margin-bottom: 20px;
  width: 300px;
  color: #475569;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  padding: 10px;
  font-size: 15px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
export const LoginCheckbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const LoginCheckboxLabel = styled.label`
  font-size: 15px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-radius: 7px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 15px;
`
