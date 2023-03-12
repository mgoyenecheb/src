import React, { useState } from 'react';
import { Carousel } from 'antd';
import './BannersSlider.css';
import { OmitProps } from 'antd/es/transfer/ListBody';
interface Props {
    number_of_banners: string;
  }
interface Banner {
    image: string;
    title: string;
}

const BannersSlider: React.FC<Props> = ({ number_of_banners }) => {
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
        <div className="banner-slider">
            <Carousel
                afterChange={(current) => setCurrentSlide(current)}
                autoplay
                dots={false}
                effect="fade"
                slidesToShow={Number(number_of_banners)}
                slidesToScroll={3}
            >
                {mockData.map((banner, index) => (
                    <div key={index} className="banner-slider__item">
                        <img
                            src={banner.image}
                            alt={banner.title}
                            style={{ width: '15%' }}
                        />
                        <h3 className="banner-slider__title">{banner.title}</h3>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BannersSlider;
