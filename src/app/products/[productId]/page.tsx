import { getProductsById } from '@/services/getProducts'
import { ProductType } from '@/types/ProductsTypes'
import Image from 'next/image'
interface DetailsProps {
  params: Promise<{ productId: string }>
}

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:500/products')
  const products: ProductType[] = await res.json()

  return products.map((product) => ({
    productId: product.id.toString(),
  }))
}

const ProductDetailsPage = async ({ params }: DetailsProps) => {
  const { productId } = await params
  console.log(productId)
  const details = await getProductsById(productId)

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='card bg-base-100 w-96 shadow-sm'>
        <figure>
          <Image
            src={details.image}
            alt={details.title}
            width={400}
            height={300}
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{details.title}</h2>
          <p>{details.description}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
