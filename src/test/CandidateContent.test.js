import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CandidateContent from '../views/Candidate/CandidateBodyContainer/CandidateContent';

// Mocking redux actions
jest.mock('../../../store/actions/candidateActions', () => ({
  getCandidates: jest.fn(),
  updateCandidate: jest.fn(() => Promise.resolve()),
}));

// Mocking react-intl
jest.mock('react-intl', () => ({
  useIntl: () => ({
    formatMessage: jest.fn(),
  }),
}));

// Mocking components
jest.mock('../../../components/CustomTabs/CustomTabs', () => {
  return function MockCustomTabs(props) {
    return <div data-testid="mock-custom-tabs">{props.children}</div>;
  };
});

jest.mock('../../../views/Candidate/CandidateBodyContainer/CandidateInfoCard/CandidateInfoCard', () => {
  return function MockCandidateInfoCard(props) {
    return <div data-testid="mock-candidate-info-card">{props.children}</div>;
  };
});

jest.mock('../../../views/Candidate/CandidateBodyContainer/CandidateFormDetails/CandidateFormDetails', () => {
  return function MockCandidateFormDetails(props) {
    return <div data-testid="mock-candidate-form-details">{props.children}</div>;
  };
});

jest.mock('../../../views/Candidate/CandidateBodyContainer/CandidateDetailTabs/CandidateDetailTabs', () => {
  return function MockCandidateDetailTabs(props) {
    return <div data-testid="mock-candidate-detail-tabs">{props.children}</div>;
  };
});

jest.mock('../../../views/Candidate/CandidateBodyContainer/UpdateCandidateDetails/UpdateCandidateDetails', () => {
  return function MockUpdateCandidateDetails(props) {
    return <div data-testid="mock-update-candidate-details">{props.children}</div>;
  };
});

// Mocking useFormik hook
jest.mock('formik', () => ({
  useFormik: jest.fn(() => ({
    values: {},
    handleChange: jest.fn(),
    errors: {},
    touched: {},
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
    setFieldValue: jest.fn(),
    resetForm: jest.fn(),
  })),
}));

const mockStore = configureStore([]);

describe('CandidateContent Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      candidate: {
        getCandidatesData: [], // Mocking initial state as needed
      },
    });
  });

  test('renders CandidateContent component', async () => {
    // Render the component
    const { getByTestId } = render(
      <Provider store={store}>
        <CandidateContent />
      </Provider>
    );

    // Wait for the asynchronous action to complete
    await waitFor(() => {
      // Assertions
      expect(getByTestId('mock-candidate-info-card')).toBeInTheDocument();
      expect(getByTestId('mock-candidate-form-details')).toBeInTheDocument();
      expect(getByTestId('mock-custom-tabs')).toBeInTheDocument();
      expect(getByTestId('mock-update-candidate-details')).toBeInTheDocument();
    });
  });
});
