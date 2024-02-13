import React from 'react'
import Tour from './Tour'
import "./App.css"

const Tours = ({tours, remove}) => {
  return (
    <div>
        <center><h1 style={{marginTop:'20px'}}>All Tours</h1></center>
        <main>
        {
            tours.map((myTour)=>{
                return <Tour myTour={myTour} remove={remove}/>
            })
        }
        </main>
    </div>
  )
}

export default Tours