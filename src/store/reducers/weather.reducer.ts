import { TodayForecastDataType } from "../../types"

const INITIAL_STATE: TodayForecastDataType = {
  coord: {
    lat: 49.2497,
    lon: -123.1193
  },
  dt: 1639118652,
  id: 6173331,
  main: {
    "temp": 0.82,
    "feels_like": 0.82,
    "temp_min": -0.77,
    "temp_max": 2.91,
    "pressure": 1014,
    "humidity": 95
  },
    name: 'Vancouver',
    sys: {
      "type": 2,
      "id": 2011597,
      "country": "CA",
      "sunrise": 1639065366,
      "sunset": 1639095253
  },
    weather: [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    wind: {
    "speed": 0.45,
    "deg": 23,
    "gust": 1.34
  }
}

const weatherReducer = (state = INITIAL_STATE) => {

}

export default weatherReducer