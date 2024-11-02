import { ClerkProvider } from "@clerk/nextjs"

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider dynamic>{children}</ClerkProvider>
}

export default StoreLayout
