// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button
      onClick={handleBackClick}
      style={{
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        color: '#ff0002', // Red color for the arrow
        fontSize: '33px', // Adjust font size as needed
        display: 'flex',
        alignItems: 'center',
        marginLeft:'-130px',
        paddingRight: '130px'
      }}
    >
      {/* Font Awesome Icon for the back arrow */}
      <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#ff0002', fontSize: '33px' }} />
    </button>
  );
};

export default BackButton;
