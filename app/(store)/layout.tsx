import { ClerkProvider } from "@clerk/nextjs"

import { Header } from "@/components/header"
import { SanityLive } from "@/sanity/lib/live"

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider dynamic>
      <Header />
      <main>{children}</main>

      <SanityLive />
    </ClerkProvider>
  )
}

export default StoreLayout
