import React, { useEffect, useState, useCallback } from 'react'
import ReactGoogleAutocomplete from 'react-google-autocomplete'
import ReactLoading from 'react-loading'
import { fetchAllData } from './api'
import FiveDays from './components/FiveDays'
import Today from './components/Today'
import { AllForecastDataType } from './types'
import './App.css'

const PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API

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
        {/* <ReactGoogleAutocomplete
          apiKey={PLACES_API_KEY}
          
        /> */}
        {/* TODO: autocomplete */}
      </form>
      {weatherData ? (
        <>
          <Today data={weatherData?.today} />
          <FiveDays data={weatherData?.fiveDays} />
        </>
      ): <ReactLoading type='spin' height={45} width={45} color='black'/>}
    </div>
  )
}

export default App
