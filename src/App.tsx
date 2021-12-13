import React, { useEffect, useState, useCallback } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { fetchAllData } from './api'
import './App.css'
import Today from './components/Today'
import { AllForecastDataType } from './types'

function App() {
  const [city, setCity] = useState('Vancouver')
  const [weatherData, setWeatherData] = useState<AllForecastDataType>()
  const [location, setLocation] = useState<GeolocationCoordinates>()

  const fetchData = useCallback(() => {
    fetchAllData(city).then(res => {
      setWeatherData(res)
    })
  
  }, [city])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Got position", position.coords)
      setLocation(position.coords)
    })

    fetchData()

  }, [fetchData])

  return (
    <div>
      <form>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          type='text'
          name='location'
          placeholder='Search for a location'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* TODO: autocomplete */}
      </form>
      {weatherData && <Today data={weatherData?.today} />}
    </div>
  )
}

export default App
