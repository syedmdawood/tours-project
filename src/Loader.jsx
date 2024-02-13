import React from 'react'
import loader from './loader.gif'

const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <img src={loader} alt="" />
    </div>
  )
}

export default Loader