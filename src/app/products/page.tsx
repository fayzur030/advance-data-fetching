import ProductsData from '@/component/products/ProductsData'
import { getProducts } from '@/services/getProducts'
import { Suspense } from 'react'
import Loading from './loading'

const ProductsPage = async () => {
  const products = await getProducts()
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProductsData products={products} />
      </Suspense>
    </div>
  )
}

export default ProductsPage
