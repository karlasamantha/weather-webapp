import React from 'react'
import { WeatherIcon } from 'weather-react-icons'
import { getFormattedUnit, getFormattedWeekday, } from '../utils'
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
        <span>{`${minTemp}-${maxTemp}`}&deg;</span>
      </div>
    </div>
  )
}

export default DayAverage