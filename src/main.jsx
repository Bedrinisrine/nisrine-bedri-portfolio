import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ErrorBoundary } from './ErrorBoundary'
import App from './App'
import './index.css'

const container = document.getElementById('root')
if (!container) {
  document.body.innerHTML = '<p style="padding:24px;font-family:sans-serif">Missing #root in index.html</p>'
} else {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <HashRouter>
          <App />
        </HashRouter>
      </ErrorBoundary>
    </React.StrictMode>
  )
}
