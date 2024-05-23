import React from "react";
import { useIntl } from "react-intl";
import "./CandidateFormDetails.scss";

function CandidateFormDetails({ candidatesData }) {
  const intl = useIntl();

  const candidate = candidatesData;
  return (
    <>
      <div>
        <div className="candidate-detail-form">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <label>{intl.formatMessage({ id: "label.first_name" })} </label>
              </div>
              <div className="mb-2 col-md-8 candidate-value  ">
                {candidate?.firstName}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label> {intl.formatMessage({ id: "label.last_name" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value">
                {candidate?.lastName}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label> {intl.formatMessage({ id: "label.phone" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value  ">
                {candidate?.phone}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label>{intl.formatMessage({ id: "label.email" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value">
                {candidate?.email}
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label> {intl.formatMessage({ id: "label.age" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value">
                {candidate?.age}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <label> {intl.formatMessage({ id: "label.gender" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value">
                {candidate?.gender}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label>
                  {intl.formatMessage({ id: "label.blood_group" })}{" "}
                </label>
              </div>
              <div className="mb-2 col-md-8 candidate-value  ">
                {candidate?.bloodGroup}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label> {intl.formatMessage({ id: "label.weight" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value  ">
                {candidate?.weight}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label>{intl.formatMessage({ id: "label.eye_color" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value">
                {candidate?.eyeColor}
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label> {intl.formatMessage({ id: "label.university" })}</label>
              </div>
              <div className="mb-2 col-md-8 candidate-value">
                {candidate?.university}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateFormDetails;
