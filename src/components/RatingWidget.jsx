import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (starValue) => {
    setRating(starValue);
  };

  const handleMouseEnter = (starValue) => {
    setHoveredRating(starValue);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert('Please select a rating between 1 and 5.');
      return;
    }
    onRatingSubmit(productId, rating);

    setRating(0);
    setHoveredRating(0);
  };

  return (
    <div className="rating-widget">
      <div className="stars" style={{ display: 'flex', marginBottom: '8px' }}>
        {[1, 2, 3, 4, 5].map((starValue) => {
          // Determine fill based on hover or selected rating
          const fillColor = (hoveredRating || rating) >= starValue ? 'gold' : 'grey';
          return (
            <span
              key={starValue}
              style={{ cursor: 'pointer', color: fillColor, fontSize: '24px', marginRight: '5px' }}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
