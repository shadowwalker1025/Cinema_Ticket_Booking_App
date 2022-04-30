import React from 'react'
import Seats from './Seats'

export default function Layout() {
  return (
    <>
        <div className='movie-container'>
        <label><b>Pick a movie:  </b></label>
          <select id='movie'>

            <option value="300" className='movie-names'> Doctor Strange 3D (₹ 300)</option>
            <option value="200" className='movie-names'> Thor: Love & Thunder 2D (₹ 200)</option>
            <option value="250" className='movie-names'> RRR 2D (₹ 250)</option>
            <option value="260" className='movie-names'> K.G.F 2D (₹ 260)</option>
             
          </select>
        </div>

        <Seats/>
    </>
  )
}
