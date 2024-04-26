import React from "react";

export default function FormattedDate(props){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thutsday","Friday","Saturday"];
    let Day=days[props.date.getDay()];
    let Hours=props.date.getHours();
    if (Hours<10){
        Hours=`0${Hours}`
    }
    let Minutes=props.date.getMinutes();
    if (Minutes<10){
        Minutes=`0${Minutes}`
    }
    return(
        <div>
            {Day} {Hours}:{Minutes}
        </div>
    );
}