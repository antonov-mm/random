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
  const series = getRandomInt(10, 99).toString().padStart(2, "0")
  const number = getRandomInt(10, 99).toString().padStart(2, "0") + " " + getRandomInt(100000, 999999).toString()
  const issuedBy = "ГУ МВД России по " + getRandomRegion()
  const departmentCode = getRandomInt(100, 999).toString() + "-" + getRandomInt(100, 999).toString()

  return `${series} ${number}, выдан ${issuedBy}, к/п ${departmentCode}`
}

// Вспомогательная функция для получения случайного региона
const getRandomRegion = (): string => {
  const regions = [
    "Московской области",
    "Ленинградской области",
    "Пермскому краю",
    "Свердловской области",
    "Новосибирской области",
    "Краснодарскому краю",
    "Республике Татарстан",
    "Нижегородской области",
    "Самарской области",
    "Челябинской области",
  ]
  return regions[Math.floor(Math.random() * regions.length)]
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

// Генерация ФИО
export const generateFullName = (): string => {
  const isMale = Math.random() < 0.5

  const maleFirstNames = [
    "Александр",
    "Дмитрий",
    "Максим",
    "Сергей",
    "Андрей",
    "Алексей",
    "Артём",
    "Илья",
    "Кирилл",
    "Михаил",
  ]
  const femaleFirstNames = [
    "Анна",
    "Елена",
    "Мария",
    "Ольга",
    "Светлана",
    "Татьяна",
    "Екатерина",
    "Наталья",
    "Юлия",
    "Ирина",
  ]

  const maleLastNames = [
    "Иванов",
    "Смирнов",
    "Кузнецов",
    "Попов",
    "Васильев",
    "Петров",
    "Соколов",
    "Михайлов",
    "Новиков",
    "Фёдоров",
  ]
  const femaleLastNames = [
    "Иванова",
    "Смирнова",
    "Кузнецова",
    "Попова",
    "Васильева",
    "Петрова",
    "Соколова",
    "Михайлова",
    "Новикова",
    "Фёдорова",
  ]

  const maleMiddleNames = [
    "Александрович",
    "Дмитриевич",
    "Максимович",
    "Сергеевич",
    "Андреевич",
    "Алексеевич",
    "Артёмович",
    "Ильич",
    "Кириллович",
    "Михайлович",
  ]
  const femaleMiddleNames = [
    "Александровна",
    "Дмитриевна",
    "Максимовна",
    "Сергеевна",
    "Андреевна",
    "Алексеевна",
    "Артёмовна",
    "Ильинична",
    "Кирилловна",
    "Михайловна",
  ]

  const firstName = isMale
    ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
    : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)]

  const lastName = isMale
    ? maleLastNames[Math.floor(Math.random() * maleLastNames.length)]
    : femaleLastNames[Math.floor(Math.random() * femaleLastNames.length)]

  const middleName = isMale
    ? maleMiddleNames[Math.floor(Math.random() * maleMiddleNames.length)]
    : femaleMiddleNames[Math.floor(Math.random() * femaleMiddleNames.length)]

  return `${lastName} ${firstName} ${middleName}`
}

// Генерация пароля
export const generatePassword = (length: number, includeSpecialChars: boolean): string => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const special = "!@#$%^&*()_+~`|}{[]:;?><,./-="

  let chars = lowercase + uppercase + numbers
  if (includeSpecialChars) chars += special

  let password = ""
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return password
}

// Оценка времени взлома пароля
export const estimatePasswordStrength = (password: string): string => {
  const length = password.length
  const hasLower = /[a-z]/.test(password)
  const hasUpper = /[A-Z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecial = /[^A-Za-z0-9]/.test(password)

  let possibleChars = 0
  if (hasLower) possibleChars += 26
  if (hasUpper) possibleChars += 26
  if (hasNumber) possibleChars += 10
  if (hasSpecial) possibleChars += 33

  const combinations = Math.pow(possibleChars, length)
  const secondsToBreak = combinations / 1000000000 // Предполагаем, что компьютер может проверить 1 миллиард паролей в секунду

  if (secondsToBreak < 60) return "меньше минуты"
  if (secondsToBreak < 3600) return `${Math.round(secondsToBreak / 60)} минут`
  if (secondsToBreak < 86400) return `${Math.round(secondsToBreak / 3600)} часов`
  if (secondsToBreak < 31536000) return `${Math.round(secondsToBreak / 86400)} дней`
  return `${Math.round(secondsToBreak / 31536000)} лет`
}

