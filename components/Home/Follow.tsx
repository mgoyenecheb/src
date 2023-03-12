import React, { useState } from 'react';
import { Carousel } from 'antd';

interface Props {
    number_of_banners: string;
  }

  
  const Follow: React.FC<Props> = ({ number_of_banners }) => {
    return (
        <div className="bg-yellowImg">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 p-4">
              <div className="col pt-4 pe-3">
                <h3>Foster Your Brackets, Your Way</h3>
                <p className="fs-4 text-white">
                  Watch tournaments unfold, we'll handle the rest. Your pool standings and all other reports will be updated in real-time.
                </p>
              </div>
              <div className="col pt-5 ps-5">
                <div className="d-flex">
                  <div className="form-floating w-75 text-white">
                    <input type="email" className="form-control border-light bg-dark text-white bg-opacity-50" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor ="floatingInput">Email Address</label>
                  </div>
                  <button className="btn btn-lg ms-3 px-2 btn-outline-light" type="submit">Join Now</button>
                </div>
                <div className="mt-4 d-flex">
                  <span className="fs-4 text-white fw-bold me-3">
                    Follow Us
                  </span>
                  <a href="#"><span className="iconDiscordM me-3"> </span></a>
                  <a href="#"><span className="iconMediumM me-3"> </span></a>
                  <a href="#"><span className="iconTwitterM me-3"> </span></a>
                </div>
              </div>
            </div>
          </div>
        </div>  
    );
  };
  
  export default Follow;