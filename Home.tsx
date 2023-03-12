import React, { useState } from 'react';
import {useEffect} from 'react';
import PostBrackets from './components/Home/PostBrackets';
import logo from '../img/logo.svg';
import logo2 from './img/logo2.svg';
import './App.css';
import BannersSlider from './components/Home/BannersSlider';
import BannerSlider from './components/Home/BannerSlider';
import Header from './components/Header';
import Boxes from "./components/Home/Boxes";
import Slider from "./components/Home/SliderHome";
import Footer from "./components/Footer";
import Partners from "./components/Home/Partners";
import Follow from "./components/Home/Follow";
import  SliderItem from './models/SliderItem'

const Home: React.FC = () => {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('bg-black');
    });
   

    const slideritems: SliderItem[] = [
      {
        image1: require("./img/top1.png"),
        title1: 'Basketball 1',
        key1: '0',
        image2: require("./img/top2.png"),
        title2: 'Basketball 2',
        key2: '0',
        image3: require("./img/top3.png"),
        title3: 'Basketball 3',
        key3: '0',
        image4: require("./img/top4.png"),
        title4: 'Basketball 4',
        key4: '0'

  
      },
      {
        image1: require("./img/top2.png"),
        title1: 'Basketball 5',
        key1: '0',
        image2: require("./img/top3.png"),
        title2: 'Basketball 6',
        key2: '0',
        image3: require("./img/top4.png"),
        title3: 'Basketball 7',
        key3: '0',
        image4: require("./img/top1.png"),
        title4: 'Basketball 8',
        key4: '0'

  
      }
      
    ];

  return (
    <div className="App">
      <Header currentPage="home" />
      <main>
          <div className="img-bg-Banner">
            <div className="col-md-6 py-5 mx-auto">
              <h1 className="fw-bolder text-white text-center">Welcome to <img src={logo2} alt="BRKT" className="welcomeImg" /></h1>
              <h2 className="text-white fw-normal text-center">Create, Bet, and Win with complete transparency on the first on-chain betting platform.</h2>
              <div className="d-flex text-center mx-auto py-5">
                <div className=""><h1 className="text-warning text-large fw-bolder">[
                </h1></div>
                <div className="col mx-3 flex-wrap"><span className="text-white">
                  <h3 className="fw-bolder">3,000,000</h3>
                  <h2 className="flex-wrap">Total Pool Wagered</h2>
                </span></div>
                <div className="col mx-3 flex-wrap"><span className="text-white">
                  <h3 className="fw-bolder">830,148</h3>
                  <h2 className="flex-wrap">Live Brackets</h2>
                </span></div>
               <div className=""><h1 className="text-warning text-large fw-bolder">]
                </h1></div>
              </div>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-4">
                <button type="button" className="btn btn-warning btn-lg px-5 me-2">Create Bracket</button>
                <button type="button" className="btn btn-warning btn-lg px-5 ms-2">Private Pools</button>
              </div>
            </div>
          </div>
        </main>
      <Boxes />
      
      <BannerSlider number_of_banners="3" />
        <PostBrackets userid="123" />

      <Slider data={slideritems} />
      <Partners number_of_banners="3" />
      <Follow number_of_banners="3" />
      <Footer />
    </div>
    
  );
};

export default Home;
