// import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../sass/layout/_sideBar.scss";
import { BsList } from "react-icons/bs";
import { BiCalendarEvent } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { AiFillRocket } from "react-icons/ai";

function SideBar() {
  return (
    <div className="main">
      <BrowserRouter>
        <div className="main__menu">
          <ul>
            <li>
              <BsList className="icon" />
              <Link to="">Close Menu</Link>
            </li>
            <li>
              <BiCalendarEvent className="icon" />
              <Link
                to="/"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Today
              </Link>
            </li>
            <li>
              <FaRegCalendarAlt className="icon" />
              <Link
                to="/next7days"
                onClick={() => {
                  window.location.href = "/next7days";
                }}
              >
                Next 7 Days
              </Link>
            </li>
            <li>
              <AiOutlineClear className="icon" />
              <Link
                to="/cleaning"
                onClick={() => {
                  window.location.href = "/cleaning";
                }}
              >
                Cleaning
              </Link>
            </li>
            <li>
              <AiFillRocket className="icon" />
              <Link
                to="/mygoals"
                onClick={() => {
                  window.location.href = "/mygoals";
                }}
              >
                My Goals
              </Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default SideBar;
