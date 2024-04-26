import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./formattedDate";

export default function Weather(props){
    const[ready,setReady]=useState(false);
    const[weatherData,setweatherData]=useState({});
    function handleResponse(response){
        setweatherData({
            date:(new Date(response.data.dt *1000)),
            temperature:(Math.round(response.data.main.temp)),
            city:(response.data.name),
            wind:(Math.round(response.data.wind.speed)),
            humidity:response.data.main.humidity,
            description:response.data.weather[0].description,
            iconurl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        });
        setReady(true)
    }
 if(ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
               <FormattedDate date={weatherData.date}/>
            </li>
            <li className="text-capitalize">
                {weatherData.description}
            </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6 ms-0">
                <img src={weatherData.iconurl} alt={weatherData.description} width="60" className="ms-0 mb-4"/>
              
                    <span className="temperature">{weatherData.temperature}</span>
                    <span className="unit">°C</span>
                    </div>
                
                <div className="col-6 details">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: {weatherData.humidity}</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        
        </div>
        );
 }else{
    const apikey="bc2cd97eaa209e7d22d8f3c84081655f";
    
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apikey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    return(<p>loading...</p>);
 }

    
}