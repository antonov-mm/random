"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ToastProps {
  message: string
  type?: "success" | "error"
  duration?: number
}

export const Toast = ({ message, type = "success", duration = 3000 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 px-4 py-2 rounded-md text-white",
        type === "success" ? "bg-green-500" : "bg-red-500",
      )}
    >
      {message}
    </div>
  )
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = (toast: ToastProps) => {
    setToasts((prev) => [...prev, toast])
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, toast.duration || 3000)
  }

  return { Toast, addToast }
}

