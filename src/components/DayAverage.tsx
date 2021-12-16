import React from 'react'
import { WeatherIcon } from 'weather-react-icons'
import { getFormattedWeekday } from '../utils'
import styles from './DayAverage.module.css'

const DayAverage = (
  {
    minTemp,
    maxTemp,
    windAvg,
    humidityAvg,
    timestamp,
    icon,
  }:{
    minTemp: number,
    maxTemp: number,
    windAvg: number,
    humidityAvg: number
    timestamp: number
    icon: number
  }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <span>{getFormattedWeekday(timestamp)}</span>
        <WeatherIcon 
          iconId={icon}
          name='owm'
          className={styles.icon}
        />
        <span className={styles.minmax}>{`${minTemp}-${maxTemp}`}&deg;</span>

        {/* We only render these elements on larger screens */}
        <span className={styles.min}>
          {`${minTemp}`}&deg;
          <label>Low</label>
        </span>
        <span className={styles.max}>
          {`${maxTemp}`}&deg;
          <label>High</label>
        </span>
        <span className={styles.wind}>
          {windAvg}km/h
          <label>Wind</label>
        </span>
        <span className={styles.humidity}>
          {humidityAvg}%
          <label>Humidity</label>
        </span>
      </div>
    </div>
  )
}

export default DayAverage