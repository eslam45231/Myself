import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import './Page.css'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
export default function Page() {
  
  const [activeContainerColors, setactiveContainerColors] = useState(false)
  const [activePage, setactivePage] = useState("Home")
  const [activeColors, setactiveColors] = useState("white")
  return (
    <div className={`Page ${activeColors}`}>
      <div className={"containerColors " +(activeContainerColors&&"ActivecontainerColors")}>
        <div className="boxColor">
          <div className="colors">
          <p onClick={()=>setactiveColors("red")} className='red'></p>
          <p onClick={()=>setactiveColors("white")} className='white'></p>
          <p onClick={()=>setactiveColors("black")} className='black'></p>
          <p onClick={()=>setactiveColors("aqua")} className='aqua'></p>
          <p onClick={()=>setactiveColors("yellow")} className='yellow'></p>
          <p onClick={()=>setactiveColors("green")} className='green'></p>
          </div>
          <div className="settings">
            <h5 onClick={()=>setactiveContainerColors(!activeContainerColors)}> <i className={activeContainerColors===true?"fas fa-spinner fa-spin ":"fa-solid fa-gear"}></i> </h5>
          </div>
        </div>
      </div>
      <div className="bullets">
      <p className={activePage==="Home"?"activePPage":"" } onClick={()=>setactivePage("Home")}> <a href="#Home">  </a> </p>
      <p className={activePage==="About"?"activePPage":""} onClick={()=>setactivePage("About")}> <a href="#About"> </a> </p>

      </div>
        <Navbar activeColors={activeColors}/>
        <Home/>
<About/>
<Skills/>
    </div>
  )
}
