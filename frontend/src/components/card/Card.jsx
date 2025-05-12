import React from "react";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteBasketThunk,
  postBasketThunk,
} from "../../redux/reducers/basketSlice.js";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const deleteBasket = (id) => {
    dispatch(deleteBasketThunk(id));
  };

  const addToBasket = () => {
    dispatch(postBasketThunk(item));
  };

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.description}>
        <h2>{item.name}</h2>
        <h4>${item.price}</h4>
        <button onClick={() => addToBasket()}>Add to Basket</button>
        <button onClick={() => deleteBasket(item._id)}>
          Delete from Basket
        </button>
      </div>
    </div>
  );
};

export default Card;
