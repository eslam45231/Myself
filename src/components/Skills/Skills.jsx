import React, { useState } from 'react'
import   './Skills.css'

import { skills } from '../../Data/Skills'
import { motion } from 'framer-motion'

export default function Skills() {
  const [filterd, setfilterd] = useState(skills)
const [activeBtn, setactiveBtn] = useState("Fullstack")

 function filter(item){
  const filter=skills.filter((x)=>{ return x.type===item})
  setfilterd(filter)

 }
 
  return (
    <div className='Skills'>
      <div className="btns">
        <button onClick=
        
        {()=>
          {
            setfilterd(skills)
       setactiveBtn("Fullstack") }
      }
       
       className={activeBtn==="Fullstack"?"activeBtnn":""}>fullStack</button>
     
     
        <button onClick=
        
        {()=>
          {
            filter("frontend")
            setactiveBtn("frontend")    
}
} 
  
  
className={activeBtn==="frontend"?"activeBtnn":""}>frontend</button>
     
        <button onClick={()=>
        {
          filter("backend")
      setactiveBtn("backend")
    }
    }
       className={activeBtn==="backend"?"activeBtnn":""}>backend</button>

      </div>
    <div className="containerSkills">
    {filterd.map((x,i)=>(
            <motion.div 
            animate={{opacity:1,scale:1}}
            initial={{opacity:0,scale:0}}
            exit={{opacity:0,scale:0}}
            transition={{duration:0.5}}
            layout
              className="boxSkills">
                <img src={x.img} alt="" />
            </motion.div>
        ))}
    </div>
    </div>
  )
}
