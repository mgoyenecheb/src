import React, { useState } from 'react';
import iconCalendar from '../../img/iconCalendar.svg';
import iconUsers from '../../img/iconUsers.svg';
import Sport from '../../models/SportItem'

interface Props {
  data: Sport[];
  name: string;
}

const Sports: React.FC<Props> = ({ data, name }) => {
  return (<div>
    <div className="d-flex w-100 mt-3"><h2 className="text-white me-auto">{name}</h2> <div className="text-warning d-flex justify-content-end">View All</div></div>
               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      {data.map((sport) => (
        <div className="col">
        <div className="rounded-2 mb-2">
          <img src={sport.image} className="img-fluid rounded-top rounded-2 card-img-top" />
          <div className="card-body bg-dark rounded-bottom p-3">
            <span className="card-text text-white-50">{sport.title}</span>
            <h4 className="text-white">{sport.subtitle}</h4>
            <span className="card-text text-white-50"><img src={iconCalendar} height="16px" width="16px" /> {sport.daterange}</span><br/>
            <span className="card-text text-white-50"><img src={iconUsers} height="14px" width="14px" /> {sport.participants}</span>
          </div>
        </div>
      </div>


      ))}
    </div>
    </div>
  );
};

export default Sports;



