import React, { useState } from 'react';
import { Carousel } from 'antd';
import iconTwitter1 from '../../img/iconTwitter1.svg';
import iconFacebook from '../../img/iconFacebook.svg';
import iconInstagram from '../../img/iconInstagram.svg';
import Pool from '../../models/PoolItem'

interface Props {
  data: Pool[];
  name: string;
}

const PopularPools: React.FC<Props> = ({ data, name }) => {
    
    return (
      <div>


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

export default PopularPools;
