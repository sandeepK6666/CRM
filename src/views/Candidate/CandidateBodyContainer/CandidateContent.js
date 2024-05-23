import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CandidateInfoCard from "./CandidateInfoCard/CandidateInfoCard";
import CandidateFormDetails from "./CandidateFormDetails/CandidateFormDetails";
import { getCandidates } from "../../../store/actions/candidateActions";
import CandidateDetailTabs from "../CanditateDetailTabs/CandidateDetailTabs";
import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import UpdateCandidateDetails from "./UpdateCandidateDetails/UpdateCandidateDetails";
import { useIntl } from "react-intl";
import { updateCandidate } from "../../../store/actions/candidateActions.js";
import { useFormik } from 'formik';
import {
  candidateFormFieldNames,
  candidateFormInitialValues,
  validationSchema,
} from "../../../validationSchema/candidateFormSchema.js";

function CandidateContent() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const getCandidatesData = useSelector(
    (state) => state?.candidate?.getCandidatesData
  );

  
  useEffect(() => {
    dispatch(getCandidates());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const tabLabels = ["All Details", "Assigned Jobs", "Related Emails", "Candidate Questions", "Hotlists", 'Related Deals', 'Contact(s) Pitched'];

  const tabComponents = [
    {
      component: CandidateDetailTabs,
      props: {},
    },
  ];

  const onEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: candidateFormInitialValues,
    onSubmit: (values) => {
      dispatch(
        updateCandidate({
          
            ...values,
            userId: selectedUser.id,
          
        })
      ).then(() => {
        setIsModalOpen(false);
      });
    },
    validationSchema: validationSchema(intl),
  });

  return (
    <div>
      <CandidateInfoCard
        user={selectedUser}
        onEditClick={onEditClick}
        candidatesData={getCandidatesData}
      />
      <CandidateFormDetails candidatesData={getCandidatesData} />
      <CustomTabs
        tabLabels={tabLabels}
        tabComponents={tabComponents}
        tabsClassname="candidate-tabs"
      />
      {isModalOpen && (
        <UpdateCandidateDetails
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          handleSubmit={handleSubmit}
          values={values}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
          user={selectedUser}
        />
      )}
    </div>
  );
}

export default CandidateContent;
