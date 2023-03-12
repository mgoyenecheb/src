import React, { useState } from 'react';
import { Carousel } from 'antd';

interface Props {
    number_of_banners: string;
  }

  
  const Partners: React.FC<Props> = ({ number_of_banners }) => {
    return (
        <div className="bg-blackGr">
        <div className="container">
          <h3 className="text-center py-5"><span className="text-warning">[</span> Supported Coins & Partners <span className="text-warning">]</span></h3>
          <div className="imgPartner pb-5">
              <img src={require("../../img/partnerLogo1.png")} className="m-2" />
              <img src={require("../../img/partnerLogo2.png")} className="m-2" />
              <img src={require("../../img/partnerLogo3.png")} className="m-2" />
              <img src={require("../../img/partnerLogo4.png")} className="m-2" />
              <img src={require("../../img/partnerLogo5.png")} className="m-2" />
          </div>
          <div className="imgPartner pb-5">
              <img src={require("../../img/partnerLogo6.png")} className="m-2" />
              <img src={require("../../img/partnerLogo7.png")} className="m-2" />
              <img src={require("../../img/partnerLogo8.png")} className="m-2" />
              <img src={require("../../img/partnerLogo9.png")} className="m-2" />
              <img src={require("../../img/partnerLogo10.png")} className="m-2" />
          </div>
          <div className="border-bottom border-light p-2 mb-5 border-opacity-50 border-3"></div>
          <div className="imgPartner pb-5">
              <img src={require("../../img/partnerLogo1.png")} className="m-2" />
              <img src={require("../../img/partnerLogo2.png")} className="m-2" />
              <img src={require("../../img/partnerLogo3.png")} className="m-2" />
              <img src={require("../../img/partnerLogo4.png")} className="m-2" />
              <img src={require("../../img/partnerLogo5.png")} className="m-2" />
          </div>
          <div className="imgPartner pb-5">
              <img src={require("../../img/partnerLogo6.png")} className="m-2" />
              <img src={require("../../img/partnerLogo7.png")} className="m-2" />
              <img src={require("../../img/partnerLogo8.png")} className="m-2" />
              <img src={require("../../img/partnerLogo9.png")} className="m-2" />
              <img src={require("../../img/partnerLogo10.png")} className="m-2" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Partners;