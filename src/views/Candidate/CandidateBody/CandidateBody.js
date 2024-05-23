import React from "react";

import CandidateContent from "../CandidateBodyContainer/CandidateContent";
import "./CandidateContent.scss";
import CandidateHeader from "../CandidateHeader/CandidateHeader";

function CandidateBody() {
  return (
    <div className="candidate-body">
      <CandidateHeader />
      <CandidateContent />
    </div>
  );
}

export default CandidateBody;
