import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <img src="/images/dash-2.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/profile.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/building.svg" />
          </a>
        </li>
        <li>
          <a href="/analytics">
            <img src="/images/cal.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/dash-2.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
