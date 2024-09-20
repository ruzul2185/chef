import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css'; // Import the CSS file

const BackButton2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button
      onClick={handleBackClick}
      className="back-button" // Apply the CSS class
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

export default BackButton2;
