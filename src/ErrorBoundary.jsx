import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { err: null }
  }

  static getDerivedStateFromError(err) {
    return { err }
  }

  componentDidCatch(err, info) {
    console.error(err, info)
  }

  render() {
    if (this.state.err) {
      return (
        <div style={{ padding: 24, fontFamily: 'system-ui', maxWidth: 560 }}>
          <h1 style={{ fontSize: 18 }}>Something went wrong</h1>
          <pre
            style={{
              marginTop: 12,
              padding: 12,
              background: '#fee',
              overflow: 'auto',
              fontSize: 12,
            }}
          >
            {String(this.state.err)}
          </pre>
          <p style={{ marginTop: 12, fontSize: 14 }}>
            Open the browser console (F12) for details. If you use GitHub Pages, the app must be
            built with the correct <code>base</code> in <code>vite.config.js</code>.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
