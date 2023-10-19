import React, { useRef, useState } from 'react'
import'./Weather.css'
import axios from 'axios'


function Weatherapp() {
var [weat,setWeat]=useState([])

    //  var ser=useRef()

    
      // var sersto=ser.current.value
      // if(sersto!=='')
      // var search=weat.filter((ele)=>{
      //   return ele.state
      // })
      // setWeat(search)
      // console.log(search);
      var weather=()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?q={hyderabad}&appid={2b9b73029dec52de447364ca95e1f215}')
        .then((res)=>{
setWeat(res.data)
console.log(setWeat);
        })
        .catch((err)=>{
            console.log('error');
        })
    }
  return (
    <div>
        <div className='box'>
        search: <input   type='text' placeholder='enter-city'></input>  
        <button onClick={weather}>submit</button>
<table border={'2px'}><tr><th>name</th><th>temperature</th><th>humidity</th></tr>
{weat.map((ele)=>{
    return <tr><td>{ele.temp}</td><th>{ele.pressure}</th><td>{ele.name}</td><td>{ele.humidity}</td></tr>
})}
</table>

        </div>
          </div>
  )
}

export default Weatherapp;