import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './header.scss'

export const Header = ({ auth }) => {
  const authBtn = auth ? (
    <a className={style.item} href="/api/logout">
      <span data-test="auth-name" className={style.name}>Logout</span>
      <span className={style.label}>¯\_(ツ)_/¯</span>
    </a>
  ) : (
    <a className={style.item} href="/api/auth/google">
      <span data-test="auth-name" className={style.name}>Login</span>
      <span className={style.label}>Log in with Google to access the protected content</span>
    </a>
  )

  Header.propTypes = {
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }

  Header.defaultProps = {
    auth: {}
  }

  return (
    <div className={style.header}>
      <nav className={`${style.menu} ${style.menuwrp}`}>
        <Link className={style.item} to="/">
          <span className={style.name}>Home</span>
          <span className={style.label}>Welcome page</span>
        </Link>
        <Link className={style.item} to="/about">
          <span className={style.name}>About</span>
          <span className={style.label}>Everything about this boilerplate</span>
        </Link>
        <Link className={style.item} to="/users">
          <span className={style.name}>Users</span>
          <span className={style.label}>Open route for fetching random users</span>
        </Link>
        <Link className={style.item} to="admins">
          <span className={style.name}>Admins</span>
          <span className={style.label}>Protected route for fetching random admins</span>
        </Link>
        {authBtn}
      </nav>
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Header)
