import React from 'react';
import './single.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function Single() {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="title">Information</div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single