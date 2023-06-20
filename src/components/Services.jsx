import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

export default function Services() {
  return (
    <>

      <section id='services'>

          <div className="container mb-3 mb-md-5">

              <h2 className="text-center my-4 text-muted">Our Services</h2>

              <div className="row gy-4">
                  {Sdata.map((curValue, index) => {

                    return <Card key={index}  img={curValue.img} title={curValue.title} desc={curValue.desc}  />

                  })}
              </div>


          </div>

      </section>
    
    </>
  )
}
