import { useEffect, useState } from "react"
import weatherService from './../services/openweather'
import ConditionIcon from "./ConditionIcon"

const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15
}

const WeatherInfo = ({ lat, lon }) => {
    const [weatherInfo, setWeatherInfo] = useState(null)
    useEffect(() => {
        weatherService.getByCoodinates(lat, lon).then(data => {
            setWeatherInfo(data)
        }).catch(error => {
            console.log("Error in getByCoordinates", error)
        })
    }, [])
    return (
        <div>
            <p>Temperature {weatherInfo ? convertKelvinToCelsius(weatherInfo.main.temp).toFixed(2) : ''} °C</p>
            <ConditionIcon info={weatherInfo} />
            <p>Wind {weatherInfo ? weatherInfo.wind.speed : ''} m/s</p>
        </div>
    )
}

export default WeatherInfo