import { ProductType } from '@/types/ProductsTypes'
//https://nextjs.org/docs/app/api-reference/functions/fetch => cache
//fetch(`https://...`, { next: { revalidate: false | 0 | number } }) => specific time er por update hobey

//SSR, SSG
export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(`http://localhost:500/products`, {
      cache: 'force-cache',
    }) //force-cache data change hobey naabr 'no-store' diley change hobey
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
  return []
}

//getProductsById
export const getProductsById = async (id: string): Promise<ProductType> => {
  const response = await fetch(`http://localhost:500/products/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch products details')
  }
  return response.json()
}

// no-store => SSR
// force-cache =>  SSG
//ISR 