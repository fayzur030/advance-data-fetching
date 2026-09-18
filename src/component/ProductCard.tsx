import { ProductType } from '@/types/ProductsTypes'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  product: ProductType
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className='card overflow-hidden bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl '>
      {/* Product Image */}
      <figure className='relative h-60 w-full overflow-hidden bg-base-200'>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className='object-cover transition-transform duration-300 hover:scale-105'
        />
      </figure>

      {/* Product Details */}
      <div className='card-body'>
        <div className='flex items-start justify-between gap-3'>
          <h2 className='card-title line-clamp-1'>{product.title}</h2>

          <span className='badge badge-primary'>${product.price}</span>
        </div>

        <p className='mt-1 line-clamp-2 text-sm text-base-content/70'>
          {product.description}
        </p>

        {/* Rating */}
        <div className='mt-2 flex items-center gap-2'>
          <div className='rating rating-sm'>
            <input
              type='radio'
              className='mask mask-star-2 bg-orange-400'
              checked
              readOnly
              aria-label={`${product.rating} star rating`}
            />
          </div>

          <span className='text-sm font-medium'>{product.rating}</span>
        </div>

        {/* Button */}
        <Link href={`/products/${product.id}`} className='card-actions mt-4'>
          <button className='btn btn-primary w-full'>View Details</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
