import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { DebounceInput } from 'react-debounce-input'
import { fetchAllData } from './api'
import FiveDays from './components/FiveDays'
import Today from './components/Today'
import { AllForecastDataType } from './types'
import './App.css'
import ErrorComponent from './components/ErrorComponent'

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<AllForecastDataType>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>()

  useEffect(() => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition((position) => {
      fetchAllData(position.coords)
      .then(res => {
        setWeatherData(res)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    })

  }, [])

  useEffect(() => {
    if (!city) return
    setIsLoading(true)
  
    try {
      fetchAllData(city)
      .then(res => {
        setWeatherData(res)
      })
      setIsLoading(false)     
    } catch (error) {
      setError(error)
    }
  }, [city])

  return (
    <div>
      <DebounceInput
        minLength={4}
        debounceTimeout={350}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='search-input'
        placeholder='Search for a location'
      />
      {weatherData ? (
        <>
          <Today data={weatherData?.today} />
          <FiveDays data={weatherData?.fiveDays} />
        </>
      ) : isLoading ? 
        <ReactLoading type='spin' height={45} width={45} color='black'/> : <ErrorComponent error={error} />}
    </div>
  )
}

export default App
