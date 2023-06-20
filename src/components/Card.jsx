import React from "react";
import { NavLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";

export default function Card({img, title, desc}) {
  return (
    <div className="col-11 col-md-4 mx-auto">
        <Tilt  glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px" transitionSpeed={2000}>
      <div className="card">

        <img src={img} className="card-img-top" alt="..." />
      
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <NavLink to="/contact" className="btn btn-outline-primary">
            Check now
          </NavLink>
        </div>
      </div>
      </Tilt>
    </div>
  );
}
