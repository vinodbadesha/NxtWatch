import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  AppContainer,
  LoginFormContainer,
  LoginLogo,
  LoginLabel,
  LoginInput,
  ShowPasswordContainer,
  LoginCheckbox,
  LoginCheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styles'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = ' https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}

    const response = await fetch(loginUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderShowPasswordCheckbox = () => {
    const {showPassword} = this.state
    return (
      <>
        <ShowPasswordContainer>
          <LoginCheckbox
            type="checkbox"
            id="checkbox"
            checked={showPassword}
            onChange={this.toggleShowPassword}
          />
          <LoginCheckboxLabel htmlFor="checkbox">
            Show Password
          </LoginCheckboxLabel>
        </ShowPasswordContainer>
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <LoginLabel htmlFor="username">USERNAME</LoginLabel>
        <LoginInput
          type="text"
          value={username}
          placeholder="Username"
          onChange={this.onUsername}
          id="username"
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginInput
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.onPassword}
          id="password"
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <LoginFormContainer onSubmit={this.onSubmitForm}>
          <LoginLogo
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          {this.renderUsername()}
          {this.renderPassword()}
          {this.renderShowPasswordCheckbox()}
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </LoginFormContainer>
      </AppContainer>
    )
  }
}

export default LoginForm
