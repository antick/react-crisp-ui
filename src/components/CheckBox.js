import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label }) => (
  <div className="flex items-start">
    <input type="checkbox" className="mt-1 border-gray-400 h-4 w-4 text-teal-600"/>
    <label className="ml-3 text-gray-700 text-sm">{label}</label>
  </div>
);

CheckBox.propTypes = {
  /**
   * Checkbox label
   */
  label: PropTypes.string
};

CheckBox.defaultProps = {
  label: undefined
};

export default CheckBox;
