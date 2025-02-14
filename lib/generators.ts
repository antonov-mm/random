// Функции для генерации случайных чисел
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Генерация ИНН (10 цифр для физ. лиц)
export const generateINN = (): string => {
  const region = getRandomInt(1, 99).toString().padStart(2, "0")
  const inspection = getRandomInt(1, 99).toString().padStart(2, "0")
  const number = getRandomInt(100000, 999999).toString()

  const nums = (region + inspection + number).split("").map(Number)

  // Вычисление контрольных цифр
  const n10 =
    ((2 * nums[0] +
      4 * nums[1] +
      10 * nums[2] +
      3 * nums[3] +
      5 * nums[4] +
      9 * nums[5] +
      4 * nums[6] +
      6 * nums[7] +
      8 * nums[8]) %
      11) %
    10

  return region + inspection + number + n10
}

// Генерация СНИЛС
export const generateSNILS = (): string => {
  const areaNum = getRandomInt(1, 999).toString().padStart(3, "0")
  const personNum = getRandomInt(1, 999).toString().padStart(3, "0")
  const recordNum = getRandomInt(1, 999).toString().padStart(3, "0")

  const number = areaNum + personNum + recordNum
  const nums = number.split("").map(Number)

  // Вычисление контрольного числа
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += nums[i] * (9 - i)
  }
  const checkNum = (sum % 101).toString().padStart(2, "0")

  return number + checkNum
}

// Генерация паспорта РФ
export const generatePassport = (): string => {
  const series = getRandomInt(1000, 9999).toString()
  const number = getRandomInt(100000, 999999).toString()

  return `${series} ${number}`
}

// Генерация номера телефона
export const generatePhone = (): string => {
  const codes = [
    "900",
    "901",
    "902",
    "903",
    "904",
    "905",
    "906",
    "908",
    "909",
    "910",
    "911",
    "912",
    "913",
    "914",
    "915",
    "916",
    "917",
    "918",
    "919",
  ]
  const code = codes[Math.floor(Math.random() * codes.length)]
  const number = getRandomInt(1000000, 9999999).toString()

  return `+7 ${code} ${number.slice(0, 3)} ${number.slice(3)}`
}

