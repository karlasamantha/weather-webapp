export interface TodayForecastDataType {
  data: {
    base: string,
    clouds: {
      all: number
    },
    cod?: number,
    coord: CoordinatesInterface,
    dt: number,
    id: number,
    main: MainForecastDataType,
    name: string,
    sys: SysDataType,
    timezone: number,
    visibility: number,
    weather: WeatherDataType[],
    wind: WindDataType
  }
}

export interface MainForecastDataType {
  feels_like: number,
  grnd_level?: number
  humidity: number,
  pressure: number,
  sea_level?: number,
  temp: number,
  temp_max: number,
  temp_min: number,
  temp_kf?: number
}

export interface SysDataType {
  country?: string,
  id?: number,
  sunrise?: number,
  sunset?: number,
  type?: number
  pod?: number
}

export interface WeatherDataType {
  description: string,
  icon: string,
  id: number,
  main: string
}

export interface WindDataType {
  deg: number,
  gust: number,
  speed: number
}

export interface CoordinatesInterface {
  lon: number,
  lat: number
}

export interface CityLocationDataType {
  coord: CoordinatesInterface,
  country: string,
  id: number,
  name: string,
  population: number,
  sunrise: number,
  sunset: number,
  timezone: number
}

export interface FiveDaysForecastDataType {
  city: CityLocationDataType,
  cnt: number,
  cod?: string
  list: ForecastPerDayType[]
}

export interface ForecastPerDayType {
  clouds: {
    all: number
  },
  dt: number,
  dt_txt: string,
  main: MainForecastDataType,
  pop?: number,
  sys: SysDataType,
  visibility: number,
  weather: WeatherDataType,
  wind: WindDataType
}

export interface AllForecastDataType {
  today: TodayForecastDataType,
  fiveDays: FiveDaysForecastDataType
}