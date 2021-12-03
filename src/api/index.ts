import axios from 'axios'
import { AllForecastDataType, FiveDaysForecastDataType, TodayForecastDataType } from '../types'

// OpenWeatherMap API Key
const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
// OpenWeather base url
const WEATHER_URL = `https://api.openweathermap.org/data/2.5`

// TODO: need to build the type of input, so we can pass latitude and longitude
export const getTodayWeatherData = (city: string | GeolocationCoordinates): Promise<TodayForecastDataType> => {
  return axios
    .get<TodayForecastDataType>(`${WEATHER_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw Error(`There was an issue retrieving today's forecast: ${error}`)
    })
}

export const getFiveDaysForecastData = (city: string | GeolocationCoordinates): Promise<FiveDaysForecastDataType> => {
  return axios
    .get(`${WEATHER_URL}/forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw Error(`There was an issue retrieving the forecast for the next 5 days: ${error}`)
    })
}

export const fetchAllData = async (city: string): Promise<AllForecastDataType> => {
  try {
    const today = await getTodayWeatherData(city)
    const fiveDays = await getFiveDaysForecastData(city)

    return {
      today, fiveDays
    }
  } catch (error) {
    throw Error(`There was an error: ${error}`)
  }
}