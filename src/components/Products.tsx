import productData, { ProductItem } from "../productData"
import Product from "./Product"
const Products = () => {
  return (
    <>
    { productData.map((productItem: ProductItem, index) => <Product key={index} productItem={productItem} />)
    }
    </>
  )
}

export default Products