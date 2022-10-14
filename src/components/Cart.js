import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './../store/Cart-Slice';
const Cart = () => {
  const dispatch = useDispatch()
  const showCart =()=>{
    dispatch(cartActions.setShowCart())
  }
    const quantity = useSelector((state)=> state.cart.totalQuantity)
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
