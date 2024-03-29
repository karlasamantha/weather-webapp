import axios from 'axios'
import { AllForecastDataType, FiveDaysForecastDataType, TodayForecastDataType } from '../types'

// OpenWeatherMap API Key
const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
// OpenWeather base url
const WEATHER_URL = `https://api.openweathermap.org/data/2.5`

export const getTodayWeatherData = (city: string | GeolocationCoordinates): Promise<TodayForecastDataType> => {
  if ( typeof city === 'string' && !city.length) {
    throw Error(`City cannot be empty`)
  }

  let url = `${WEATHER_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`

  if (typeof city !== 'string' && (city.latitude && city.longitude)) {
    url = `${WEATHER_URL}/weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${WEATHER_API_KEY}`
  }

  return axios
    .get<TodayForecastDataType>(url)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw Error(`There was an issue retrieving today's forecast: ${error}`)
    })
}

export const getFiveDaysForecastData = (city: string | GeolocationCoordinates): Promise<FiveDaysForecastDataType> => {
  if ( typeof city === 'string' && !city.length) {
    throw Error(`City cannot be empty`)
  }

  let url = `${WEATHER_URL}/forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`

  if (typeof city !== 'string' && (city.latitude && city.longitude)) {
    url = `${WEATHER_URL}/forecast?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${WEATHER_API_KEY}`
  }

  return axios
    .get(url)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw Error(`There was an issue retrieving the forecast for the next 5 days: ${error}`)
    })
}

export const fetchAllData = async (city: string | GeolocationCoordinates): Promise<AllForecastDataType> => {
  if ( typeof city === 'string' && !city.length) {
    throw Error(`City cannot be empty`)
  }

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