import React from "react";

import TodoSideBar from "../TodoSideBar/TodoSideBar";
import "./MainContent.scss";
import CandidateBody from "../Candidate/CandidateBody/CandidateBody";

function MainContent() {
  return (
    <div>
      <div className="main-content">
        <CandidateBody />
        <TodoSideBar />
      </div>
    </div>
  );
}

export default MainContent;
