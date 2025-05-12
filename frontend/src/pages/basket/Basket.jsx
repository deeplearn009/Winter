import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/card/Card'
import { Link } from 'react-router'
import { getBasketThunk } from '../../redux/reducers/basketSlice'
import styles from './Basket.module.scss'

const Basket = () => {

  const dispatch = useDispatch()

  const basket = useSelector((state) => state.basket.basket)

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [])

 

  return (
    <div className={styles.container}>
        <header>
          <h1>Basket</h1>
          <nav>
            <Link to={'/'}>Home</Link>
          </nav>
        </header>
      <div className={styles.products}>
        {basket?.map(item => <Card item={item}/>)}
      </div>
    </div>
  )
}

export default Basket
