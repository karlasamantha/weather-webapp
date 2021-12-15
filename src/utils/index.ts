import { FiveDaysForecastDataType, TodayForecastDataType } from "../types"

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
  return `${Math.round(temperature).toString()}°`
}

export const getFormattedUnit = (quantity: number, unit: string): string => {
  return `${quantity.toString()}${unit}`
}

export const isDayTime = (sunriseTimestamp: number, sunsetTimestamp: number): boolean => {
  const hours = new Date().getHours()
  const sunriseHour = new Date(sunriseTimestamp * 1000).getHours()
  const sunsetHour = new Date(sunsetTimestamp * 1000).getHours()
  return hours > sunriseHour && hours < sunsetHour ? true : false
}

export const getFormattedWeekday = (timestamp: number): string => {
  const day = new Date(timestamp * 1000).getDay()
  return `${days[day]}`
}

export const groupForecastByDay = (data: FiveDaysForecastDataType) => {
  // setting to any to bypass tslint error
  return data.list.reduce((group: any, item: any) => {
    const date = item.dt_txt.substring(0, 10)
    group[date] = group[date] || []
    group[date].push(item)
    return group
  }, {})
}

export const calculateAverage = (arr: number[]) => {
  return Math.round(arr.reduce((acc, next) => acc + next) / arr.length)
}

export const getAveragePerDay = 
  (
    forecast: TodayForecastDataType[], 
    min: number[] = [],
    max: number[] = [],
    wind: number[] = [],
    humidity: number[] = [],
  ) => {
  // eslint-disable-next-line array-callback-return
  forecast.map((item: TodayForecastDataType) => {
    min.push(item.main.temp_min);
    max.push(item.main.temp_max);
    wind.push(item.wind.speed);
    humidity.push(item.main.humidity)
  })

  const minTemp: number = Math.round(Math.min(...min))
  const maxTemp: number = Math.round(Math.max(...max))
  const windAvg: number = calculateAverage(wind)
  const humidityAvg: number = calculateAverage(humidity)

  return {minTemp, maxTemp, windAvg, humidityAvg}
}