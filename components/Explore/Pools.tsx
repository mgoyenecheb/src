import React, { useState } from 'react';
import { Carousel } from 'antd';
import iconTwitter1 from '../../img/iconTwitter1.svg';
import iconFacebook from '../../img/iconFacebook.svg';
import iconInstagram from '../../img/iconInstagram.svg';
interface Pool {
  image: string;
  title: string;
  subtitle: string;
  bets: string;
}

interface Props {
  data: Pool[];
  name: string;
}

const Pools: React.FC<Props> = ({ data, name }) => {
    
    return (
      <div>
      <div className="rounded-3 bg-blackGr p-2 d-flex">
      <div className="text-white">
        <h4 className="text-white">Referral</h4>
        <span className="fs-7 fw-bolder">Share your referral link.</span>
        <div className="d-flex">
          <div className="input-group input-group-sm me-1">
            <input type="text" className="form-control border-white bg-dark text-white" placeholder="Search Brackets" aria-label="Search" value="joinBRKT.com/ref/asdf123" />
          </div>
          <button type="button" className="btn-blue-sm btn btn-primary btn-sm align-items-center">Copy</button>
        </div>
        <div className="d-flex my-2">
            <span className="text-white me-3"><img src={iconTwitter1} height="20px" width="20px" /></span>
            <span className="text-white me-3"><img src={iconFacebook} height="20px" width="20px" /></span>
            <span className="text-white me-3"><img src={iconInstagram} height="20px" width="20px" /></span>
        </div>
      </div>
    </div>

    <h4 className="text-warning mt-3 mb-2">{name}</h4>
    {data.map((pool) => (
    <div className="rounded-2 shadow-sm mb-1 position-relative">
        <img src={pool.image} className="img-fluid rounded-2 opacity-25" />
        <div className="position-absolute top-0 start-0 p-3">
          <h4 className="text-white">{pool.title}</h4>
          <span className="fs-7 fw-normal text-white">{pool.subtitle}</span><br/>
          <span className="fs-7 fw-bolder text-white">{pool.bets}</span>
        </div>
    </div>
    ))}
    </div>
    );
};

export default Pools;
