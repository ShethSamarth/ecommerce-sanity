"use client"

import { defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"
import { structureTool } from "sanity/structure"

import { schema } from "./sanity/schemaTypes"
import { structure } from "./sanity/structure"
import { apiVersion, dataset, projectId } from "./sanity/env"

export default defineConfig({
  name: "ecommerce-sanity",
  title: "Ecommerce Sanity",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
