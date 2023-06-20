import React from 'react';
import { NavLink } from 'react-router-dom';
import Tilt from "react-parallax-tilt";

export default function Common({title, visit, btn, img}) {
  return (
    <div id='header'>
      <div className='container'>
        <div className="row d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="col-md-6 col-11 mt-4 mt-md-0 order-2 order-md-0 text-center text-md-start">
              <h1> {title} <br/><strong className='brand-name'>PsychoDevs</strong></h1> 
              <h2 className='my-3'>We are the team of talented developer making website</h2>
              <div className="mt-3 ">
                <NavLink to={visit} className='get-started-btn'> {btn} </NavLink>
              </div>
          </div>
          <div className="col-md-6 col-10  w-md-50 mt-5 mt-md-0 mx-auto mx-md-0">
          <Tilt scale={1.08} transitionSpeed={1000}>
              <img src={img} className='w-100 grow-img' alt="" />
            </Tilt>
          </div>
        </div>
      </div>

    </div>
  )
}
