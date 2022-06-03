import { CSSProperties } from "react";
// import { addToCart } from "../CartSlice"
// import { useDispatch } from "react-redux";
import { ProductItem } from "../productData"

interface Props {
  productItem: ProductItem;
}
const Product:React.FC<Props> = ({ productItem }) => {
  // const dispatch = useDispatch();
  const productStyle: CSSProperties = {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  }
// const handleAddToCart = () => {
//   dispatch(addToCart({
//     productName: "name",
//     quantity: 1
//   }))
// }
  return (
    <div style={productStyle}>
      <h3>{productItem.name}</h3>
      <h3>£{productItem.cost}</h3>
      {/* <button onClick={handleAddToCart}>Add to cart</button> */}
    </div>
  );
}

export default Product