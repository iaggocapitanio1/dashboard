import "./home.scss";
import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"></Widget>
          <Widget type="order"></Widget>

          <Widget type="earning" ></Widget>

          <Widget  type="balance"></Widget>

        </div>
        <div className="charts">
        <Featured/>
        <Chart></Chart>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List/>
        </div>
      </div>

    </div>
  )
}

export default Home