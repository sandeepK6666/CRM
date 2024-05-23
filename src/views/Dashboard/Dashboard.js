import React from "react";
import "./Dashboard.scss";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import SideBar from "../SideBar/SideBar";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="content">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;
