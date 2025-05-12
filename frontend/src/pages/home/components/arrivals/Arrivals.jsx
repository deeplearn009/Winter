import React, { useEffect } from 'react'
import styles from './Arrivals.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/cardSlice'
import Card from '../../../../components/card/Card'

const Arrivals = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.card.products)


    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])


  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.title}>
                <h2>New Arrival</h2>
                <div className={styles.categories}>
                    <p style={{borderBottom: '1px solid #2f7dfc', color: '#2f7dfc'}}>All</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Shoes</p>
                </div>
            </div>
            <div className={styles.cards}>
             {data?.map(item => <Card item={item}/>)}
            </div>
        </div>
    </div>
  )
}

export default Arrivals
