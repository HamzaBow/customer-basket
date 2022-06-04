import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../CartSlice";
import { moneyFormat } from "../utils";
import CartItemView from "./CartItemView";
import "../App.css";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartSectionStyle: CSSProperties = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
    width: "40vw",
    margin: "10px",
    display: "inline-block",
  };
  const emptyTxtStyle: CSSProperties = {
    textAlign: "center",
    color: "gray",
    marginBottom: "30px",
  };
  return (
    <div style={cartSectionStyle}>
      <h2 style={{ marginLeft: "20px" }}>Cart</h2>
      {cartItems.length === 0 ? (
        <h3 style={emptyTxtStyle}>Cart is empty!</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItemView cartItem={item} />
          ))}
          <div className="cart-totals">
            <h2 className="label">Subtotal</h2>
            <h2 className="quantity">
              {moneyFormat(
                cartItems.reduce(
                  (prev, current) => prev + current.quantity * current.unitCost,
                  0
                )
              )}
            </h2>
            <h2 className="label">Discount</h2>
            <h2 className="quantity">
              {moneyFormat(
                cartItems.reduce((prev, current) => prev + current.discount, 0)
              )}
            </h2>
            <h2 className="label">Total</h2>
            <h2 className="quantity">
              {moneyFormat(
                cartItems.reduce(
                  (prev, current) => prev + current.quantity * current.unitCost,
                  0
                ) -
                  cartItems.reduce(
                    (prev, current) => prev + current.discount,
                    0
                  )
              )}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
