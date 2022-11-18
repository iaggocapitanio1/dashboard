import React from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
function Widget({ type }) {
  let data;
  //Temporary data
  const amount = 300;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: 'See all users',
        icon: (<PersonOutlineIcon className='icon' style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }} />)
      };
      break;
    default:
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: 'See all orders',
        icon: (<ShoppingCartOutlinedIcon className='icon' style={{
          backgroundColor: "rgba(218, 165, 32, 0.2)",
          color: "goldenrod",
        }} />)
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: 'See all earnings',
        icon: (<MonetizationOnOutlinedIcon className='icon' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />)
      };
      break;

    case "balance":
      data = {
        title: "BALANCES",
        isMoney: true,
        link: 'See all balances',
        icon: (<AccountBalanceWalletOutlinedIcon className='icon' style={{
          backgroundColor: "rgba(128, 0, 128, 0.2)",
          color: "purple",
        }} />)
      };
      break;


  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%

        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget