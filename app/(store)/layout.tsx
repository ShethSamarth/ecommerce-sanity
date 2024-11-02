import { ClerkProvider } from "@clerk/nextjs"

import { Header } from "@/components/header"

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider dynamic>
      <Header />
      <main>{children}</main>
    </ClerkProvider>
  )
}

export default StoreLayout
