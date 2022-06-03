import React from 'react'
import { CartItem } from '../CartSlice';
interface Props {
  cartItem: CartItem
}
const CartItemView:React.FC<Props> = ({ cartItem }) => {
  return (
    <>
      <h3>{cartItem.productName}</h3>
      <h3>{cartItem.quantity}</h3>
    </>
  )
}

export default CartItemView;
