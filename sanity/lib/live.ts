import "server-only"

import { defineLive } from "next-sanity"

import { client } from "./client"

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
  fetchOptions: { revalidate: 0 }
})
