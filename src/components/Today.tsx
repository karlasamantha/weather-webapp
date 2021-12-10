import React from 'react'
import { TodayForecastDataType } from '../types'
import { WeatherIcon } from 'weather-react-icons'
import styles from './Today.module.css'

const Today = ({ data }: { data: TodayForecastDataType }) => {  
  return (
    <>
      <h1>{ data.name }</h1>
      <WeatherIcon 
        iconId={data.weather[0].id}
        name='owm'
        className={styles.icon}
      />
    </>
  )
}

export default Today