import { addToCart, CartItem, RootState } from "../CartSlice"
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../productData"
import { moneyFormat } from "../utils";
import "../App.css"
import StarRating from "./StarRating";

interface Props {
  productItem: ProductItem;
}
const Product:React.FC<Props> = ({ productItem }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
  };
  const isItemInCart = () => {
    return (
      cartItems.filter(
        (cartItem: CartItem) => cartItem.productName === productItem.name
      ).length === 1
    );
  }
  return (
    <div className="product">
      <div className="top">
        <img
          className="product-img"
          src={`/images/${productItem.name}.jpg`}
          alt={productItem.name}
        />
        <h3 className="product-name">{productItem.name}</h3>
        <div>
          <StarRating />
          <h3 className="product-cost">{moneyFormat(productItem.cost)}</h3>
        </div>
      </div>
      <div className="btn-add-to-cart-wr">
        <button onClick={handleAddToCart} className={"btn-add-to-cart"} disabled={isItemInCart()}>
          { isItemInCart() ?
            "Already in cart"
            :
            "Add to cart"
          }
        </button>
      </div>
    </div>
  );
}

export default Product