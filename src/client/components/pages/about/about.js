import React from 'react'
import { Helmet } from 'react-helmet'

import styles from './about.scss'

export const About = () => (
  <div className={styles.wrp}>
    <Helmet>
      <title>SSR React | About</title>
    </Helmet>
    <h2>Contains the following features &amp; tools :</h2>
    <p>Complete SSR support</p>
    <p>Redux / Redux Thunk</p>
    <p>React Router Config</p>
    <p>Authentication handling</p>
    <p>Data fetching with Axios</p>
    <p>Hot reloading on both server &amp; client side</p>
    <p>Production ready version</p>
    <p>Tests with Jest &amp; Enzyme</p>
    <p>React Helmet</p>
    <p>Pre-commit</p>
    <p>ESLint</p>
    <p>Many more ..</p>
  </div>
)

export default {
  component: About
}
