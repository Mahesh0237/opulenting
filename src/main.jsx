import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { Notifications } from '@mantine/notifications'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Notifications zIndex={999999999999999} position="top-right" />
    <App />
  </React.StrictMode>,
)
