export interface ProductItem {
  name: string;
  cost: number;
}

const productData: ProductItem[] = [
  {
    name: "Butter",
    cost: 0.8
  },
  {
    name: "Milk",
    cost: 1.15
  },
  {
    name: "Bread",
    cost: 1
  }
]

export default productData;