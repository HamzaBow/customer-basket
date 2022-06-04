import { CSSProperties } from "react"
import productData, { ProductItem } from "../productData"
import Product from "./Product"
const Products = () => {
  const productSectionStyle: CSSProperties = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
    width: "40vw",
    margin: "10px",
    display: "inline-block"
  }
  return (
    <div style={productSectionStyle}>
    <h2 style={{ marginLeft: "20px" }}>Products</h2>
    { productData.map((productItem: ProductItem, index) => <Product key={index} productItem={productItem} />)
    }
    </div>
  )
}

export default Products