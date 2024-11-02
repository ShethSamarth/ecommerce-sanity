import { TrolleyIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text"
        }
      ]
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent"
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().min(0)
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (rule) => rule.min(0)
    })
  ],
  preview: {
    select: {
      title: "name",
      price: "price",
      image: "image"
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `$${selection.price}`,
        media: selection.image
      }
    }
  }
})
