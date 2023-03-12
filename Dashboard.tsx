import React, { useState } from 'react';
import {useEffect} from 'react';


import './App.css';
import iconSearch2 from './img/iconSearch2.svg';
import iconFilter from './img/iconFilter.svg';
import Header from './components/Header';
import ChartDashboard from './components/Dashboard/ChartDashboard';
import MyBrackets from './components/Dashboard/MyBrackets';
import RecentTransactions from './components/Dashboard/RecentTransactions';
import History from './components/Events/History';
import Footer from "./components/Footer";
import PopularPools from "./components/Events/PopularPools";
import Pool from './models/PoolItem'
import HistoryItem from './models/HistoryItem'
import BracketItem from './models/BracketItem'
import TransactionItem from './models/TransactionItem'

const Dashboard: React.FC = () => {

  const bracketitems: BracketItem[] = [
    {
      btc: 0.01759833,
      title: 'Bracket 01',
      usd: 1020
    },
    {
      btc: 0.01759833,
      title: 'Bracket 02',
      usd: 1020
    },
    {
      btc: 0.01759833,
      title: 'Bracket 03',
      usd: 1020
    },
    {
      btc: 0.01759833,
      title: 'Bracket 04',
      usd: 1020
    }
  ]

  const transactionitems: TransactionItem[] = [
    {
      date: "Jan. 8, 2023",
      title: 'Deposited Funds',
      usd: "+$1020"
    },
    {
      date: "Jan. 8, 2023",
      title: 'Received Prize',
      usd: "+$1000"
    },
    {
      date: "Jan. 7, 2023",
      title: 'Withdrawn Funds',
      usd: "-$120"
    },
    {
      date: "Jan. 6, 2023",
      title: 'Deposited Bet',
      usd: "-$220"
    }
  ]


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
            <div className="d-flex w-100">
                <div className="me-auto">
                  <h5 className="text-white fw-bolder">Hello There 👋 </h5>
                  <h3 className="text-white fw-bolder">Dashboard</h3>
                </div>
                <div className=" justify-content-end">
                  <button type="button" className="btn btn-warning btn-sm px-2">Create Brackets</button>
                </div>
              </div>
             <ChartDashboard  /> 
             <div className="row row-cols-1 row-cols-md-2">
              <MyBrackets data={bracketitems} />
              <RecentTransactions data={transactionitems}/>
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

export default Dashboard;
