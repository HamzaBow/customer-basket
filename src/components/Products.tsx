import productData from "../productData"
import Product from "./Product"
const Products = () => {
  return (
    <>
    { productData.map((product, index) => <Product key={index} name={product.name} cost={product.cost} />)
    }
    </>
  )
}

export default Products