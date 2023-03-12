import React from 'react';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../img/logo.svg';
import logo2 from '../img/logo2.svg';
import MetaMaskAuth from './MetaMaskAuth';
import iconDashboard from '../img/iconDashboard.svg';
import iconSearch from '../img/iconSearch.svg';
import iconEvents from '../img/iconEvents.svg';
import iconNotifications from '../img/iconNotifications.svg';


import { useCallback } from 'react';

const { Header: AntdHeader } = Layout;

interface Props {
    currentPage: string;
}

const Header: React.FC<Props> = ({ currentPage }) => {


  const location = useLocation();

  let classNameHome = 'nav-link px-2 link-secondary d-flex';
  let classNameExplore = 'nav-link px-2 link-secondary d-flex';
  let classnNameEvents = 'nav-link px-2 link-secondary d-flex';
  let classnNameDashbioard= 'nav-link px-2 link-secondary d-flex';
  console.log(location.pathname);
  if (location.pathname === '/' || location.pathname === '') {
    classNameHome = 'nav-link px-2 link-dark d-flex';

  } else if (location.pathname === '/explore' || location.pathname === '/Explore') {
    classNameExplore = 'nav-link px-2 link-dark d-flex';
  } else if (location.pathname === '/events' || location.pathname === '/Events') {
    classnNameEvents = 'nav-link px-2 link-dark d-flex';
  }
  else if (location.pathname === '/dashboard' || location.pathname === '/Dashboard') {
    classnNameDashbioard = 'nav-link px-2 link-dark d-flex';
  }

    const redirectToPage = (page: string) => {
        window.location.href = page;
      };
    const logoUrl = 'https://via.placeholder.com/50'
    return (
        
        <div>
             <header className="p-4 bg-yellow">
          <div className="container-fluid">
            <div className="d-flex flex-wrap">
              <a href="http://localhost" className="me-auto">
               <img src={logo} alt="BRKT" height="100%" width="127px" />
              </a>
              <div className="text-end my-auto">
                <ul className="nav col-12 fw-bolder col-md-auto mb-2 justify-content-center mb-md-0 me-3">
                  <li><a href="/Dashboard" className={classnNameDashbioard}><img src={iconDashboard} height="24px" width="24px" /> Dashboard</a></li>
                  <li><a href="/Explore" className={classNameExplore}><img src={iconSearch} height="24px" width="24px" /> Explore</a></li>
                  <li><a href="/Events" className={classnNameEvents}><img src={iconEvents} height="24px" width="24px" /> Events</a></li>
                  <li><a href="#" className="nav-link px-2 link-dark d-flex"><img src={iconNotifications} height="24px" width="24px" /><span className="badge text-bg-primary fs-7">1</span>
                      </a></li>
                </ul>
              </div>
              <div className="text-end">
               <MetaMaskAuth />
              </div>
            </div>
          </div>
        </header>
       

        </div>
    );
};



function checkIfWalletIsConnected() {}






export default Header;
