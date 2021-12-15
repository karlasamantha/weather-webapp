import React from 'react'
import DayAverage from './DayAverage'
import {
  getAveragePerDay,
  groupForecastByDay
} from '../utils'
import { FiveDaysForecastDataType, ForecastPerDayType } from '../types'
import styles from './FiveDays.module.css'

const FiveDays = ({ data }: { data: FiveDaysForecastDataType }) => {
  const forecast: ForecastPerDayType[] = Object.values(groupForecastByDay(data))
  // In the case the grouping returns the forecast for six days,
  // we trim the data to make sure we're only showing the next five days
  const fiveDays = forecast.length > 5 ? forecast.slice(0, 5) : forecast

  return (
    <div>
      <h3>Next 5 Days</h3>
      {/* TODO: fix any type here */}
      <div className={styles.container}>
        {fiveDays.map((day: any, index: number) => (
            <DayAverage
              {...getAveragePerDay(day)}
              key={index}
              timestamp={day[index].dt}
              icon={day[index].weather[0].id}
            />
          )
        )}
      </div>
    </div>
  )
}

export default FiveDays
