import React, { useState } from 'react';
import {useEffect} from 'react';
import './App.css';
import iconSearch2 from './img/iconSearch2.svg';
import iconFilter from './img/iconFilter.svg';
import Header from './components/Header';
import Sports from "./components/Explore/Sports";
import Categories from "./components/Explore/Categories";
import Pools from "./components/Explore/Pools";
import Footer from "./components/Footer";
import Pool from './models/PoolItem'
import Sport from './models/SportItem'
import Category from './models/CategoryItem'


const Explore: React.FC = () => {

  const categories: Category[] = [
    {
      image: require("./img/popular1.png"),
      title: 'eSports',
      subtitle: 'APEX'
    },
    {
      image: require("./img/popular2.png"),
      title: 'Sports',
      subtitle: 'Soccer'
    },
    {
      image: require("./img/popular3.png"),
      title: 'eSports',
      subtitle: 'League of Legends'
    },
    {
      image: require("./img/popular4.png"),
      title: 'Sports',
      subtitle: 'Ice Hockey'
    },
    
  ];

  const sports: Sport[] = [
    {
      image: require("./img/featured.png"),
      title: 'Sports',
      subtitle: 'Sport Name 1',
      daterange:"Jan 19th, 2023 - Jan 24th, 2023",
      participants:"16 Participants"
    },
    {
      image: require("./img/featured.png"),
      title: 'Sports',
      subtitle: 'Sport Name 2',
      daterange:"Jan 19th, 2023 - Jan 24th, 2023",
      participants:"16 Participants"
    },
    {
      image: require("./img/featured.png"),
      title: 'Sports',
      subtitle: 'Sport Name 3',
      daterange:"Jan 19th, 2023 - Jan 24th, 2023",
      participants:"16 Participants"
    },
    {
      image: require("./img/featured.png"),
      title: 'Sports',
      subtitle: 'Sport Name 4',
      daterange:"Jan 19th, 2023 - Jan 24th, 2023",
      participants:"16 Participants"
    },
    
  ];

  const pools: Pool[] = [
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key:"1"

    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key:"2"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key:"3"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key:"4"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key:"5"
    },
    {
      image: require("./img/popularPriv1.png"),
      title: 'AZUKI',
      subtitle: 'Crypto',
      bets:"Bets: 180",
      key:"6"
    },
    
  ];


  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('bg-black');
    });


  return (
    <div className="App">
      <Header currentPage="home" />
      <div className="bg-blackGr pb-5">
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-md-10 border-end border-light pe-4">

              <h5 className="text-white fw-bolder">Explore Various Brackets 🔍 </h5>
              <h3 className="text-white fw-bolder">Explore</h3>
              <div className="d-flex">
                <div className="w-50 pe-5">
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-dark" id="search-addon1"><img src={iconSearch2} height="24px" className="link-secondary" width="24px" /> </span>
                    <input type="text" className="form-control border-dark bg-dark text-white" placeholder="Search Brackets" aria-label="Search" aria-describedby="search-addon1" />
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-end">
                <div className="input-group w-25 pe-2">
                  <select className="form-select bg-dark text-white-50 border-dark" aria-label="Category">
                    <option selected>Category</option>
                    <option value="1">Popular</option>
                    <option value="2">Featured</option>
                    <option value="3">Category 01</option>
                    <option value="3">Category 02</option>
                  </select>
                </div>
                <div className="input-group w-25 pe-2">
                  <select className="form-select bg-dark text-white-50 border-dark" aria-label="Date">
                    <option selected>Date</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="input-group w-25">
                  <span className="input-group-text bg-dark text-white-50 border-dark" id="filter-addon1"><img src={iconFilter} height="24px" className="link-secondary" width="24px" /></span>
                  <input type="text" className="form-control bg-dark text-white border-dark" placeholder="Filter" aria-label="Filter" aria-describedby="filter-addon1" />
                </div>
              </div>
              </div>

              <Categories data={categories} name="Popular Categories" />
              <Sports data={sports} name="Featured Brackets" />
              <Sports data={sports} name="Upcoming Brackets" />
              <Sports data={sports} name="Category 01" />
              <Sports data={sports} name="Category 02" />
              <div className="mx-auto my-4 text-center"> <button type="button" className="btn btn-link fw-bolder fs-3 text-white">See more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg></button> </div>
            </div>
            <div className="col-md-2">
                <Pools data={pools} name="Popular Private Pools" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Explore;
