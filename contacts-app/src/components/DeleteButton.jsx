/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';

function DeleteButton({ id, onDelete }) {
  return <button className="contact-item__delete" onClick={() => onDelete(id)}><FiDelete /></button>;
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
