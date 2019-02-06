import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { fetchAdmins } from '../../../actions'
import requireAuth from '../../hocs/require-auth'

import styles from './admins.scss'

export class Admins extends Component {
  componentDidMount() {
    const { fetchAdmins: _fetchAdmins } = this.props
    _fetchAdmins()
  }

  renderAdmins() {
    const { admins } = this.props
    return admins.map(admin => <li key={admin.id}>{admin.name}</li>)
  }

  render() {
    return (
      <div className={styles.wrp}>
        <Helmet>
          <title> SSR React | Admins</title>
        </Helmet>
        <h2>Protected admins :</h2>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

Admins.propTypes = {
  fetchAdmins: PropTypes.func.isRequired,
  admins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
}

Admins.defaultProps = {
  admins: []
}

const mapStateToProps = state => ({ admins: state.admins })

const loadData = store => store.dispatch(fetchAdmins())

export { loadData }

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(Admins))
}
