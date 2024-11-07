"use client"

import { KeyboardEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronsUpDown } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Category } from "@/sanity.types"
import { Button } from "@/components/ui/button"

interface CategorySelectorProps {
  categories: Category[]
}

export const CategorySelector = ({ categories }: CategorySelectorProps) => {
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const selectedCategory = categories.find((category) =>
        category.title
          ?.toLowerCase()
          .includes(e.currentTarget.value.toLowerCase())
      )

      if (selectedCategory) {
        setValue(selectedCategory._id)
        router.push(`/categories/${selectedCategory.slug?.current}`)
        setOpen(false)
      }
    }
  }

  const onSelect = (category: Category) => {
    setValue(value === category._id ? "" : category._id)
    router.push(`/categories/${category.slug?.current}`)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          variant="outline"
          aria-expanded={open}
          className="relative flex w-full items-center justify-center space-x-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 hover:text-white sm:flex-none sm:justify-between"
        >
          {value
            ? categories.find((category) => category._id === value)?.title
            : "Filter by Category"}
          <ChevronsUpDown className="ml-2 size-4 shrink-0" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            className="h-9"
            onKeyDown={onKeyDown}
            placeholder="Search Category"
          />

          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category._id}
                  value={category.title}
                  onSelect={() => onSelect(category)}
                >
                  {category.title}
                  {category._id === value && (
                    <Check className="ml-auto size-4" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
