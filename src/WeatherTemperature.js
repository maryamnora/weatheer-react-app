import React,{useState} from "react";

export default function WeatherTemperature(props){
    const[unit,setUnit]=useState("celsius")

function Fahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");    
}
function Celsius(event){
    event.preventDefault();
    setUnit("celsius");
}
function Far(){
    return(props.celsius*9/5+32)
}
if (unit==="celsius"){
return(
<span className="WeatherTemperature">
<span className="temperature">{props.celsius}</span>
<span className="unit">°C | 
<a href="/" onClick={Fahrenheit}>°F</a></span>

</span>
    );
}else{
    return(
<span className="WeatherTemperature">
<span className="temperature">{Math.round(Far())}</span>
<span className="unit"><a href="/" onClick={Celsius}> °C </a>| 
°F</span>
</span>

    )
;}
}