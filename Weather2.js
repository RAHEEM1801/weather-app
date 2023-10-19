import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
function Weather2() {
    var [dat,setDat]=useState([])
    var [weat,setWeat]=useState('hyderabad')

    var inp=useRef()
   useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weat}&appid=2b9b73029dec52de447364ca95e1f215`)
    .then((res)=>{
        setDat([res.data])
        console.log(dat);
    })
    .catch((err)=>{
        console.log("err found");
    })

   },[weat]) 

var bac=()=>{
  var inp2=inp.current.value;
setWeat(inp2)
   
    }

  return (
    <div>
      
        <div className='box'>
          <img src='./imgs/weat5.png'width={'340px'}height={'150px'}></img><br></br><br></br>
        <input class="btn btn-light" type='search' placeholder='enter-city' ref={inp}></input>
      
      <button  class="btn btn-info" onClick={bac}>click</button>
       {dat.map((aaa)=>{
        return(<div >
        {console.log(aaa.main.temp)}
        
        <p>City:{aaa.name}</p>
        <p>Temp:{Math.trunc(aaa.main.temp-273)}°C</p>
       
        
        
        </div>)
       })}
    </div></div>
    
  )
}

export default Weather2;