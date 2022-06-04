import { CSSProperties } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../CartSlice"
import { moneyFormat } from "../utils"
import CartItemView from "./CartItemView"

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartSectionStyle: CSSProperties = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
    width: "40vw",
    margin: "10px",
    display: "inline-block",
  }
  const emptyTxtStyle: CSSProperties = {
    textAlign: "center",
    color: "gray"
  }
  return (
    <div style={cartSectionStyle}>
      <h2 style={{ marginLeft: "20px" }}>Cart</h2>
      {cartItems.length === 0 ? (
        <h3 style={emptyTxtStyle}>Cart is empty!</h3>
      ) : (
        cartItems.map((item) => <CartItemView cartItem={item} />)
      )}
      <h2 style={{ textAlign: "right", marginRight: "20px"}}>Subtotal</h2>
      <h2 style={{ color: "gray", textAlign: "right", marginRight: "20px"}}>
        {moneyFormat(
          cartItems.reduce(
            (prev, current) => prev + current.quantity * current.unitCost,
            0
          )
        )}
      </h2>
      <br />
      <h2>Discount</h2>
      <h2>Total</h2>
    </div>
  );
}

export default Cart