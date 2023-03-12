import React, { useState } from 'react';
import { Carousel } from 'antd';
import './Box.css';

interface BoxProps {
    icon: string;
    title: string;
    description: string;
  }
  
  const Box: React.FC<BoxProps> = ({ icon, title, description }) => {
    return (
      <div style={{ width: "25%", textAlign: "center", padding: "20px" }}>
        <i className={`fa fa-${icon}`} style={{ fontSize: "40px", color: "#1890ff", marginBottom: "20px" }}></i>
        <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{title}</h3>
        <p style={{ textAlign: "justify", marginBottom: "20px" }}>{description}</p>
        <hr style={{ width: "80%", border: "1px solid #ccc", margin: "20px auto" }} />
      </div>
    );
  };
  
  export default Box;
  