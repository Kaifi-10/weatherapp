import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox'
import WeatherCard from './WeatherCard'

function Weather() {
    const API_KEY = "4028303e5cce4a87a51162528242707"
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)


    // useEffect(() =>{
    //     fetchWeatherData('London')
    // })
    const fetchWeatherData = async (city) => {
        try {
            setLoading(true)
            const response = await axios.get(
                `https://api.weatherapi.com/v1/current.json`,{
                    params: {
                        key: API_KEY,
                        q: city,
                    }
                }
            );
            // setCity(response.data);
            setWeatherData(response.data)
            console.log(response.data)
            // console.log(city)
            setLoading(false)
        } catch (error) {
            alert('Failed to fetch weather data', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <SearchBox onSearch={fetchWeatherData} />
                {loading ? <p style={{color: '#000'}}>Loading data...</p> : (
                    <div>
                        {weatherData && 
                        <div style={{
                            display:'flex',
                            margin: '10px',
                            marginRight: '10px',
                        }}>
                        <WeatherCard title="Temperature" data={`${weatherData.current.temp_c}°C`}/>
                        <WeatherCard title="Humidity" data={`${weatherData.current.humidity}%`}/>
                        <WeatherCard title="Condition" data={weatherData.current.condition.text}/>
                        <WeatherCard title="Wind Speed" data={`${weatherData.current.wind_kph}kph`}/>
                        </div>}

                    </div>
                    

                )}
                {/* <WeatherCard data={weatherData.current.temp_c}/> */}
                

            </header>
           
        </div>
    );
}

export default Weather