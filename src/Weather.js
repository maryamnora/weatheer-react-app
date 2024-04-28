import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./weatherInfo";

export default function Weather(props){
    const[ready,setReady]=useState(false);
    const[city,setCity]=useState(props.defaultCity)
    const[weatherData,setweatherData]=useState({});

    function handleResponse(response){
        setweatherData({
            date:(new Date(response.data.dt *1000)),
            temperature:(Math.round(response.data.main.temp)),
            city:(response.data.name),
            wind:(Math.round(response.data.wind.speed)),
            humidity:response.data.main.humidity,
            description:response.data.weather[0].description,
            iconurl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
        setReady(true)
    }
    function search(){
        const apikey="bc2cd97eaa209e7d22d8f3c84081655f";
        const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event){
     setCity(event.target.value);
    }
 if(ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city.." 
                className="form-control" autoFocus="on" 
                onChange={handleCityChange}/>
                </div>
                <div className="col-3">


                <input type="submit" value="search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
        </div>
        );
 }else{
    search();
    return"loading..";
 }   
}