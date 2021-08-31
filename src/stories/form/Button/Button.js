import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ClipLoader from 'react-spinners/ClipLoader';
import './Button.css';

/**
 * Change button text and add spinner when submitting state is set
 *
 * @param submitting
 * @param text
 * @returns {string|*}
 */
const useButtonText = (submitting, text) => (
  <>
    {submitting && (<ClipLoader size="20px" color="#fff" />)}
    {submitting ? <span className="ml-2">Please wait...</span> : text}
  </>
);

export default function Button({
  type, primary, outline, size, label, processing, disabled, ...props
}) {
  const buttonText = useButtonText(processing, label);

  let classes = classNames(
    'inline-flex items-center px-4 py-2 text-base leading-6',
    'font-medium text-white border border-transparent rounded-md',
    'transition ease-in-out duration-150 bg-teal-600',
    'hover:bg-teal-700 focus:border-teal-700 active:bg-teal-700',
    `storybook-button--${size}`,
    disabled && 'cursor-not-allowed opacity-50'
  );

  classes += primary ? 'storybook-button--primary ' : 'storybook-button--secondary ';

  if (outline) {
    classes += 'outline ';
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || processing}
      {...props}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  processing: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  primary: false,
  outline: false,
  size: 'medium',
  disabled: false,
  processing: false,
  onClick: undefined
};
