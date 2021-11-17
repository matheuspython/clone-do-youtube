import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import Globals from './global/styles'

ReactDOM.render(
  <React.StrictMode>
    <Globals />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
