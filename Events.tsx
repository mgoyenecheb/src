import React, { useState } from 'react';
import {useEffect} from 'react';


import './App.css';
import iconSearch2 from './img/iconSearch2.svg';
import iconFilter from './img/iconFilter.svg';
import Header from './components/Header';
import Banner from './components/Events/Banner';
import Slider from './components/Events/Slider';
import History from './components/Events/History';
import Footer from "./components/Footer";
import PopularPools from "./components/Events/PopularPools";
import  SliderItem from './models/SliderItem'
import Pool from './models/PoolItem'
import HistoryItem from './models/HistoryItem'

const Events: React.FC = () => {
  
  const pools: Pool[] = [
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key : "0"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key : "1"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key : "2"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key : "3"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key : "4"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key : "5"
    },
    
  ];

  const historyitems: HistoryItem[] = [
    {
      image: require("./img/top1.png"),
      title: 'Basketball',
      key:"0"

    },
    {
      image: require("./img/top2.png"),
      title: 'Football',
      key:"1"
    },
    {
      image: require("./img/top3.png"),
      title: 'Baseball',
      key:"2"
    },
    {
      image: require("./img/top4.png"),
      title: 'Ice Hockey',
      key:"3"
    },
    {
      image: require("./img/top1.png"),
      title: 'Card title 1',
      key:"4"
    },
    {
      image: require("./img/top2.png"),
      title: 'Card title 2',
      key:"5"
    },
    {
      image: require("./img/top3.png"),
      title: 'Card title 3',
      key:"6"
    },
    {
      image: require("./img/top4.png"),
      title: 'Card title 4',
      key:"7"
    }
    
  ];

  const slideritems2: SliderItem[] = [
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

  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('bg-black');
    });


  return (
    <div className="App">
      <Header currentPage="home" />
      <div>
      <div className="bg-blackGr">
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-md-10 pe-4">
     
             <Banner />
            <Slider data={slideritems2} />
              <div className="bg-gray2 shadow p-3 mb-3 rounded">
                <h2 className="text-center text-white pb-2 fw-semibold"><span className="text-warning">[</span> Post Brackets <span className="text-warning">]</span> <span className="text-white-50 ms-3">[ Active Leaderboard ]</span></h2>
                
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
                        <tr>
                          <td>
                              <input className="form-check-input" type="checkbox" value="" id="CheckDefault1" />
                              Game Type</td>
                          <td>User Name</td>
                          <td>00:00 PM</td>
                          <td>$1000</td>
                          <td>2.00x</td>
                          <td>$2000</td>
                        </tr>
                        <tr>
                          <td>
                          <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
                          Game Type</td>
                          <td>User Name</td>
                          <td>00:00 PM</td>
                          <td>$1000</td>
                          <td>2.00x</td>
                          <td>$2000</td>
                        </tr>
                        <tr>
                          <td>
                              <input className="form-check-input" type="checkbox" value="" id="CheckDefault1" />
                              Game Type</td>
                          <td>User Name</td>
                          <td>00:00 PM</td>
                          <td>$1000</td>
                          <td>2.00x</td>
                          <td>$2000</td>
                        </tr>
                        <tr>
                          <td>
                          <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
                          Game Type</td>
                          <td>User Name</td>
                          <td>00:00 PM</td>
                          <td>$1000</td>
                          <td>2.00x</td>
                          <td>$2000</td>
                        </tr>
                        <tr>
                          <td>
                              <input className="form-check-input" type="checkbox" value="" id="CheckDefault1" />
                              Game Type</td>
                          <td>User Name</td>
                          <td>00:00 PM</td>
                          <td>$1000</td>
                          <td>2.00x</td>
                          <td>$2000</td>
                        </tr>
                        <tr>
                          <td>
                          <input className="form-check-input" type="checkbox" value="" id="CheckDefault2"/>
                          Game Type</td>
                          <td>User Name</td>
                          <td>00:00 PM</td>
                          <td>$1000</td>
                          <td>2.00x</td>
                          <td>$2000</td>
                        </tr>
                        <tr>
                          <td>
                          <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
                          Game Type</td>
                          <td>User Name</td>
                          <td>00:00 PM</td>
                          <td>$1000</td>
                          <td>2.00x</td>
                          <td>$2000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>



            </div>
            <div className="col-md-2">
        
            <History data={historyitems} />    

                <PopularPools data={pools} name={'Pular Pools'} />
   
            </div>
          </div>
        </div>
      </div>
    </div>
            <Footer />
    </div>
    
  );
};

export default Events;
