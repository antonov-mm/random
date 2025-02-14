"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, RefreshCw } from "lucide-react"
import { generateSNILS } from "@/lib/generators"
import { useToast } from "@/components/ui/toast"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SnilsPage() {
  const [snils, setSnils] = useState("")
  const [useHyphens, setUseHyphens] = useState(true)
  const { Toast, addToast } = useToast()

  const generate = () => {
    const rawSnils = generateSNILS()
    setSnils(formatSnils(rawSnils, useHyphens))
  }

  const formatSnils = (snils: string, withHyphens: boolean) => {
    if (withHyphens) {
      return `${snils.slice(0, 3)}-${snils.slice(3, 6)}-${snils.slice(6, 9)} ${snils.slice(9)}`
    } else {
      return snils
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snils)
    addToast({ message: "СНИЛС скопирован в буфер обмена", type: "success" })
  }

  const toggleFormat = () => {
    setUseHyphens(!useHyphens)
    if (snils) {
      setSnils(formatSnils(snils.replace(/[-\s]/g, ""), !useHyphens))
    }
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
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input value={snils} readOnly placeholder="Нажмите кнопку для генерации" />
              <Button variant="outline" size="icon" onClick={copyToClipboard} disabled={!snils}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="format-switch" checked={useHyphens} onCheckedChange={toggleFormat} />
              <Label htmlFor="format-switch">Выбранный формат: {useHyphens ? "ХХХ-ХХХ-ХХХ YY" : "ХХХХХХХХХYY"}</Label>
            </div>
          </div>
        </CardContent>
      </Card>
      <Toast message="" />
    </div>
  )
}

