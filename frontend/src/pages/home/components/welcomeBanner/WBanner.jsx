import React from 'react'
import styles from './wBanner.module.scss'

const WBanner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>
                <h5>Winter Fashion</h5>
                <h1>Fashion Collection 2019</h1>
                <button>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default WBanner
