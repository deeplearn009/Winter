import React from 'react'
import styles from './Photos.module.scss'

const Photos = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png.webp" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png.webp" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png.webp" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png.webp" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png.webp" alt="" />
        </div>
    </div>
  )
}

export default Photos
