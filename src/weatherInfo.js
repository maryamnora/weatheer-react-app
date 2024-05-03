import React from "react";
import FormattedDate from "./formattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from"./WeatherTemperature.js";

export default function WeatherInfo(props){
    return (<div className="weatherInfo">
         <h1>{props.data.city}</h1>
        <ul>
            <li>
               <FormattedDate date={props.data.date}/>
            </li>
            <li className="text-capitalize">
                {props.data.description}
            </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6 ps-2 ">
                <WeatherIcon code={props.data.icon} size={90} />
                <WeatherTemperature celsius={props.data.temperature} />
                
                    </div>
                
                <div className="col-6 details">
                    <ul>
                        <li>Humidity: {props.data.humidity}</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        
    </div>

    );

    
}