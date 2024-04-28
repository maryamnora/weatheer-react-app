import React from "react";
import FormattedDate from "./formattedDate";

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
                <div className="col-6 ms-0">
                <img src={props.data.iconurl} alt={props.data.description} width="80" className="ms-0 mb-4"/>
              
                    <span className="temperature">{props.data.temperature}</span>
                    <span className="unit">°C</span>
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