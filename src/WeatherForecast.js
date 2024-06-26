import React,{useState,useEffect} from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"


export default function WeatherForecast(props){
let[loaded,setLoaded]=useState(false);
let[forecast,setForecast]=useState(null)
useEffect(()=>{
    setLoaded(false);
}
,[props.coordinates]
);

function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
    
  }

if(loaded){
   
    return(
 <div className="WeatherForecast">
   <div className="row">
    {forecast.map(function(dailyforecast,index){
        if (index < 5){
            return(
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyforecast}/>
   
                </div>
            );
        }else{
            return null;
        }
    })}

</div>
        </div>
);
   }else{
        
            const lat=props.coordinates.lat;
            const lon=props.coordinates.lon;
            const  apiKey="bc2cd97eaa209e7d22d8f3c84081655f";
            const apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
             axios.get(apiUrl).then(handleResponse);
             return null;
    }
}