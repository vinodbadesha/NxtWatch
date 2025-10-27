import React from 'react'

const AppContext = React.createContext({
  savedVideosList: [],
  isThemeDark: false,
  addVideoToList: () => {},
  toggleTheme: () => {},
})

export default AppContext
