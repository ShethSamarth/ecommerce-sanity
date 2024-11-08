import { BasketIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string"
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (rule) => rule.required().email()
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "product" }]
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number"
            })
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price"
            },
            prepare(selection) {
              return {
                title: `${selection.product} x ${selection.quantity}`,
                subtitle: `$${selection.price * selection.quantity}`,
                media: selection.image
              }
            }
          }
        })
      ]
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (rule) => rule.required().min(0)
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "amountDiscount",
      title: "Amount Discount",
      type: "number",
      validation: (rule) => rule.min(0)
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" }
        ]
      }
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email"
    },
    prepare(selection) {
      const orderIdSnippet = `${selection.orderId.slice(0, 5)}...${selection.orderId.slice(-5)}`

      return {
        title: `${selection.name} (${orderIdSnippet})`,
        subtitle: `${selection.amount} ${selection.currency}, ${selection.email}`,
        media: null
      }
    }
  }
})
