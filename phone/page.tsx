"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, RefreshCw } from "lucide-react"
import { generatePhone } from "@/lib/generators"
import { toast } from "sonner"

export default function PhonePage() {
  const [phone, setPhone] = useState("")

  const generate = () => {
    setPhone(generatePhone())
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phone)
    toast.success("Номер телефона скопирован в буфер обмена")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Генератор номера телефона</h1>
        <p className="text-muted-foreground">Генерация случайного номера мобильного телефона российского формата</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Сгенерированный номер телефона
            <Button variant="outline" size="icon" onClick={generate}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input value={phone} readOnly placeholder="Нажмите кнопку для генерации" />
            <Button variant="outline" size="icon" onClick={copyToClipboard} disabled={!phone}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

