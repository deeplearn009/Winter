import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src="https://preview.colorlib.com/theme/winter/img/feature_1.png.webp" alt="" />
                </div>
                <div className={styles.btn}>
                    <button>Shop For Male</button>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src="https://preview.colorlib.com/theme/winter/img/feature_1.png.webp" alt="" />
                </div>
                <div className={styles.btn}>
                    <button>Shop For Male</button>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src="https://preview.colorlib.com/theme/winter/img/feature_1.png.webp" alt="" />
                </div>
                <div className={styles.btn}>
                    <button>Shop For Male</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
