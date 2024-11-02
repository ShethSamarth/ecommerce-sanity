import { createClient } from "next-sanity"

import { apiVersion, baseUrl, dataset, projectId } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: `${baseUrl}/studio`
  }
})
