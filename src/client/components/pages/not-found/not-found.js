import React from 'react'
import PropTypes from 'prop-types'

import styles from './not-found.scss'

export const NotFound = ({ staticContext }) => {
  staticContext.notFound = true // eslint-disable-line no-param-reassign
  return <div><h1 className={styles.h1}>Opss, Not Found</h1></div>
}

NotFound.propTypes = {
  staticContext: PropTypes.shape({
    notFound: PropTypes.bool
  })
}

NotFound.defaultProps = {
  staticContext: {}
}

export default {
  component: NotFound
}
