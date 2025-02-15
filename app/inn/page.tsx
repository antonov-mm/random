"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, RefreshCw } from "lucide-react"
import { generateINN } from "@/lib/generators"
import { toast } from "sonner"

export default function InnPage() {
  const [inn, setInn] = useState("")

  const generate = () => {
    setInn(generateINN())
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inn)
    toast.success("ИНН скопирован в буфер обмена")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Генератор ИНН</h1>
        <p className="text-muted-foreground">
          Создание случайного ИНН физического лица с корректной контрольной суммой
          ИНН (идентификационный номер налогоплательщика) физического лица или индивидуального предпринимателя (ИП) — цифровой код налогоплательщиков РФ. На данной странице Вы можете сформировать один или несколько случайных валидных ИНН физических лиц и ИП. 
          Полученные данные можно использовать, например, для заполнения тестовой БД.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Сгенерированный ИНН
            <Button variant="outline" size="icon" onClick={generate}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input value={inn} readOnly placeholder="Нажмите кнопку для генерации" />
            <Button variant="outline" size="icon" onClick={copyToClipboard} disabled={!inn}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

