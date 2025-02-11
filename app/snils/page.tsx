"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, RefreshCw } from "lucide-react"
import { generateSNILS } from "@/lib/generators"
import { toast } from "sonner"

export default function SnilsPage() {
  const [snils, setSnils] = useState("")

  const generate = () => {
    setSnils(generateSNILS())
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snils)
    toast.success("СНИЛС скопирован в буфер обмена")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Генератор СНИЛС</h1>
        <p className="text-muted-foreground">Генерация номера СНИЛС с учетом всех правил формирования</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Сгенерированный СНИЛС
            <Button variant="outline" size="icon" onClick={generate}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input value={snils} readOnly placeholder="Нажмите кнопку для генерации" />
            <Button variant="outline" size="icon" onClick={copyToClipboard} disabled={!snils}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

