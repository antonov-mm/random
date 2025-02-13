"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CreditCard, Phone, UserSquare2, FileText, Home, Menu, X } from "lucide-react"
import { useState } from "react"

const routes = [
  {
    href: "/",
    label: "Главная",
    icon: Home,
  },
  {
    href: "/inn",
    label: "Генератор ИНН",
    icon: CreditCard,
  },
  {
    href: "/snils",
    label: "Генератор СНИЛС",
    icon: UserSquare2,
  },
  {
    href: "/passport",
    label: "Генератор Паспорта",
    icon: FileText,
  },
  {
    href: "/phone",
    label: "Генератор Телефона",
    icon: Phone,
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden fixed top-2 right-4 z-50" onClick={toggleMenu}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background transition-transform duration-300 ease-in-out transform md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full pt-14 md:pt-0">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Меню</h2>
            <ul className="space-y-2">
              {routes.map((route) => {
                const Icon = route.icon
                return (
                  <li key={route.href}>
                    <Link
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                        pathname === route.href ? "bg-accent" : "",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {route.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMenu} />}
    </>
  )
}

