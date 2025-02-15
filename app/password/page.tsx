"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Copy, RefreshCw } from "lucide-react"
import { generatePassword, estimatePasswordStrength } from "@/lib/generators"
import { useToast } from "@/components/ui/toast"
//import { BackButton } from "@/components/back-button"

export default function PasswordPage() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(12)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true)
  const [strength, setStrength] = useState("")
  const { Toast, addToast } = useToast()

  const generate = () => {
    const newPassword = generatePassword(length, includeSpecialChars)
    setPassword(newPassword)
    setStrength(estimatePasswordStrength(newPassword))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    addToast({ message: "Пароль скопирован в буфер обмена", type: "success" })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Генератор пароля</h1>
        <p className="text-muted-foreground">Создание случайного пароля с настраиваемыми параметрами</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">Настройки пароля</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Длина пароля: {length}</Label>
              <Slider value={[length]} onValueChange={(value) => setLength(value[0])} min={8} max={32} step={1} />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="special-chars" checked={includeSpecialChars} onCheckedChange={setIncludeSpecialChars} />
              <Label htmlFor="special-chars">Включить специальные символы</Label>
            </div>
            <Button onClick={generate} className="w-full">
              Сгенерировать пароль
            </Button>
          </div>
        </CardContent>
      </Card>

      {password && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Сгенерированный пароль
              <Button variant="outline" size="icon" onClick={generate}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Input value={password} readOnly />
              <p className="text-sm text-muted-foreground">Примерное время для взлома: {strength}</p>
              <Button variant="outline" onClick={copyToClipboard} className="w-full">
                <Copy className="h-4 w-4 mr-2" />
                Копировать
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <Toast message="" />
    </div>
  )
}

