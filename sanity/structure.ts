import type { StructureResolver } from "sanity/structure"

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ecommerce Sanity")
    .items([
      S.documentTypeListItem("sale").title("Sales"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("product").title("Products"),
      S.divider(),
      S.documentTypeListItem("order").title("Orders"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["sale", "category", "product", "order"].includes(item.getId()!)
      )
    ])
