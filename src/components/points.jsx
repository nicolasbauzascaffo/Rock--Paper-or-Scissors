import React from 'react'
import '../styles/points.css'
import { useState, useEffect } from 'react'

function Points({points,setpoints}) {
  return (
    <div className='points' >
      <section className='points-section' >
        <h2 className='score' >Puntos: {points}</h2>
      </section>
    </div>
  )
}

export default Points
