import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import styles from './require-auth.scss'

export default ChildComponent => {
  class RequireAuth extends PureComponent {
    state = {
      navigate: false
    }

    componentWillUnmount() {
      clearTimeout(this.delay)
    }

    render() {
      const { auth, staticContext = {} } = this.props
      const { navigate } = this.state
      switch (auth) {
        case false:
          staticContext.url = '/'
          this.delay = setTimeout(() => this.setState({ navigate: true }), 3000)
          return (
            <div className={styles.wrp}>
              <h2>Login is required for this content</h2>
              <p>You will be redirected to the Homepage ..</p>
              {navigate && <Redirect to="/" />}
            </div>
          )
        case null:
          return <div>Loading ..</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth })

  return connect(mapStateToProps)(RequireAuth)
}
