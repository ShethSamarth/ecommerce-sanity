import { Category, Product } from "@/sanity.types"

import { ProductGrid } from "./product-grid"
import { CategorySelector } from "./category-selector"

interface ProductsViewProps {
  categories: Category[]
  products: Product[]
}

export const ProductsView = ({ categories, products }: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full sm:w-52">
        <CategorySelector categories={categories} />
      </div>

      <div className="flex-1">
        <div>
          <ProductGrid products={products} />

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  )
}
