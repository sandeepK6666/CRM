import React from "react";
import "./CandidateDetailCard.scss";
import Button from "../Button/Button";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useIntl } from "react-intl";

function CandidateDetailCard({userName}) {
  const intl = useIntl();
  const handleToggleChange = (newValue) => {
    console.log("Toggle value changed to:", newValue);
  };

  return (
    <div className="candidate-detail-card-wrapper">
      <div className="candidate-detail-card-inner">
        <div className="profile">
          <img src="/images/profile.png" alt="Profile" />
          <div className="profile-details">
            <div className="name">{intl.formatMessage({ id: 'label.senior-product-manager' })}</div>
            <div className="designation">{intl.formatMessage({ id: 'label.recruit-crm' })}</div>
          </div>
        </div>
        <div className="location-info-inner">
          <span className="date">
            <img src="/images/user.svg" alt="User" />
            {userName}
          </span>
          <span className="date">
            <img src="/images/clock.svg" alt="Clock" />
            Jul 14, 2023, 4:04 pm
          </span>
        </div>
        <div className="assigned-tag">{intl.formatMessage({ id: 'label.assigned' })}</div>
        <div>
          <Button
            label="View Files"
            backgroundColor="var(--text-white)"
            borderColor="var(--light-gray)"
            labelClassName="btn-label"
          />
        </div>
        <div>
          <ToggleButton initialState={true} onToggle={handleToggleChange} />
        </div>
      </div>
    </div>
  );
}

export default CandidateDetailCard;
