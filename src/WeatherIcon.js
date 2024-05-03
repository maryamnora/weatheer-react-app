import React from "react";
import { WeatherSvg } from "weather-icons-animated";


export default function WeatherIcon(props){
const codeMapping={
    "01d":"sunny",
    "01n":"clear-night",
    "02d":"partlycloudy",
    "02n":"partlycloudy",
    "03d":"partlycloudy",
    "03n":"partlycloudy",
    "04d":"cloudy",
    "04n":"cloudy",
    "09d":"pouring",
    "09n":"pouring",
    "10d":"rainy",
    "10n":"rainy",
    "11d":"lightning",
    "11n":"lightning",
    "13d":"snowy",
    "13n":"snowy",
    "50d":"windy",
    "50n":"windy",
};
    return (
    <WeatherSvg state={codeMapping[props.code]} width={props.size} height={props.size}  />
);
}