import React, { useState } from 'react';
import { Carousel } from 'antd';
import iconTwitter1 from '../../img/iconTwitter1.svg';
import iconFacebook from '../../img/iconFacebook.svg';
import iconInstagram from '../../img/iconInstagram.svg';
import PostBracketItem from '../../models/PostBracketItem'

interface Props {
  data: PostBracketItem[];
  name: string;
}

const PostBrackets: React.FC<Props> = ({ data, name }) => {
    
    return (
      <div className="bg-black p-3 rounded-3">
      <div className="table-responsive">
        <table className="table table-dark table-striped text-white">
          <thead>
            <tr className="fw-bolder">
              <td>Game</td>
              <td>User</td>
              <td>Time</td>
              <td>Amount</td>
              <td>Multiplier</td>
              <td>Result</td>
            </tr>
          </thead>
          <tbody>
    {data.map((bracketitem) => (
     <tr>
     <td>
     <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
     {bracketitem.game}</td>
     <td>{bracketitem.user}</td>
     <td>00:00 PM</td>
     <td>$1000</td>
     <td>2.00x</td>
     <td>$2000</td>
   </tr>
    ))}
    </tbody>
    </table>
  </div>
</div>
    );
};

export default PostBrackets;
