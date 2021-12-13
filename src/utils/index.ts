const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

export const getTodayDate = (): string => {
  const today = new Date()
  return `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}`
}

export const getFormattedTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  return `${date.getHours()}:${date.getMinutes()}`
}

export const getFormattedTemperature = (temperature: number): string => {
  return `${Math.floor(temperature).toString()}°`
}

export const getFormattedUnit = (quantity: number, unit: string): string => {
  return `${quantity.toString()}${unit}`
}