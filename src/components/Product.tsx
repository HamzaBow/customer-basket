import { CSSProperties } from "react";

interface Props {
  name: string;
  cost: number;
}
const Product:React.FC<Props> = ({name, cost}) => {
  const productStyle: CSSProperties = {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  }
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h3>£{cost}</h3>
      <button>Add to cart</button>
    </div>
  );
}

export default Product