import { ProductType } from '@/types/ProductsTypes'
import ProductCard from '../ProductCard'

interface IProducts {
  products: ProductType[]
}

const ProductsData = ({ products }: IProducts) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 max-w-7xl mx-auto mt-9'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductsData
