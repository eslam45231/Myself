import React from 'react'
import './About.css'
import frontend from './OIP.jpeg'


export default function About() {
  return (
    <div id='About' className='about'>
      <div className="containerAbout">
        <div className="textContent">
          <h1>i know that <span>good design</span> means <span>good business</span></h1>
        </div>
        <div className="cardContent">
          <div className="card" id="cardAbout">
<img src={frontend} alt="" />
<h1>frontend developer</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quaerat totam non.</p>
          </div>

          <div className="card" id="cardAbout">
<img src={frontend} alt="" />
<h1>frontend developer</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quaerat totam non.</p>
          </div>

          <div className='card' id="cardAbout">
<img src={frontend} alt="" />
<h1>frontend developer</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quaerat totam non.</p>
          </div>

          <div className="card" id="cardAbout">
<img src={frontend} alt="" />
<h1>frontend developer</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quaerat totam non.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
