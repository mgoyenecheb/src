import React, { useState } from 'react';
import iconCalendar from '../../img/iconCalendar.svg';
import iconUsers from '../../img/iconUsers.svg';
interface Sport {
  image: string;
  title: string;
  subtitle: string;
  daterange:string;
  participants: string;
}

interface Props {
  data: Sport[];
  name: string;
}

const Banner: React.FC = () => {
  return (<div>
     <div className="d-flex w-100">
                <div className="me-auto">
                  <h5 className="text-white fw-bolder">Time to Bet! 💪 </h5>
                  <h3 className="text-white fw-bolder">Games & Events</h3>
                </div>
                <div className=" justify-content-end">
                  <button type="button" className="btn btn-warning btn-sm px-2">Create Brackets</button>
                </div>
              </div>


              <div className="bg-gray2 shadow mb-3 rounded position-relative">
                <div className="img-fluid">
                  <img src={require("../../img/event1.png")} className="img-fluid rounded" />
                </div>
                <div className="d-flex w-100 p-4 position-absolute bottom-0 start-0">
                  <div className="me-auto">
                    <h1 className="text-white fw-normal">March Madness 2023</h1>
                    <h4 className="text-white fw-normal">Create your Brackets. Compete, and Win Big on your favorite teams!</h4>
                  </div>
                  <div className=" justify-content-end align-self-end">
                    <button type="button" className="btn btn-warning btn-lg px-3">Create</button>
                  </div>
                </div>
              </div>
    </div>
  );
};

export default Banner;



