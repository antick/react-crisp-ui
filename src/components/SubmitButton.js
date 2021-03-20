import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useButtonText from '../hooks/useButtonText';

/**
 * Submit button with submitting state handling
 *
 * @param state
 * @param submitting
 * @param text
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SubmitButton = ({
  state, submitting, text, ...props
}) => {
  const { isValid, dirty } = state;
  const buttonText = useButtonText(submitting, text);
  const submitButtonClasses = classNames(
    'inline-flex items-center px-4 py-2 text-base leading-6',
    'font-medium text-white border border-transparent rounded-md',
    'transition ease-in-out duration-150 bg-teal-600',
    'hover:bg-teal-700 focus:border-teal-700 active:bg-teal-700'
  );

  return (
    <button
      {...props}
      type="submit"
      disabled={!(dirty && isValid) || submitting}
      className={`${submitButtonClasses} ${!(dirty && isValid) ? 'cursor-not-allowed' : ''}`}
    >
      {buttonText}
    </button>
  );
};

SubmitButton.propTypes = {
  state: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default SubmitButton;
