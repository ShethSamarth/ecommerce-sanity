"use client"

import Form from "next/form"
import Link from "next/link"
import { PackageIcon, TrolleyIcon } from "@sanity/icons"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs"

export const Header = () => {
  const { isSignedIn, isLoaded, user } = useUser()

  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-2">
      <div className="flex w-full flex-wrap items-center justify-between gap-y-4">
        <Link
          href="/"
          className="mx-auto text-2xl font-bold text-blue-500 hover:opacity-50 sm:mx-0"
        >
          Shopr
        </Link>

        <Form
          action="/search"
          className="mt-2 w-full sm:mx-4 sm:mt-0 sm:w-auto sm:flex-1"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="w-full max-w-4xl rounded border bg-gray-100 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </Form>

        <div className="flex flex-1 items-center space-x-4 sm:flex-none">
          <Link
            href="/basket"
            className="relative flex flex-1 items-center justify-center space-x-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 sm:flex-none sm:justify-start"
          >
            <TrolleyIcon className="size-6" />
            <span>My Basket</span>
          </Link>

          {isLoaded && isSignedIn ? (
            <>
              <Link
                href="/orders"
                className="flex flex-1 items-center justify-center space-x-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 sm:flex-none sm:justify-start"
              >
                <PackageIcon className="size-6" />
                <span>My Orders</span>
              </Link>

              <div className="flex items-center space-x-2">
                <UserButton />

                <div className="hidden text-xs sm:block">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            </>
          ) : (
            <SignInButton mode="modal" />
          )}
        </div>
      </div>
    </header>
  )
}
