import React from 'react'
import styles from './style.module.scss'

const FollowModalItem = ({ title, contact, children }: any) => {
  return (
    <div className={styles.followPage}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <p>{contact}</p>
      </div>
      <div className=''>{children}</div>
    </div>
  )
}

export default FollowModalItem