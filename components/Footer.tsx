import React from 'react';
import logo from '../img/logo2.svg'
const Footer = () => {
  return (
    <footer className="p-5">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="col-md-6 mb-2">
          <a href="/" className="d-flex align-items-center mb-3 logo">
            <img src={logo} alt="BRKT" height="100%" width="100%" />
          </a>
          <p className="text-gray">Copyright © 2023 BRKT <br/>
            All Rights Reserved.<br/>
            Support: support@brkt.gg  | Partners: partners@brkt.gg | Press: press@brkt.gg
          </p>
        </div>

        <div className="col-md-2 mb-2">
          <h5 className="mb-3">Explore</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Search Brackets</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Bracket Generator</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div className="col-md-2 mb-2">
          <h5 className="mb-3">Resources</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Knowledge Base</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">API</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Privacy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Branding</a></li>
          </ul>
        </div>

        <div className="col-md-2 mb-2">
          <h5 className="mb-3">Get in Touch</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white d-flex align-items-center"><span className="iconTwitter me-2"> </span> Twitter </a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white d-flex align-items-center"><span className="iconDiscord me-2"> </span>Discord</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white d-flex align-items-center"><span className="iconMedium me-2"> </span>Medium</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
