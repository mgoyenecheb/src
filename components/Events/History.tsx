import React, { useState } from 'react';
import iconCalendar from '../../img/iconCalendar.svg';
import iconUsers from '../../img/iconUsers.svg';
import Carousel from 'react-bootstrap/Carousel';

interface HistoryItem {
  image: string;
  title: string;
  key : string;
}

interface Props {
  data: HistoryItem[];
 
}
declare var $: any;
const History: React.FC<Props> = ({ data }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex : any, e : any) => {
    setIndex(selectedIndex);
  };

  return (
    
    <div className="rounded-3 bg-blackGr p-2">
      <div className="d-flex w-100">
        <h4 className="text-white me-auto">History</h4>
        <span className="fs-7 text-warning  justify-content-end">View all</span>
      </div>

      <Carousel indicators={false} className="carouselHis" activeIndex={index}  onSelect={handleSelect}>
        {data.map((historyitem) => (
          <Carousel.Item>
          <div className="card">
          <div className="img-wrapper"><img src={historyitem.image} className="d-block w-100" alt="..." /> </div>
          <div className="card-body">
              <h4 className="card-title text-center text-white">{historyitem.title}</h4>
          </div>
          </div>
          </Carousel.Item>
        ))}
      </Carousel>
        
    </div>

  );
};

export default History;



