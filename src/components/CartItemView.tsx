import React, { CSSProperties } from 'react'
import { useDispatch } from 'react-redux';
import { CartItem, decrementQuantity, incrementQuantity } from '../CartSlice';
import { moneyFormat } from '../utils';
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

  const cartItemStyle: CSSProperties = {
    border: "1px solid gray",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  }

  const buttonStyle: CSSProperties = {
    fontSize: "22pt",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    borderStyle: "solid",
  }

  return (
    <div style={cartItemStyle}>
      <h3>{cartItem.productName}</h3>
      <h3 style={{ float: "right" }}>
        {moneyFormat(cartItem.unitCost * cartItem.quantity)}
      </h3>
      <h3 style={{ display: "inline-block", marginRight: "15px" }}>Quantity</h3>
      <button style={buttonStyle} onClick={decrementQ}>
        -
      </button>
      <h3 style={{ display: "inline-block", margin: "15px" }}>
        {cartItem.quantity}
      </h3>
      <button style={buttonStyle} onClick={incrementQ}>
        +
      </button>
    </div>
  );
}

export default CartItemView;
