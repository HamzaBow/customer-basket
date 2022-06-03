import { useSelector } from "react-redux"
import { RootState } from "../CartSlice"
import CartItemView from "./CartItemView"

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  return (
    <>
      <h2>Cart</h2>
      {cartItems.map((item) => <CartItemView cartItem={item} /> )}
    </>
  )
}

export default Cart