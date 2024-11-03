"use client"

import { AnimatePresence, motion } from "framer-motion"

import { Product } from "@/sanity.types"

import { ProductThumbnail } from "./product-thumbnail"

interface ProductGridProps {
  products: Product[]
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <AnimatePresence key={product._id}>
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
            <ProductThumbnail product={product} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  )
}
