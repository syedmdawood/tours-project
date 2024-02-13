import React, { useEffect, useState } from 'react'
import Tours from './Tours';
import './App.css'
import Loader from './Loader';
const url = "https://course-api.com/react-tours-project";


const App = () => {
  const [tour, setTour]= useState([]);
  const [isLoading, setIsLoading] = useState(false )
  const fetchUrl = async () =>{
    setIsLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTour(data)
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchUrl();
  },[])

  const removeTour= (id) =>{
    const singleTour = tour.filter((sigle) => sigle.id !== id);
    setTour(singleTour)
  }

  if(tour.length===0){
    return <button id='btn' onClick={fetchUrl}>Fetch Again</button>
  }

  if(isLoading){
    return <Loader />
  }


  return (
    <article>
      <Tours tours={tour} remove={removeTour} />
    </article>
  )
}

export default App