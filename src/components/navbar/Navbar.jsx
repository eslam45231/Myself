import { Link } from "react-router-dom"
import './Navbar.css'
import { useState } from "react"
import { useEffect } from "react"
export default function Navbar({activeColors}) {
  const [activeLinks, setactiveLinks] = useState(false)
  const [ChangeNavCo, setChangeNavCo] = useState(false)
  const [activePpppage, setactivePpppage] = useState("Home")
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setChangeNavCo(true)
      }
      else{
        setChangeNavCo(false)
      }
    })
  },[])
  return (
    <>
    <div className={`Navbar `+(ChangeNavCo&&"activeNavColor")}>
<div className="logo">
<h1>Eslam</h1>
</div>
<div className="Links">
  <ul>
    <li onClick={()=>setactivePpppage("Home")}>home {activePpppage==="Home"?<hr  className="hhr" />:""} </li>
    <li onClick={()=>setactivePpppage("about")}>about {activePpppage==="about"?<hr  className="hhr" />:""}</li>
    <li onClick={()=>setactivePpppage("work")}>work {activePpppage==="work"?<hr  className="hhr" />:""}</li>
    <li onClick={()=>setactivePpppage("skills")}>skills {activePpppage==="skills"?<hr className="hhr"  />:""}</li>
    <li onClick={()=>setactivePpppage("contacts")}>contacts {activePpppage==="contacts"?<hr className="hhr" />:""}</li>
  </ul>
</div>
<div onClick={()=>setactiveLinks(!activeLinks)} className={"bars "+(activeLinks&&"ActiveMenuLInks")}>
      <span></span><span></span><span></span>
    </div>
    </div>


    </>
  )
}
