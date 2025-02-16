"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/toast"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface SiteSettings {
  siteName: string
  darkModeDefault: boolean
  maxPasswordLength: number
}

export default function AdminDashboardPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: "Генератор данных",
    darkModeDefault: false,
    maxPasswordLength: 32,
  })
  const router = useRouter()
  const { Toast, addToast } = useToast()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated")
    if (!isAuthenticated) {
      router.push("/admin/login")
    }
    // В реальном приложении здесь должна быть загрузка настроек с сервера
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    router.push("/admin/login")
  }

  const handleSaveSettings = () => {
    // В реальном приложении здесь должно быть сохранение настроек на сервер
    addToast({ message: "Настройки сохранены", type: "success" })
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Панель администратора</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">Название сайта</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="darkMode"
                checked={settings.darkModeDefault}
                onCheckedChange={(checked) => setSettings({ ...settings, darkModeDefault: checked })}
              />
              <Label htmlFor="darkMode">Темная тема по умолчанию</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxPasswordLength">Максимальная длина пароля</Label>
              <Input
                id="maxPasswordLength"
                type="number"
                value={settings.maxPasswordLength}
                onChange={(e) => setSettings({ ...settings, maxPasswordLength: Number.parseInt(e.target.value) })}
              />
            </div>
            <Button onClick={handleSaveSettings}>Сохранить настройки</Button>
            <Button variant="outline" onClick={handleLogout} className="ml-2">
              Выйти
            </Button>
          </form>
        </CardContent>
      </Card>
      <Toast message="" />
    </div>
  )
}

