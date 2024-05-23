import React, { useEffect } from "react";
import CustomDialogue from "../../../../components/CustomDialouge/CustomDialogue.js";
import { useIntl } from "react-intl";
import { candidateFormFieldNames } from "../../../../validationSchema/candidateFormSchema.js";
import InputLabel from "../../../../components/InputLabel/InputLabel.js";
import "./UpdateCandidateDetails.scss";

const UpdateCandidateDetails = ({
  open,
  handleClose,
  handleSubmit,
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  setFieldValue,
  user,
}) => {
  const intl = useIntl();

  useEffect(() => {
    if (user) {
      setFieldValue(candidateFormFieldNames.FIRST_NAME, user.firstName || "");
      setFieldValue(candidateFormFieldNames.LAST_NAME, user.lastName || "");
      setFieldValue(candidateFormFieldNames.AGE, user.age || "");
      setFieldValue(candidateFormFieldNames.GENDER, user.gender || "");
      setFieldValue(candidateFormFieldNames.EMAIL, user.email || "");
      setFieldValue(candidateFormFieldNames.PHONE, user.phone || "");
      setFieldValue(candidateFormFieldNames.BLOOD_GROUP, user.bloodGroup || "");
      setFieldValue(candidateFormFieldNames.WEIGHT, user.weight || "");
      setFieldValue(candidateFormFieldNames.EYE_COLOR, user.eyeColor || "");
      setFieldValue(candidateFormFieldNames.UNIVERSITY, user.university || "");
    }
  }, [user, setFieldValue]);

  return (
    <CustomDialogue
      open={open}
      handleClose={handleClose}
      cancelText={intl.formatMessage({
        id: "label.cancel",
      })}
      confirmText={intl.formatMessage({
        id: "label.save",
      })}
      onCancel={handleClose}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="row mt-4">
          
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.FIRST_NAME}
                  label='First Name'
                  placeholder='Enter First Name'
                  testID="first-name-label" // Add a unique testID prop
                  value={values[candidateFormFieldNames.FIRST_NAME]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.FIRST_NAME] &&
                    errors[candidateFormFieldNames.FIRST_NAME]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.LAST_NAME}
                  label={intl.formatMessage({ id: "label.last_name" })}
                  placeholder={intl.formatMessage({
                    id: "label.enter_last_name",
                  })}
                  value={values[candidateFormFieldNames.LAST_NAME]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.LAST_NAME] &&
                    errors[candidateFormFieldNames.LAST_NAME]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.GENDER}
                  label={intl.formatMessage({ id: "label.gender" })}
                  placeholder={intl.formatMessage({
                    id: "label.enter_gender",
                  })}
                  value={values[candidateFormFieldNames.GENDER]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.GENDER] &&
                    errors[candidateFormFieldNames.GENDER]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.EMAIL}
                  placeholder={intl.formatMessage({
                    id: "label.enter_email",
                  })}
                  label={intl.formatMessage({ id: "label.email" })}
                  value={values[candidateFormFieldNames.EMAIL]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.EMAIL] &&
                    errors[candidateFormFieldNames.EMAIL]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.AGE}
                  placeholder={intl.formatMessage({
                    id: "label.enter_age",
                  })}
                  label={intl.formatMessage({ id: "label.age" })}
                  value={values[candidateFormFieldNames.AGE]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.AGE] &&
                    errors[candidateFormFieldNames.AGE]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.PHONE}
                  placeholder={intl.formatMessage({
                    id: "label.enter_phone",
                  })}
                  label={intl.formatMessage({ id: "label.phone" })}
                  value={values[candidateFormFieldNames.PHONE]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.PHONE] &&
                    errors[candidateFormFieldNames.PHONE]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.BLOOD_GROUP}
                  placeholder={intl.formatMessage({
                    id: "label.enter_blood_group",
                  })}
                  label={intl.formatMessage({ id: "label.blood_group" })}
                  value={values[candidateFormFieldNames.BLOOD_GROUP]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.BLOOD_GROUP] &&
                    errors[candidateFormFieldNames.BLOOD_GROUP]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.WEIGHT}
                  placeholder={intl.formatMessage({
                    id: "label.enter_weight",
                  })}
                  label={intl.formatMessage({ id: "label.weight" })}
                  value={values[candidateFormFieldNames.WEIGHT]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.WEIGHT] &&
                    errors[candidateFormFieldNames.WEIGHT]
                  }
                />
              </div>
            
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.EYE_COLOR}
                  placeholder={intl.formatMessage({
                    id: "label.enter_eye_color",
                  })}
                  label={intl.formatMessage({ id: "label.eye_color" })}
                  value={values[candidateFormFieldNames.EYE_COLOR]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.EYE_COLOR] &&
                    errors[candidateFormFieldNames.EYE_COLOR]
                  }
                />
              </div>
                  
              <div className="mb-2  col-md-6 cus-student-label  ">
                <InputLabel
                  name={candidateFormFieldNames.UNIVERSITY}
                  placeholder={intl.formatMessage({
                    id: "label.enter_university",
                  })}
                  label={intl.formatMessage({ id: "label.university" })}
                  value={values[candidateFormFieldNames.UNIVERSITY]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched[candidateFormFieldNames.UNIVERSITY] &&
                    errors[candidateFormFieldNames.UNIVERSITY]
                  }
                />
              </div>
            
          </div>
        </div>
      
    </CustomDialogue>
  );
};

export default UpdateCandidateDetails;
