"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/toast"

const ADMIN_LOGIN = "admink"
const ADMIN_PASSWORD = "P@ssw0rd123!" // Сгенерированный безопасный пароль

export default function AdminLoginPage() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { Toast, addToast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      // В реальном приложении здесь должна быть более безопасная аутентификация
      localStorage.setItem("adminAuthenticated", "true")
      router.push("/admin/dashboard")
    } else {
      addToast({ message: "Неверный логин или пароль", type: "error" })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Вход для администратора</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Войти
            </Button>
          </form>
        </CardContent>
      </Card>
      <Toast message="" />
    </div>
  )
}

