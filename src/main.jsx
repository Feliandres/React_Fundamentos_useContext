import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AbueloProvider } from './components/context/AbueloProvider'

ReactDOM.render(
  <React.StrictMode>
    <AbueloProvider>
      <App />
    </AbueloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)