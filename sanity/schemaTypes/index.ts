import { type SchemaTypeDefinition } from "sanity"

import { saleType } from "./saleType"
import { orderType } from "./orderType"
import { productType } from "./productType"
import { categoryType } from "./categoryType"
import { blockContentType } from "./blockContentType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, orderType, productType, saleType]
}
