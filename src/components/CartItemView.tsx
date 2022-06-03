import React from 'react'
import { useDispatch } from 'react-redux';
import { CartItem, decrementQuantity, incrementQuantity } from '../CartSlice';
interface Props {
  cartItem: CartItem
}
const CartItemView:React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const incrementQ = () => {
    dispatch(incrementQuantity(cartItem.productName))
  }
  const decrementQ = () => {
    dispatch(decrementQuantity(cartItem.productName))
  }
  return (
    <>
      <h3>{cartItem.productName}</h3>
      <h3>{cartItem.quantity}</h3>
      <button onClick={incrementQ}>+</button>
      <button onClick={decrementQ}>-</button>
    </>
  )
}

export default CartItemView;
