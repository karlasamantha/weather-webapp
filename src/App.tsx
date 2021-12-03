import React, { useEffect, useState } from 'react'
import { fetchAllData } from './api'
import './App.css'
import Today from './components/Today'
import { AllForecastDataType } from './types'

function App() {
  const [city, setCity] = useState('Vancouver')
  const [weatherData, setWeatherData] = useState<AllForecastDataType>()

  useEffect(() => {
    fetchAllData(city).then(function (res) {
      setWeatherData(res)
    })

    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Got position", position.coords)
    })
  }, [city])

  console.log('today data -> ', weatherData?.today)

  return (
    <div className="App">
      <h1>Hello, is it me you're looking for?</h1>
      <Today data={weatherData?.today} />
    </div>
  )
}

export default App
