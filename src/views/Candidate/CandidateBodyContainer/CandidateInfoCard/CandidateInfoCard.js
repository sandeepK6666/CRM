import React from "react";
import "./CandidateInforCard.scss";
import Button from "../../../../components/Button/Button";
import { useIntl } from "react-intl";

function CandidateInfoCard({ candidatesData, onEditClick }) {
  const intl = useIntl();
  const candidate = candidatesData;

  if (!candidate) {
    return <div>{intl.formatMessage({ id: 'label.no-data-found' })}</div>;
  }

  return (
    <div className="candidate-info-card-wrapper">
      <div className="candidate-info-card">
        <div className="profile">
          <img src="/images/profile.png" />
          <div className="profile-details">
            <div className="name-media">
              {candidate?.firstName} {candidate?.lastName}
              <img src="/images/social-media.svg" alt="social media" />
            </div>
            <div className="location-info">
              <span className="position">
              {intl.formatMessage({ id: 'label.developer' })}
              </span>
              <span className="country">
                {candidate?.university}
              </span>
            </div>
          </div>
        </div>
        <div className="edit-details">
          <Button
            label="Contact Linked"
            backgroundColor="var(--light-red)"
            borderColor="var(--light-pink)"
            labelClassName="btn-label"
          />
          <div className="edit-actions">
            <img src="/images/star.svg" alt="star" />
          </div>
          <div className="edit-actions">
            <img src="/images/fire.svg" alt="fire" />
          </div>
          <div
            className="edit-actions"
            onClick={() => onEditClick(candidate)}
          >
            <img src="/images/pencil.svg" className="cursor" alt="pencil" />
          </div>
          <div className="edit-actions">
            <img src="/images/three-dots.svg" alt="three dots" />
          </div>
        </div>
      </div>
      <div className="candidate-contact">
        <div className="location-info">
          <div className="location-info-inner gap-3 d-flex">
            <span className="email">
              <img className="pe-2" src="/images/envelope2.svg" alt="envelope" />
              {candidate?.email}
            </span>
            <span className="contact">
              
              <img className="pe-2" src="/images/phone.svg" alt="phone" />
              {candidate?.phone}
            </span>
          </div>
          <div className="location-info-inner gap-3 d-flex">
            <span className="date">
              <img className="pe-2" src="/images/user.svg" alt="user" />
              {candidate?.username}
            </span>
            <span className="date">
              <img className="pe-2" src="/images/clock.svg" alt="clock" />
              Jul 14, 2023, 4:04 pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateInfoCard;
