import * as Yup from 'yup';
import { EMAIL_REGEX } from '../core/validation';

export const candidateFormFieldNames = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  AGE: 'age',
  GENDER: 'gender',
  EMAIL: 'email',
  PHONE: 'phone',
  BLOOD_GROUP: 'bloodGroup',
  WEIGHT: 'weight',
  EYE_COLOR: 'eyeColor',
  UNIVERSITY:'university'
};

export const candidateFormInitialValues = {
  [candidateFormFieldNames.FIRST_NAME]: '',
  [candidateFormFieldNames.LAST_NAME]: '',
  [candidateFormFieldNames.AGE]: '',
  [candidateFormFieldNames.GENDER]: '',
  [candidateFormFieldNames.EMAIL]: '',
  [candidateFormFieldNames.PHONE]: '',
  [candidateFormFieldNames.BLOOD_GROUP]: '',
  [candidateFormFieldNames.WEIGHT]: '',
  [candidateFormFieldNames.EYE_COLOR]: '',
  [candidateFormFieldNames.UNIVERSITY]: '',
};

export const validationSchema = (intl) => {
  return Yup.object().shape({
    [candidateFormFieldNames.FIRST_NAME]: Yup.string().required(intl.formatMessage({ id: 'label.first_name_required' })),
    [candidateFormFieldNames.LAST_NAME]: Yup.string().required(intl.formatMessage({ id: 'label.last_name_required' })),
    [candidateFormFieldNames.AGE]: Yup.string().required(intl.formatMessage({ id: 'label.age_required' })),
    [candidateFormFieldNames.GENDER]: Yup.string().required(intl.formatMessage({ id: 'label.gender_required' })),
    [candidateFormFieldNames.EMAIL]: Yup.string().matches(EMAIL_REGEX, intl.formatMessage({ id: 'label.email_invalid' })).required(intl.formatMessage({ id: 'label.email_required' })),
    [candidateFormFieldNames.PHONE]: Yup.string().required(intl.formatMessage({ id: 'label.phone_required' })),
    [candidateFormFieldNames.BLOOD_GROUP]: Yup.string().required(intl.formatMessage({ id: 'label.blood_group_required' })),
    [candidateFormFieldNames.WEIGHT]: Yup.string().required(intl.formatMessage({ id: 'label.weight_required' })),
    [candidateFormFieldNames.EYE_COLOR]: Yup.string().required(intl.formatMessage({ id: 'label.eye_color_required' })),
    [candidateFormFieldNames.UNIVERSITY]: Yup.string().required(intl.formatMessage({ id: 'label.university_required' })),
  });
};


