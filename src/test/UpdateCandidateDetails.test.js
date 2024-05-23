import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
import UpdateCandidateDetails from '../views/candidate/candidateBodyContainer/updatecandidateDetails/updatecandidateDetails';
import { candidateFormFieldNames } from "../validationSchema/candidateFormSchema";

// Mock the CustomDialogue component
jest.mock('../components/CustomDialouge/CustomDialogue', () => {
  return jest.fn(({ children, open }) => open ? <div>{children}</div> : null);
});

describe('UpdateCandidateDetails component', () => {
  const mockIntl = {
    formatMessage: ({ id }) => id,
  };

  jest.mock('react-intl', () => ({
    ...jest.requireActual('react-intl'),
    useIntl: jest.fn().mockReturnValue(mockIntl),
  }));

  test('renders with correct labels and placeholders', () => {
    const mockValues = {
      [candidateFormFieldNames.FIRST_NAME]: 'John',
      [candidateFormFieldNames.LAST_NAME]: 'Doe',
    };

    const mockTouched = {
      [candidateFormFieldNames.FIRST_NAME]: false,
      [candidateFormFieldNames.LAST_NAME]: false,
    };

    const mockErrors = {
      [candidateFormFieldNames.FIRST_NAME]: '',
      [candidateFormFieldNames.LAST_NAME]: '',
    };

    const props = {
      open: true,
      values: mockValues,
      touched: mockTouched,
      errors: mockErrors,
    };

    const { container } = render(
      <IntlProvider locale="en" messages={{}}>
        <UpdateCandidateDetails {...props} />
      </IntlProvider>
    );

    console.log('body-part2', container.innerHTML); // Print the HTML content of the rendered component
    console.log('body-part', document.body.innerHTML); // Print the entire body content
    console.log('screen', screen.debug()); // Print the debug output of the rendered component
  });
});
