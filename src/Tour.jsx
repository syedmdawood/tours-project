import React, { useState } from 'react'
import "./App.css"

const Tour = ({myTour, remove}) => {
    const [readless, setreadless] = useState(false)
  return (
    <div className='tour'>
        <img src={myTour.image} alt={myTour.name} />
        <h3>{myTour.name}</h3>
        <p className="content">
            {readless?myTour.info: myTour.info.substring(0,250)}
            <button onClick={()=> setreadless(!readless)}>{readless?"Read Less" : "Read More"}</button>
            <h4>{myTour.price}</h4>
            <footer>
            <button  onClick={()=> remove(myTour.id)}>Remove</button>
            </footer>
        </p>
    </div>
  )
}

export default Tour