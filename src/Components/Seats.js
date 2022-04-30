import React, {useState} from 'react'


export default function Seats() {


    // const [seatCount, setSeatCount] = useState(0)
    // const [total, setTotal] = useState(0)

  return (
    <>
        <ul className="showcase">
        <li>
            <div className="seat"></div>
            <small>N/A</small>
        </li>

        <li>
            <div className="seat selected"></div>
            <small>Selected</small>
        </li>

        <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
        </li>
        </ul>

        <div className="container">
            <div className="screen"></div>
            <div className="row">
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
            </div>
            <div className="row">
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat occupied"></div>
               <div className="seat occupied"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
            </div>

            <div className="row">
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat occupied"></div>
               <div className="seat occupied"></div>
            </div>

            <div className="row">
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
            </div>

            <div className="row">
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat occupied"></div>
               <div className="seat occupied"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
            </div>

            <div className="row">
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat"></div>
               <div className="seat occupied"></div>
               <div className="seat occupied"></div>
               <div className="seat occupied"></div>
               <div className="seat"></div>
            </div>
        </div>

        <p class="text">
                <b>You have selected <span id="count"> 0 </span> seats for a price of ₹ <span id="total"> 0 </span></b>
        </p>

    </>
  )
}
