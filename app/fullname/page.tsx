"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, RefreshCw } from "lucide-react"
import { generateFullName } from "@/lib/generators"
import { useToast } from "@/components/ui/toast"
//import { BackButton } from "@/components/back-button"

export default function FullNamePage() {
  const [fullName, setFullName] = useState("")
  const { Toast, addToast } = useToast()

  const generate = () => {
    setFullName(generateFullName())
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullName)
    addToast({ message: "ФИО скопировано в буфер обмена", type: "success" })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Генератор ФИО</h1>
        <p className="text-muted-foreground">Создание случайных фамилии, имени и отчества</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Сгенерированное ФИО
            <Button variant="outline" size="icon" onClick={generate}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input value={fullName} readOnly placeholder="Нажмите кнопку для генерации" />
            <Button variant="outline" onClick={copyToClipboard} disabled={!fullName} className="w-full">
              <Copy className="h-4 w-4 mr-2" />
              Копировать
            </Button>
          </div>
        </CardContent>
      </Card>
      <Toast message="" />
    </div>
  )
}

