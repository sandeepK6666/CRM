import React from "react";
import "./CandidateHeader.scss";
import Button from "../../../components/Button/Button";

function CandidateHeader() {
  return (
    <div className="candidate-header">
      <div className="candidate-details-wrapper">
        <span className="candidate">Candidates</span> <span>&gt;</span>{" "}
        <span className="cand-name"> Robert Hardy</span>
        <span className="cand-id"> ID 230</span>
      </div>
      <div className="candidate-actions">
        <Button
          label="Request profile update"
          backgroundColor="var(--text-white)"
          borderColor="var(--light-gray)"
          labelClassName="btn-label"
        />
        <Button
          label="Previous"
          backgroundColor="var(--text-white)"
          borderColor="var(--light-gray)"
          labelClassName="btn-label"
        />

        <Button label="Next" backgroundColor="var(--text-white)" borderColor="var(--light-gray)" 
        labelClassName="btn-label"/>
      </div>
    </div>
  );
}

export default CandidateHeader;
