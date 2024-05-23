import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../../store/actions/todoActions";
import CandidateDetailCard from "../../../components/CandidateDetailCard/CandidateDetailCard";
import Button from "../../../components/Button/Button";
import "./CandidateDetailTabs.scss";

function CandidateDetailTabs() {
  const dispatch = useDispatch();
  const getTodoData = useSelector((state) => state?.todo?.getTodoData?.todos);

  useEffect(() => {
    fetchData();
  }, []);

  const getCandidatesData = useSelector(
    (state) => state?.candidate?.getCandidatesData
  );

  const fetchData = () => {
    dispatch(getTodo());
  };

  return (
    <div>
      <div className="candidate-detail-actions">
        <div className="user-name">
          Assigned Job to {getCandidatesData.firstName}
        </div>
        <div className="gap-5 d-flex">
          <Button
            label="View Files"
            backgroundColor='var(--blue-1)'
            borderColor='var(--blue-1)'
            labelClassName="btn-label text-white"
            buttonClassName="candi-tab-btn"
          />
          <Button
            label="View All Assigned Jobs"
            backgroundColor="var(--text-white)"
            borderColor="var(--light-gray)"
            labelClassName="btn-label black-2"
            buttonClassName="candi-tab-btn"
          />
        </div>
      </div>
      <div>
        {getTodoData?.map((todoItem, index) => (
          <CandidateDetailCard
            key={index}
            label={todoItem.todo}
            count={todoItem.userId}
            userName={getCandidatesData.firstName}
          />
        ))}
      </div>
    </div>
  );
}

export default CandidateDetailTabs;
