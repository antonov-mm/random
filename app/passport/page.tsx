"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, RefreshCw } from "lucide-react"
import { generatePassport } from "@/lib/generators"
import { toast } from "sonner"

export default function PassportPage() {
  const [passport, setPassport] = useState("")

  const generate = () => {
    setPassport(generatePassport())
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(passport)
    toast.success("Паспортные данные скопированы в буфер обмена")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Генератор паспортных данных</h1>
        <p className="text-muted-foreground">На данной странице Вы можете сформировать один или несколько случайных ФИО. 
          Полученные данные можно использовать, например, для заполнения тестовой БД.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Сгенерированные паспортные данные
            <Button variant="outline" size="icon" onClick={generate}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input value={passport} readOnly placeholder="Нажмите кнопку для генерации" />
            <Button variant="outline" size="icon" onClick={copyToClipboard} disabled={!passport}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

