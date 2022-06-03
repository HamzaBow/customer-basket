import products from "../products"
import Product from "./Product"
const Products = () => {
  return (
    <>
    { products.map((product) => <Product name={product.name} cost={product.cost} />)
    }
    </>
  )
}

export default Products