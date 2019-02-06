import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './home.scss'

import github from '../../../images/github.svg'

export const Home = () => (
  <div className={styles.wrp}>
    <Helmet>
      <title>SSR React | Home</title>
    </Helmet>
    <h2>SSR React boilerplate</h2>
    <p>
      Created by
      <span> Roland Cseh</span>
    </p>
    <a href="https://github.com/Tigraqt" target="_blank" rel="noopener noreferrer"><img src={github} style={{ width: '1.75rem' }} alt="Github" /></a>
  </div>
)

export default {
  component: Home
}
