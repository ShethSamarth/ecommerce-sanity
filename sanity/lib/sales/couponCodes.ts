export const COUPON_CODES = {
  BLACK: "BLACK",
  DIWALI: "DIWALI",
  NEWYEAR: "NEWYEAR",
  SUMMER: "SUMMER"
} as const

export type CouponCode = keyof typeof COUPON_CODES