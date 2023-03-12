import React, { useState } from 'react';
import iconCalendar from '../../img/iconCalendar.svg';
import Category from '../../models/CategoryItem'


interface Props {
  data: Category[];
  name: string;
}

const Categories: React.FC<Props> = ({ data, name }) => {
  return (<div>
<div className="d-flex w-100 mt-3 mb-1"><h2 className="text-white me-auto">{name}</h2> <div className="text-warning d-flex justify-content-end">View All</div></div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      {data.map((category) => (
        <div className="col">
        <div className="rounded-2 mb-2">
          <img src={category.image} className="img-fluid rounded-top rounded-2 card-img-top" />
          <div className="card-body bg-dark rounded-bottom text-center p-3">
            <span className="card-text text-white-50">{category.title}</span>
            <h4 className="text-white">{category.subtitle}</h4>
          </div>
        </div>
      </div>

       

      ))}
    </div>
    </div>
  );
};

export default Categories;



