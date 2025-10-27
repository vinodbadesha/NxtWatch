import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AppContext from './Context/AppContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {savedVideosList: [], isThemeDark: false}

  toggleTheme = () => {
    this.setState(prevState => ({isThemeDark: !prevState.isThemeDark}))
  }

  addVideoToSavedList = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  render() {
    const {savedVideosList, isThemeDark} = this.state
    const homeBackroundTheme = isThemeDark
      ? 'home-dark-theme'
      : 'home-light-theme'
    return (
      <AppContext.Provider
        value={{
          savedVideosList,
          addVideoToList: this.addVideoToSavedList,
          isThemeDark,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            homeBackroundTheme={homeBackroundTheme}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
            savedVideosList={savedVideosList}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}
export default App
