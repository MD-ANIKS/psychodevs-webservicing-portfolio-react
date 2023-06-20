import React, { useState } from "react";
import envelope from "../images/envelope.png";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import Tilt from "react-parallax-tilt";

export default function Contact() {

  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const inputEvent = (event) => {
    const {name, value} = event.target ;
    setData((preValue) => {
      return {
        ...preValue,
        [name] : value,
      }
    })
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`thanks ${data.name} for messaging me at this email ${data.email}  Note: This contact form is made as a sample, sorry we cannot receive any message you send.`)
    setData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <>
      <section id="contact">
        <div className=" contact-area-wrapper my-2 my-md-4 py-2 py-md-5 mx-2 mx-md-5 rounded-3 shadow-lg h-100 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row flex-column flex-md-row">
              <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center">
                <Tilt scale={1} transitionSpeed={1000}>
                  <img src={envelope} alt="Envelope" />
                </Tilt>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column flex-md-row ">
                <form onSubmit={formSubmit}>
                  <h1 className="mb-4">Get in touch</h1>
                  <div className="gy-3 row">
                    <div className="form-group ">
                      <PersonIcon className="input-icon symbol-input100" />
                      <input
                        type="text"
                        className="input100 form-control input1"
                        id="exampleInputName"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        name="name"
                        value={data.name}
                        onChange={inputEvent}
                      />
                    </div>
                    <div className="form-group">
                      <MailIcon className="input-icon" />
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={inputEvent}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="message"
                        rows="6"
                        name="message"
                        value={data.message}
                        onChange={inputEvent}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="send-btn btn btn-outline-dark w-100 mt-4"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            </div>
        </div>
      </section>
    </>
  );
}
