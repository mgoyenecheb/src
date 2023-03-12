import React, { useState } from 'react';
import BracketItem from '../../models/BracketItem'

interface Props {
  data: BracketItem[];
}
  const MyBracket: React.FC<Props> = ({ data }) => {
    return (
      <div className="col-md-6">
      <div className="bg-black shadow p-3 mb-3 rounded">
        <div className="d-flex w-100 mb-2"><h4 className="text-white me-auto">My Brackets</h4> <div className="text-warning fs-7 d-flex justify-content-end">View All</div></div>
        
        {data.map((bracketitem) => (
        <div className="border-bottom border-light d-flex w-100 pb-2 mb-3">
          <div className="imgBrackets rounded-circle me-2" style={{width: 32, height: 32, background:"#D9D9D9"}}>
            
          </div>
          <div className="text-white fw-bolder fs-6 me-auto">
            {bracketitem.title}
          </div>
          <div className="text-white text-end fs-7">
            <span className="fw-bolder">{bracketitem.btc} BTC</span><br/>
            ${bracketitem.usd}
          </div>
        </div>
      ))}

      </div>
  </div>
    );
  };
  
  export default MyBracket;