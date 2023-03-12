import React, { useState } from 'react';

import './BannerSlider.css';
import { OmitProps } from 'antd/es/transfer/ListBody';
import Carousel from 'react-bootstrap/Carousel';
interface Props {
    number_of_banners: string;
  }
interface Banner {
    image: string;
    title: string;
}

const BannerSlider: React.FC<Props> = ({ number_of_banners }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex : any, e : any) => {
    setIndex(selectedIndex);
  };
    const [currentSlide, setCurrentSlide] = useState(0);
    const mockData: Banner[] = [
        { image: 'https://via.placeholder.com/150', title: 'Banner 1' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 2' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 3' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 4' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 5' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 6' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 7' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 8' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 9' },
        { image: 'https://via.placeholder.com/150', title: 'Banner 10' },
    ];

    return (
        <div className="bg-yellowImgPromo">
          <div className="container">
            <h3 className="text-center py-5"><span className="text-white">[ Promotion ]</span></h3>

              <Carousel indicators={false} className="px-5 homeSlide" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img src={require("../../img/promotion2.png")} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={require("../../img/promotion3.png")} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel> 

          </div>
        </div>
    );
};

export default BannerSlider;
