import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          Создано для демонстрационных целей. Все сгенерированные данные являются случайными и не связаны с реальными
          лицами.
        </p>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
            Правовая информация
          </Link>
          <p className="text-sm text-muted-foreground">Сайт создан antonov.mm © 2025–{currentYear}</p>
        </div>
      </div>
    </footer>
  )
}

