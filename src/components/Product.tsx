import { CSSProperties } from "react";
// import { addToCart } from "../CartSlice"
// import { useDispatch } from "react-redux";

interface Props {
  name: string;
  cost: number;
}
const Product:React.FC<Props> = ({name, cost}) => {
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
      <h3>{name}</h3>
      <h3>£{cost}</h3>
      <button>Add to cart</button>
      {/* <button onClick={handleAddToCart}>Add to cart</button> */}
    </div>
  );
}

export default Product