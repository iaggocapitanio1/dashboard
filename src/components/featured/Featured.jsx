import React from 'react';
import './featured.scss';
import { CircularProgressbar } from "react-circular-progressbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">
          Total Revenue
        </div>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total saled today</p>
        <p className="amount">$450</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque nesciunt illo sunt</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">
                $12.4k
              </div>
            </div>

          </div>
          <div className="item">
            <div className="itemTitle">
              Last Week
            </div>
            <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmount">
                $-2.4k
              </div>
            </div>

          </div>
          <div className="item">
            <div className="itemTitle">
              Last Month
            </div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">
                $12.4k
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured