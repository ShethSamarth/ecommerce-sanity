import { SaleBanner } from "@/components/sale-banner"
import { ProductsView } from "@/components/products-view"
import { getAllProducts } from "@/sanity/lib/products/get-all-products"
import { getAllCategories } from "@/sanity/lib/products/get-all-categories"

const Home = async () => {
  const products = await getAllProducts()
  const categories = await getAllCategories()

  return (
    <div>
      <SaleBanner />

      <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  )
}

export default Home
