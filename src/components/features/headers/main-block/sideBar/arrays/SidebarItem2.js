import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import '../components/slidebar.css';
export default function SidebarItem2({elm2}) {
    const [sideopen,setSideopen] = useState(true)
    const [sideopen2,setSideopen2] = useState(false)
    if(elm2.childrens){
         return (
    <div className={sideopen?'sidebar-opened open item':'sidebar-opened item'}>
     <div className='main-titls'> <p onClick={()=>setSideopen(!sideopen)}>
        {elm2.title} <IoIosArrowDown className='cheveron-down toogle-btn'/> </p>
        
         </div>
        <div className={sideopen2?'entamenu2':'entamenu2non'}>
            {elm2.childrens.map((ch2)=> <SidebarItem2 elm2={ch2}/>)}
         </div>
    </div>

  )
    }
    else {
        return (
            <div className={sideopen?'sidebar-opend open item':'sidebar-open item'}>
             <div className='main-titls'> <p className='items' >{elm2.title} </p> </div>
        
            </div>
          )
    }
 
}
