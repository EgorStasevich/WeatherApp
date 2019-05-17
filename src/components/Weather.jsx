import React from 'react';

const Weather = (props) => (
    <div>      
      {props.country&&<p>Страна: {props.country}<br/>Город:{props.city}</p>}       
      {props.temperature&&<p>Температура:{props.temperature}</p>}
      {props.humidity&&<p>Влажность:{props.humidity}</p>}
      {props.error&&<p>{props.error}</p>}
      {props.description&&<p>Дополнительно:{props.description}</p>}
    </div>
)
export default Weather;