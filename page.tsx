import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CreditCard, Phone, UserSquare2, FileText } from "lucide-react"

const features = [
  {
    title: "Генератор ИНН",
    description: "Создание случайного ИНН физического лица с корректной контрольной суммой",
    icon: CreditCard,
    href: "/inn",
  },
  {
    title: "Генератор СНИЛС",
    description: "Генерация номера СНИЛС с учетом всех правил формирования",
    icon: UserSquare2,
    href: "/snils",
  },
  {
    title: "Генератор Паспорта",
    description: "Создание случайных паспортных данных в формате серия и номер",
    icon: FileText,
    href: "/passport",
  },
  {
    title: "Генератор Телефона",
    description: "Генерация случайного номера мобильного телефона российского формата",
    icon: Phone,
    href: "/phone",
  },
]

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Генератор случайных данных</h1>
        <p className="text-muted-foreground">Набор инструментов для генерации различных типов персональных данных</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.href} className="transition-colors hover:bg-muted/50">
              <Link href={feature.href}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Link>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

