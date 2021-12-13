import React from 'react'
import Details from './Details'
import { WeatherIcon } from 'weather-react-icons'
import { TodayForecastDataType } from '../types'
import { 
  getFormattedTime,
  getFormattedTemperature,
  getFormattedUnit,
  getTodayDate
} from '../utils'
import styles from './Today.module.css'

const Today = ({ data }: { data: TodayForecastDataType }) => {
  return (
    <>
      <div className={styles.location}>
        <h2>{`${data.name}, ${data.sys.country}`}</h2>
        <h3>{getTodayDate()}</h3>
      </div>

      <div className={styles.forecast}>
        <WeatherIcon 
          iconId={data.weather[0].id}
          name='owm'
          className={styles.icon}
          night
        />

        <div className={styles.temperature}>
          <h1>{Math.floor(data.main.temp)}&deg;</h1>
          <span>{data.weather[0].description}</span>
        </div>
      </div>

      <hr />

      <div className={styles.details}>
        <Details info={getFormattedTemperature(data.main.temp_max)} desc='High' />
        <Details info={getFormattedUnit(data.wind.speed, 'km/h')} desc='Wind' />
        {data.sys.sunrise && <Details info={getFormattedTime(data.sys.sunrise)} desc='Sunrise' />}
        <Details info={getFormattedTemperature(data.main.temp_min)} desc='Low' />
        <Details info={getFormattedUnit(data.main.humidity, '%')} desc='Humidity' />
        {data.sys.sunset && <Details info={getFormattedTime(data.sys.sunset)} desc='Sunset' />}
      </div>

      <hr />
    </>
  )
}

export default Today