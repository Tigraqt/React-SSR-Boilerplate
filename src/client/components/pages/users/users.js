import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { fetchUsers } from '../../../actions'

import styles from './users.scss'


export class Users extends Component {
  componentDidMount() {
    const { fetchUsers: _fetchUsers } = this.props
    _fetchUsers()
  }

  renderUsers() {
    const { users } = this.props
    return users.map(user => <li key={user.id}>{user.name}</li>)
  }

  render() {
    return (
      <div className={styles.wrp}>
        <Helmet>
          <title>SSR React | Users</title>
        </Helmet>
        <h2>Users :</h2>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
}

Users.defaultProps = {
  users: []
}

const mapStateToProps = state => ({ users: state.users })

const loadData = store => store.dispatch(fetchUsers())

export { loadData }

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(Users)
}
