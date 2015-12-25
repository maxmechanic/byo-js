import React from 'react'
import styles from './logo.css'

const Logo = ({src = false}) => src ? (
  <div className={styles.logo}>
    <div className={styles.logoImageWrapper}>
      <img className={styles.logoImage} src={src} />
    </div>
  </div>
) : <div className={styles.logo} />

export default Logo
