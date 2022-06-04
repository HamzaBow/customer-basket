import { CSSProperties } from "react";
import { addToCart } from "../CartSlice"
import { useDispatch } from "react-redux";
import { ProductItem } from "../productData"
import { moneyFormat } from "../utils";

interface Props {
  productItem: ProductItem;
}
const Product:React.FC<Props> = ({ productItem }) => {
  const dispatch = useDispatch();
  const productStyle: CSSProperties = {
    border: "1px solid gray",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  }
  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
  };
  const btnAddStyle: CSSProperties = {
    fontSize: "16pt",
    padding: "5px 15px",
    backgroundColor: "yellow",
    color: "black",
    borderRadius: "5px",
  }
  return (
    <div style={productStyle}>
      <h3>{productItem.name}</h3>
      <h3>{moneyFormat(productItem.cost)}</h3>
      <button onClick={handleAddToCart} style={btnAddStyle}>Add to cart</button>
    </div>
  );
}

export default Product