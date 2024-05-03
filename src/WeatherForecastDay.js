import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){

    function Day(){
      let  date=new Date(props.data.dt*1000);
      let Days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
       let day=Days[date.getDay()];
        return day;
    }
return(
    <div className="WeatherForecastDay">
  
    <div className="WeatherForecast-day">
    {Day()}
    </div>
<WeatherIcon code={props.data.weather[0].icon} size={60}/>
<div className="WeatherForecast-temperature">
<span className="WeatherForecast-temperature-max">{Math.round(props.data.temp.max)}°</span>
<span className="WeatherForecast-temperature-min">{Math.round(props.data.temp.min)}°</span>
</div>
</div>
);

}