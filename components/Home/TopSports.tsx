import React, { useState } from 'react';

import { Carousel, Card, Stack, Button } from "react-bootstrap";

interface SliderItem {
    image1: string;
    title1: string;
    key1:string;
    image2: string;
    title2: string;
    key2:string;
    image3: string;
    title3: string;
    key3:string;
    image4: string;
    title4: string;
    key4:string;
   
  }
  
  interface Props {
    data: SliderItem[];
   
  }
  
  const TopSports: React.FC<Props> = ({ data }) => {
    return (
        <div className="bg-yellowImgTop">
        <div className="container">
          <h3 className="text-center py-5"><span className="text-white">[ Top NCAA Sports ]</span></h3>
<div id="carouselTop" className="carousel px-5" data-bs-ride="carousel">
 <div className="carousel-inner px-5">
 <Carousel style={{ height: 500 }}>
          {data.map((item, index) => (
            <Carousel.Item style={{ height: 500, width:2300 }}>
              <div>{item.title1}</div>
              <div>{item.title2}</div>
              <div>{item.title3}</div>
              <div>{item.title4}</div>
            </Carousel.Item>
          ))}
        </Carousel>
</div>
</div>


        </div>
      </div>
    );
  };
  
  export default TopSports;