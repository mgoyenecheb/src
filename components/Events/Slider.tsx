import React, { useState } from 'react';
import iconCalendar from '../../img/iconCalendar.svg';
import iconUsers from '../../img/iconUsers.svg';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import  SliderItem from '../../models/SliderItem'

interface Props {
  data: SliderItem[];
 
}
declare var $: any;
const Slider: React.FC<Props> = ({ data }) => {



  
  return (
    <div className="bg-gray2 shadow p-3 mb-3 rounded">
        <h2 className="text-center text-white pb-2 fw-semibold"><span className="text-warning">[</span> Popular <span className="text-warning">]</span> <span className="text-white-50 ms-3">Active Entries</span> <span className="text-white-50 ms-3">Total Pool Wagered</span></h2>

        <Carousel indicators={false} className="carouselPop px-5"  >
        {data.map((slideritem) => (
        <Carousel.Item>
          <div className="cardS">
            <div className="img-wrapper"><img
                className="d-block w-100"
                src={slideritem.image1}
                alt="First slide"
              /></div>
            <div className="card-body">
              <h4 className="card-title text-center text-white">{slideritem.title1}</h4>
            </div>
          </div>

          <div className="cardS">
            <div className="img-wrapper"><img
                className="d-block w-100"
                src={slideritem.image2}
                alt="First slide"
              /></div>
            <div className="card-body">
              <h4 className="card-title text-center text-white">{slideritem.title2}</h4>
            </div>
          </div>

          <div className="cardS">
            <div className="img-wrapper"><img
                className="d-block w-100"
                src={slideritem.image3}
                alt="First slide"
              /></div>
            <div className="card-body">
              <h4 className="card-title text-center text-white">{slideritem.title3}</h4>
            </div>
          </div>

          <div className="cardS">
            <div className="img-wrapper"><img
                className="d-block w-100"
                src={slideritem.image4}
                alt="First slide"
              /></div>
            <div className="card-body">
              <h4 className="card-title text-center text-white">{slideritem.title4}</h4>
            </div>
          </div>
        </Carousel.Item>
              ))}
        </Carousel>
    </div>
  );
};

export default Slider;



